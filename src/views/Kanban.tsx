import { useStore } from "../store/useStore";

const columns = ["TODO", "IN_PROGRESS", "IN_REVIEW", "DONE"];

export default function Kanban() {
  const { tasks, updateTaskStatus } = useStore();

  return (
    <div className="flex gap-4">
      {columns.map((col) => (
        <div
          key={col}
          className="w-1/4 bg-gray-100 p-2 min-h-[400px]"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            const id = Number(e.dataTransfer.getData("taskId"));
            updateTaskStatus(id, col);
          }}
        >
          <h2 className="font-bold">{col}</h2>

          {tasks
            .filter((t: any) => t.status === col)
            .map((task: any) => (
              <div
                key={task.id}
                draggable
                onDragStart={(e) =>
                  e.dataTransfer.setData("taskId", task.id)
                }
                className="bg-white p-2 m-2 shadow cursor-grab"
              >
                {task.title}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
export {};