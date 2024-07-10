import "../../css/styles.css"
import Cell from "./cell"

export default function Board({ width, height }) {

    function uncoverHiddenCell() {

    }

    function testButtonCell() {
        console.log("Cell clicked.")
    }

    return (
        <div className="board">
            <Cell value={"1"} onCellClick={testButtonCell} />
            <Cell value={"2"} />
            <Cell value={"3"} />
        </div>
    )
}
