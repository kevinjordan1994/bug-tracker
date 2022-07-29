import BugList from "./components/BugList/BugList";
import NewBug from "./components/NewBug/NewBug";
import Modal from "./components/Modals/Modal";
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
  const [modalVisible, setModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("There was an error.");

  const removeBug = (id) => {
    const selectedBug = currentBugs.find((bug) => bug.key === id);
    setNewBugs((prev) => prev.filter((bug) => bug !== selectedBug));
  };

  const checkBugTitleExists = (newBug) => {
    const duplicateBug = currentBugs.find((bug) => bug.name === newBug.name);
    return duplicateBug ? false : true;
  };

  const showLengthError = () => {
    setErrorMessage("The description needs to be at least 10 characters long.");
    toggleModal();
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const addNewBug = (newBug) => {
    if (!checkBugTitleExists(newBug)) {
      setErrorMessage("A bug with this name is already on record!");
      toggleModal();
      return;
    }
    setNewBugs((prev) => [...prev, newBug]);
  };

  return (
    <div className="app-container">
      {modalVisible && (
        <Modal errorMessage={errorMessage} onCloseModal={toggleModal} />
      )}
      <BugList bugs={currentBugs} onRemoveBug={removeBug} />
      <NewBug onSubmitNewBug={addNewBug} onLengthError={showLengthError} />
    </div>
  );
}

export default App;
