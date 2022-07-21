import BugList from "./components/BugList/BugList";
import NewBug from "./components/NewBug/NewBug";
import "./App.css";
import { useState } from "react";

function App() {
  const bugs = [
    {
      key: "bug1",
      name: "TEST",
      priority: "HIGH",
      assignedTo: "Kevin",
      description:
        "Profile pictures from the User Data are not being loaded properly into the Application",
    },
    {
      key: "bug2",
      name: "TEST 2",
      priority: "LOW",
      assignedTo: "Josh",
      description: "This is a test.",
    },
  ];

  const [currentBugs, setNewBugs] = useState(bugs);

  const addNewBug = (newBug) => {
    setNewBugs((prev) => [...prev, newBug]);
  };

  return (
    <div className="app-container">
      <BugList bugs={currentBugs} />
      <NewBug onSubmitNewBug={addNewBug} />
    </div>
  );
}

export default App;
