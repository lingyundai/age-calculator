function Calculator() {
    return (
        <form class="max-w-fit pt-6">
            <div class="flex pt-5 space-x-4 justify-center">
                <div class="w-1/4">
                    <label>DAY</label>
                    <input name="day" class="border rounded-md w-full py-3.5 focus:outline-none focus:border-violet-500" />
                </div>
                <div class="w-1/4">
                    <label>MONTH</label>
                    <input name="month" class="border rounded-md w-full py-3.5 focus:outline-none focus:border-violet-500" />
                </div>
                <div class="w-1/4">
                    <label>YEAR</label>
                    <input name="year" class="border rounded-md w-full py-3.5 focus:outline-none focus:border-violet-500" />
                </div>
            </div>
            <div class="pt-16 px-7">
                <hr />
            </div>
        </form>
    )
}

export default Calculator;