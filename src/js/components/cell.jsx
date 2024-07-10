import "../../css/styles.css"

export default function Cell({ value, onCellClick }) {
    return (
        <button
            className="hidden-cell"
            onClick={onCellClick}
        >
            {value}
        </button>
    )
}
