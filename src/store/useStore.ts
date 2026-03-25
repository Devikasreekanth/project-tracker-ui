import { create } from "zustand";
import { generateTasks } from "../utils/generateTasks";

export const useStore = create((set: any) => ({
  tasks: generateTasks(),

  updateTaskStatus: (id: number, status: string) =>
    set((state: any) => ({
      tasks: state.tasks.map((t: any) =>
        t.id === id ? { ...t, status } : t
      ),
    })),
}));
export {};