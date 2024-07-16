"use client"
import { useState } from "react"
import DifficultyButton from "./difficultybutton"
import Board from "./board"

export default function Main() {
    // The difficulty variables save the width, height and number of mines
    const beginnerDifficulty = [9, 9, 10]
    const intermediateDifficulty = [16, 16, 40]
    const expertDifficulty = [16, 30, 99]

    const [isOnCustomDifficulty, setIsOnCustomDifficulty] = useState(true)
    const [boardRows, setBoardRows] = useState(expertDifficulty[0])
    const [boardColumns, setBoardColumns] = useState(expertDifficulty[1])
    const [minesNum, setMinesNum] = useState(expertDifficulty[2])
    const [boardData, setBoardData] = useState(Array(boardRows).fill(Array(boardColumns).fill('*')))

    function generateNewBoard() {
        console.log("HEIGHT: " + boardRows)
        console.log("WIDTH: " + boardColumns)
        setBoardData(Array(boardRows).fill(Array(boardColumns).fill('*')))
        const tempData = boardData.slice()

        console.log("TEMP 1: " + tempData)
        for (let m = 0; m < minesNum; m++) {
            tempData[0][0] = '*'
            console.log(tempData[m / boardColumns][m % boardColumns])
        }
        console.log("TEMP 2: " + tempData)

        console.log("MINES: " + minesNum)
        console.log("DATA: " + boardData)
    }

    function handleCustomDifficultySelected() {
        setIsOnCustomDifficulty(true)
        console.log("ON CUSTOM DIFFICULTY")
    }

    function onDifficultySelected(difficulty) {
        console.log("SELECTED DIFFICULTY: " + difficulty)
        setIsOnCustomDifficulty(false)
        setBoardRows(difficulty[0])
        setBoardColumns(difficulty[1])
        setMinesNum(difficulty[2])
        generateNewBoard()
        console.log("MINES NUM: " + minesNum)
    }

    function handleResetGameRequest() {
        console.log("GAME RESET")
        generateNewBoard()
    }

    return (
        <>
            <div className="container-row">
                <DifficultyButton value={"Beginner"} onButtonClicked={() => onDifficultySelected(beginnerDifficulty)} />
                <DifficultyButton value={"Intermediate"} onButtonClicked={() => onDifficultySelected(intermediateDifficulty)} />
                <DifficultyButton value={"Expert"} onButtonClicked={() => onDifficultySelected(expertDifficulty)} />
                <DifficultyButton value={"Custom"} onButtonClicked={() => handleCustomDifficultySelected} selected={isOnCustomDifficulty} />
            </div>

            {isOnCustomDifficulty &&

                (
                    <form action={generateNewBoard}>
                        <div className="container-row">
                            <div className="container-row">
                                <label>Width</label>
                                <input
                                    value={boardColumns}
                                    type="number"
                                    min="1"
                                    max="10000"
                                    onChange={e => setBoardColumns(e.target.value)}
                                />
                            </div>
                            <div className="container-row">
                                <label>Height</label>
                                <input
                                    value={boardRows}
                                    type="number"
                                    min="1"
                                    max="10000"
                                    onChange={e => setBoardRows(e.target.value)}
                                />
                            </div>
                            <div className="container-row">
                                <label>Mines</label>
                                <input
                                    value={minesNum}
                                    type="number"
                                    min="1"
                                    max="10000"
                                    onChange={e => setMinesNum(e.target.value)}
                                />
                            </div>
                            <button type="submit">Update</button>
                        </div>
                    </form>
                )
            }
            <br /><br />
            <Board boardData={boardData} minesNum={minesNum} resetGame={handleResetGameRequest} />
        </>
    )
}