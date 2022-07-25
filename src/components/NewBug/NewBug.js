import { useState } from "react";
import "./NewBug.css";
import "../UI/Card.css";
import "../UI/Button.css";

function NewBug(props) {
  const teamMembers = ["Kevin", "Josh", "Nick"];

  const [currentName, setNewName] = useState("New Bug");
  const [currentPriority, setNewPriority] = useState("LOW");
  const [currentMember, setNewMember] = useState("Kevin");
  const [currentDescription, setNewDescription] = useState("");

  const nameChangeHandler = (event) => {
    setNewName(event.target.value);
  };

  const priorityChangeHandler = (event) => {
    setNewPriority(event.target.value);
  };

  const memberChangeHandler = (event) => {
    setNewMember(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setNewDescription(event.target.value);
  };

  const addBug = (event) => {
    event.preventDefault();
    const newBug = {
      key: Math.random() * 100,
      name: currentName,
      priority: currentPriority,
      assignedTo: currentMember,
      description: currentDescription,
    };
    props.onSubmitNewBug(newBug);
  };

  return (
    <div className="new-bug">
      <div className="card new-bug-form">
        <h1>New Bug</h1>
        <form onSubmit={addBug}>
          <div className="new-name user-field">
            <label>Name: </label>
            <input
              className="selected-name"
              type="text"
              placeholder="New Bug"
              onChange={nameChangeHandler}
            ></input>
          </div>
          <div className="new-priority user-field">
            <label>Priority: </label>
            <select
              className="selected-priority"
              onChange={priorityChangeHandler}
            >
              <option>LOW</option>
              <option>MEDIUM</option>
              <option>HIGH</option>
            </select>
          </div>
          <div className="assign-to user-field">
            <label>Assign: </label>
            <select className="selected-member" onChange={memberChangeHandler}>
              {teamMembers.map((member) => (
                <option key={member}>{member}</option>
              ))}
            </select>
          </div>
          <div className="description-input user-field">
            <label>Description: </label>
            <textarea
              cols="50"
              rows="10"
              className="selected-description"
              onChange={descriptionChangeHandler}
            ></textarea>
          </div>
          <div className="user-field">
            <button className="add-bug-btn button" type="submit">
              ADD BUG
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewBug;
