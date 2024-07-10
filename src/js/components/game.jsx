"use client"
import { useState } from "react"
import Board from "./board"

export default function Game() {
    const [width, setWidth] = useState(9)
    const [height, setHeight] = useState(9)

    return (
        <Board width = {width} height = {height} />
    )
}