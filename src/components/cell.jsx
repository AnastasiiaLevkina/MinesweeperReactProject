"use client"
import { useState } from "react"
import "../css/style.css"

export default function Cell({ value, onCellClick, onRightCellClick, gameEnded }) {

    const [isHidden, setIsHidden] = useState(true)
    const [isFlagged, setIsFlagged] = useState(false)
    const [isQuestioned, setIsQuestioned] = useState(false)

    function onCellLeftClick() {
        if (isHidden) {
            if (!isFlagged && !isQuestioned) {
                setIsHidden(false)
                onCellClick()
            }

        } else {
            onUncoveredCellClick()
        }
    }

    function onCellRightClick() {
        if (isHidden) {
            if (isQuestioned) {
                setIsQuestioned(false)
            } else {
                setIsQuestioned(isFlagged)
                setIsFlagged(!isFlagged)
                onRightCellClick(isFlagged ? 1 : -1)
            }
        }
    }

    function onUncoveredCellClick() {
        console.log("On uncovered cell " + value + " clicked")
    }


    const handleContextMenu = (event) => {
        event.preventDefault(); // Prevent the default context menu from appearing
        onCellRightClick()
    };

    if (isHidden) {
        return (
            <button
                className="cell hidden-cell"
                onClick={onCellLeftClick}
                onContextMenu={handleContextMenu}
                disabled={gameEnded}
            >
                {!isFlagged ? "" :
                    <img
                        src="https://th.bing.com/th/id/R.4b150dcf9ab181e70a4c093a5141a4bc?rik=Gs1lJBSAyBMW8w&riu=http%3a%2f%2fminesweeperonline.com%2fflag.png&ehk=8kJpPOi1ilGxBWNrLIeqHsRCugxpDv%2fkRzOzTKiTGD4%3d&risl=&pid=ImgRaw&r=0"
                        className="cell-image"
                        alt="mine image"
                    />
                }
                {
                    !isQuestioned ? "" :
                        <img
                            src="https://th.bing.com/th/id/OIP.XSoAeoH__sncJvFYKWKXbQHaFs?rs=1&pid=ImgDetMain"
                            className="cell-image"
                            alt="question image"
                        />
                }
            </button >
        )
    } else if (value === '*') {
        return (
            <button
                className="cell opened-mined-cell"
                disable=""
                onContextMenu={handleContextMenu}
                disabled={gameEnded}
            >
                <img
                    src="https://thumbnail.imgbin.com/17/18/10/imgbin-microsoft-minesweeper-land-mine-minesweeper-classic-fr-windows-minesweeper-JYPmFi21Nysb1nFiSqk6cFMmG_t.jpg"
                    className="cell-image"
                    alt="mine image"
                />
            </button>
        )
    } else {
        return (
            <button
                className="cell opened-cell"
                onClick={onUncoveredCellClick}
                onContextMenu={handleContextMenu}
                disabled={gameEnded}
            >
                {value}
            </button>
        )
    }
}
