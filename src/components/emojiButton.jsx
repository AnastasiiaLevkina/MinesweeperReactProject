"use client"
import { useState } from "react"
import "../css/style.css"

export default function EmojiButton({ onButtonClick }) {
    const [isDead, setIsDead] = useState(false)
    const [isHappy, setIsHappy] = useState(false)

    const NEUTRAL_EMOJI = "https://ih1.redbubble.net/image.395419500.9164/pp,504x498-pad,600x600,f8f8f8.u2.jpg"
    const HAPPY_EMOJI = "https://tainguynnn.github.io/DSA_minesweeper/assets/smile.png"
    const DEAD_EMOJI = "https://ih0.redbubble.net/image.395419500.9164/flat,1000x1000,075,f.u3.jpg"

    return (
        <button className="emoji-button" onClick={onButtonClick}>
            {isDead ? (
                <img src={DEAD_EMOJI} className="emoji-image" alt="Dead emoji" />
            ) : isHappy ? (
                <img src={HAPPY_EMOJI} className="emoji-image" alt="Happy emoji" />
            ) : (
                <img src={NEUTRAL_EMOJI} className="emoji-image" alt="Neutral emoji" />
            )}
        </button>
    )
}