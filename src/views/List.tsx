import { useStore } from "../store/useStore";

export default function List() {
  const { tasks } = useStore();

  return (
    <div className="h-[400px] overflow-y-scroll">
      <table className="w-full">
        <thead>
          <tr>
            <th>Title</th>
            <th>Priority</th>
          </tr>
        </thead>

        <tbody>
          {tasks.slice(0, 50).map((t: any) => (
            <tr key={t.id}>
              <td>{t.title}</td>
              <td>{t.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export {};