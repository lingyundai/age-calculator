function Calculator() {
    return (
        <form class="flex">
            <label>
                DAY
                <input name="day" />
            </label>
            <label>
                MONTH
                <input name="month" />
            </label>
            <label>
                YEAR
                <input name="year" />
            </label>
        </form>
    )
}

export default Calculator;