import "./css/App.css";
import Sqaure from "./components/Sqaure";

function App() {
  const squareOnClick = () => {
    alert("GAMMAC AH!");
  };

  return (
    <div className="Container">
      <h2>Welcome to Tac Tic Toe</h2>
      <div className="">
        <h4>Next turn: X</h4>
        <h4>Winner: X</h4>
      </div>
      <button
        onClick={() => {
          alert("SHANTHA BOISSSS!");
        }}
      >
        Reset
      </button>
      <div className="Game-Container">
        {Array(3)
          .fill(null)
          .map((_, columnIndex) => (
            <div key={columnIndex} className="Column">
              {Array(3)
                .fill(null)
                .map((_, rowIndex) => (
                  <div className="Row">
                    <Sqaure
                      key={rowIndex}
                      value={"O"}
                      onClick={() => squareOnClick()}
                    />
                  </div>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
