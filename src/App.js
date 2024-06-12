import "./css/App.css";
import Square from "./components/Sqaure";
import { useState } from "react";

function App() {
  const [isNext, setIsNext] = useState(true);
  const [winner, setWinner] = useState();
  const [squares, setSquares] = useState(Array(9).fill(null));
  const squareOnClick = (index) => {
    if (squares[index] || winner) return;

    const newSquares = squares.slice();
    newSquares[index] = isNext ? "X" : "O";
    setSquares(newSquares);
    setIsNext(!isNext);
    setWinner(calculateWinner(newSquares));
  };

  const calculateWinner = (sqaures) => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  return (
    <div className="Container">
      <h2>Welcome to Tac Tic Toe</h2>
      <div className="Meta-Data">
        <h4>Next turn: {isNext ? "X" : "O"}</h4>
        <h4>Winner: {winner ? winner : "None"}</h4>
      </div>
      <button
        className="Button"
        onClick={() => {
          setIsNext(true);
          setWinner(null);
          setSquares(Array(9).fill(null));
        }}
      >
        Reset
      </button>
      <div className="Game-Container">
        {Array(3)
          .fill(null)
          .map((_, rowIndex) => (
            <div key={rowIndex} className="Row">
              {Array(3)
                .fill(null)
                .map((_, columnIndex) => {
                  const index = rowIndex * 3 + columnIndex;
                  return (
                    <div className="Column">
                      <Square
                        key={index}
                        value={squares[index]}
                        onClick={() => squareOnClick(index)}
                      />
                    </div>
                  );
                })}
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
