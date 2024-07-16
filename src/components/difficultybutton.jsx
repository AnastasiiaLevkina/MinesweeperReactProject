"use client"
import { useState } from "react"
import "../css/style.css"

export default function DifficultyButton({ value, onButtonClicked, selected }) {

    const [isSelected, setIsSelected] = useState(selected)

    function handleDifficultyButtonSelected() {
        onButtonClicked()
        setIsSelected(true)
    }

    return (
        <button
            className={"difficulty-button " + (isSelected ? "selected-difficulty-button" : "unselected-difficulty-button")}
            onClick={handleDifficultyButtonSelected}
        >
            {value}
        </button>
    )
}
