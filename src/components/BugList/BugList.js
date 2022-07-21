import Bug from "./Bug";
import "./BugList.css";

function BugList(props) {
  return props.bugs.map((bug) => (
    <div className="bug-list">
      <Bug bug={bug} />
    </div>
  ));
}

export default BugList;
