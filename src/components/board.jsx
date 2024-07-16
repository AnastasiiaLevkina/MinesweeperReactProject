"use client"
import { useState } from "react"

import "../css/style.css"
import Cell from "./cell"
import Header from "./header"

export default function Board({ boardData, minesNum, resetGame }) {
    const [flagsLeft, setFlagsLeft] = useState(minesNum)
    const [hasWon, setHasWon] = useState(false)
    const [hasLost, setHasLost] = useState(false)


    function handleCellClick(value, key) {
        if (value === '*') {
            handleUncoveredMinedCell()
        } else {
            countMinesAroundCell(key)
        }
    }

    function countMinesAroundCell(key) {
        console.log(key)
    }

    function handleUncoveredMinedCell() {
        setHasLost(true)
    }

    function handleRightCellClick(flag) {
        setFlagsLeft(flagsLeft => flagsLeft + flag)
    }

    return (
        <div className="board">
            <Header
                flagsLeft={flagsLeft}
                onEmojiButtonClick={
                    resetGame
                }
                minesNum={minesNum} />

            <div className="minefield">
                {boardData.map((row, i) => {
                    return (
                        <div key={i} style={{ display: "flex", flexDirection: "row" }}>
                            {
                                row.map((cell, j) => {
                                    return (
                                        <Cell
                                            key={j}
                                            onCellClick={handleCellClick}
                                            onRightCellClick={handleRightCellClick}
                                            value={boardData[i][j]}
                                            gameEnded={hasLost || hasWon}
                                        />
                                    )
                                })
                            }
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
