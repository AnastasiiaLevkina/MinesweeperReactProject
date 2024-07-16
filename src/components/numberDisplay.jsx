import "../css/style.css"

export default function NumberDisplay({ value }) {
    const maxValue = 1000
    const min3DigitValue = 100
    const min2DigitValue = 10
    const min2DigitNegativeNumber = -9
    const minNEgativeNumber = -99

    function getFormattedNumber() {
        let displayNumber
        if (value >= maxValue) {
            displayNumber = "999"
        } else if (value < min2DigitValue && value >= 0) {
            displayNumber = "00" + value
        } else if (value < min3DigitValue && value > min2DigitNegativeNumber) {
            displayNumber = "0" + value
        } else if (value < minNEgativeNumber) {
            displayNumber = "-99"
        } else {
            displayNumber = value
        }
        return displayNumber
    }


    return (
        <div className="digital-display">
            <h1 className="digital-text">
                {getFormattedNumber()}
            </h1>
        </div>
    )
}