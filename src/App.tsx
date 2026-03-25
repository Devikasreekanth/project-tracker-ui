import { useState } from "react";
import Kanban from "./views/Kanban";
import List from "./views/List";
import Timeline from "./views/Timeline";

function App() {
  const [view, setView] = useState("kanban");

  return (
    <div className="p-4">
      <div className="flex gap-4 mb-4">
        <button onClick={() => setView("kanban")}>Kanban</button>
        <button onClick={() => setView("list")}>List</button>
        <button onClick={() => setView("timeline")}>Timeline</button>
      </div>

      {view === "kanban" && <Kanban />}
      {view === "list" && <List />}
      {view === "timeline" && <Timeline />}
    </div>
  );
}

export default App;