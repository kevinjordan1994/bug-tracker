import Bug from "./Bug";
import "./BugList.css";

function BugList(props) {
  return (
    <div className="bug-list">
      {props.bugs.map((bug) => (
        <Bug bug={bug} key={bug.key} />
      ))}
    </div>
  );
}

export default BugList;
