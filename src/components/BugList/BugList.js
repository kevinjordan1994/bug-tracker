import Bug from "./Bug";
import "./BugList.css";

function BugList(props) {
  const removeBug = (id) => {
    props.onRemoveBug(id);
  };
  return (
    <div className="bug-list">
      {props.bugs.map((bug) => (
        <Bug bug={bug} key={bug.key} onRemoveBug={removeBug} />
      ))}
    </div>
  );
}

export default BugList;
