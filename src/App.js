import Square from "./Square";
import {useState} from "react";

export default function App() {
    // Make the ui proper

    const [board, setBoard] = useState(new Array(9).fill(null))
    const [currentPlayer, setCurrentPlayer] = useState("X")

    const handleSquareClick = (boardIndex) => {
        if (board[boardIndex] !== null) {
            return
        }
        const boardCopy = [...board]
        boardCopy[boardIndex] = currentPlayer
        setBoard(boardCopy)
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
    }

    return (
        <>
            <div className="board-row">
                <Square value={board[0]} onClick={() => handleSquareClick(0)}/>
                <Square value={board[1]} onClick={() => handleSquareClick(1)}/>
                <Square value={board[2]} onClick={() => handleSquareClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={board[3]} onClick={() => handleSquareClick(3)}/>
                <Square value={board[4]} onClick={() => handleSquareClick(4)}/>
                <Square value={board[5]} onClick={() => handleSquareClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={board[6]} onClick={() => handleSquareClick(6)}/>
                <Square value={board[7]} onClick={() => handleSquareClick(7)}/>
                <Square value={board[8]} onClick={() => handleSquareClick(8)}/>
            </div>
        </>
    )
        ;
}
