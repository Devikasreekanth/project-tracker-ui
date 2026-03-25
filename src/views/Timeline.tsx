import { useStore } from "../store/useStore";

export default function Timeline() {
  const { tasks } = useStore();

  return (
    <div className="overflow-x-scroll flex gap-4">
      {tasks.slice(0, 20).map((task: any) => (
        <div
          key={task.id}
          className="bg-blue-400 h-6 min-w-[100px]"
        >
          {task.title}
        </div>
      ))}
    </div>
  );
}
export {};