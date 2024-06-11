import "./css/App.css";
import Sqaure from "./components/Sqaure";

function App() {
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
        <div className="Row">
          <Sqaure value={"O"} />
          <Sqaure value={"X"} />
          <Sqaure value={"O"} />
        </div>
        <div className="Row">
          <Sqaure value={"O"} />
          <Sqaure value={"X"} />
          <Sqaure value={"O"} />
        </div>
        <div className="Row">
          <Sqaure value={"O"} />
          <Sqaure value={"X"} />
          <Sqaure value={"O"} />
        </div>
      </div>
    </div>
  );
}

export default App;
