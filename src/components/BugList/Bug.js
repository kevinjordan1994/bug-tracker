import "./Bug.css";
import "../UI/Card.css";

function Bug(props) {
  return (
    <div className="card bug">
      <h2 className="bug-name">{props.bug.name}</h2>
      <label className="priority-label">Priority: </label>
      <p className="priority">{props.bug.priority}</p>
      <h3 className="assigned">Assigned to: {props.bug.assignedTo}</h3>
      <p className="description">{props.bug.description}</p>
      <form>
        <label htmlFor="status">Status:</label>
        <select name="status" className="status">
          <option value="Unresolved">Unresolved</option>
          <option value="Fixes Underway">Fixes Underway</option>
          <option value="Resolved">Resolved</option>
        </select>
        <button className="delete-bug">Delete</button>
      </form>
    </div>
  );
}

export default Bug;
