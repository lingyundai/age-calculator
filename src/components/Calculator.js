function Calculator() {
    return (
        <form class="flex mt-12 ml-12 space-x-6">
        <div>
            <label class="flex flex-col">DAY</label>
            <input name="day" class="border p-4 w-32 rounded-md mt-1" />
        </div>
        <div>
            <label class="flex flex-col">MONTH</label>
            <input name="month" class="border p-4 w-32 rounded-md mt-1" />
        </div>
        <div>
            <label class="flex flex-col">YEAR</label>
            <input name="year" class="border p-4 w-32 rounded-md mt-1" />
        </div>
        </form>
    )
}

export default Calculator;