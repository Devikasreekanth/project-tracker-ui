export type Status = "TODO" | "IN_PROGRESS" | "IN_REVIEW" | "DONE";

export type Priority = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

export type Task = {
  id: number;
  title: string;
  status: Status;
  priority: Priority;
  assignee: string;
  startDate?: string;
  dueDate: string;
};

export {}; 