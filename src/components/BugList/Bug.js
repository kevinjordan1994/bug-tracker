import "./Bug.css";
import "../UI/Card.css";
import "../UI/Button.css";

function Bug(props) {
  return (
    <div className="card bug">
      <div className="top">
        <h2 className="bug-name">{props.bug.name}</h2>
        <div className="priority-div">
          <label className="priority-label">Priority: </label>
          <p className="priority">{props.bug.priority}</p>
        </div>
        <div className="member-div">
          <label className="assigned-label">Assigned: </label>
          <p className="assigned">{props.bug.assignedTo}</p>
        </div>
      </div>
      <div className="middle">
        <p className="description">{props.bug.description}</p>
      </div>
      <form className="bottom">
        <div className="status-container">
          <label className="status-label">Status:</label>
          <select name="status" className="status">
            <option value="Unresolved">Unresolved</option>
            <option value="Fixes Underway">Fixes Underway</option>
            <option value="Resolved">Resolved</option>
          </select>
        </div>
        <button className="button">REMOVE</button>
      </form>
    </div>
  );
}

export default Bug;
