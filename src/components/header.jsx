"use client"
import { useState } from "react"
import "../css/style.css"
import NumberDisplay from "./numberdisplay"
import EmojiButton from "./emojiButton"

export default function Header({ onEmojiButtonClick, flagsLeft }) {
    const [secondsPassed, setSecondsPassed] = useState(0)
    const [onPause, setOnPause] = useState(false)

    const getTime = () => {
        const time = Date.parse("999") - Date.now()
    }

    function handleEmojiButtonClicked() {
        console.log("EMOJI BUTTON PRESSED")
        setSecondsPassed(0)
        console.log("TIME: " + Date.now())
        onEmojiButtonClick
    }

    return (
        <div className="board-header">

            <NumberDisplay value={flagsLeft ? flagsLeft : 0} />
            <EmojiButton onButtonClick={handleEmojiButtonClicked} />
            <NumberDisplay value={secondsPassed} />
        </div>
    )
}