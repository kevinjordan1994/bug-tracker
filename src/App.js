import BugList from "./components/BugList/BugList";
import NewBug from "./components/NewBug/NewBug";

function App() {
  const bugs = [
    {
      name: "TEST",
      priority: "HIGH",
      assignedTo: "Kevin",
      description:
        "Profile pictures from the User Data are not being loaded properly into the Application",
    },
    {
      name: "TEST 2",
      priority: "LOW",
      assignedTo: "Josh",
      description: "This is a test.",
    },
  ];

  return (
    <div className="app-container">
      <BugList bugs={bugs} />
      <NewBug />
    </div>
  );
}

export default App;
