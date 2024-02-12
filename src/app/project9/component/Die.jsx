import "./Die.style.css";

function Die({ value, color, holdDice }) {
  return (
    <div
      onClick={() => holdDice}
      style={{ backgroundColor: color }}
      className="die-container"
    >
      <p className="die-number">{value}</p>
    </div>
  );
}

export default Die;
