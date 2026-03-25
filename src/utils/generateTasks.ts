import { Task } from "../types/task";

export const generateTasks = (): Task[] => {
  const statuses = ["TODO", "IN_PROGRESS", "IN_REVIEW", "DONE"] as const;
  const priorities = ["LOW", "MEDIUM", "HIGH", "CRITICAL"] as const;
  const users = ["Devu", "Arun", "Ravi", "Anu", "Neha", "John"];

  return Array.from({ length: 500 }, (_, i) => ({
    id: i,
    title: `Task ${i}`,
    status: statuses[Math.floor(Math.random() * 4)],
    priority: priorities[Math.floor(Math.random() * 4)],
    assignee: users[Math.floor(Math.random() * users.length)],
    dueDate: new Date(
      Date.now() + Math.random() * 7 * 86400000
    ).toISOString(),
  }));
};

export {}; 