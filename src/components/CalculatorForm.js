import { useState } from "react";
import { add } from 'date-fns';

function CalculatorForm() {
    const [day, setDay] = useState(null);
    const [month, setMonth] = useState(null);
    const [year, setYear] = useState(null);

    function statesBundle(day, month, year) {
        setDay(day);
        setMonth(month);
        setYear(year);
    }

    return (
        <form class="max-w-fit pt-6 font-poppins font-semibold text-[11px] tracking-[0.2em]">
            <div class="flex pt-5 space-x-4 justify-center text-stone-500">
                <div class="w-1/4">
                    <label>DAY</label>
                    <input value={day}
                        name="day" 
                        class="border rounded-md w-full
                        text-lg py-2 text-black tracking-wider indent-3
                        focus:outline-none focus:border-violet-500" />
                </div>
                <div class="w-1/4">
                    <label>MONTH</label>
                    <input value={month}
                        name="month" class="border rounded-md w-full 
                        text-lg py-2 text-black tracking-wider indent-3
                        focus:outline-none focus:border-violet-500" />
                </div>
                <div class="w-1/4">
                    <label>YEAR</label>
                    <input value={year}
                        name="year" class="border rounded-md w-full 
                        text-lg py-2 text-black tracking-wider indent-3
                        focus:outline-none focus:border-violet-500" />
                </div>
            </div>
            <div class="pt-16 px-7 inline-flex items-center justify-center w-full" onClick={() => statesBundle(day, month, year)}>
                <hr class="w-full"/>
                <svg class="w-14 h-14 bg-violet-500 rounded-full absolute" viewBox="-32 15 110 15" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" stroke="#FFF" stroke-width="3"
                        d="M1 22.019C8.333 21.686 23 25.616 23 44m0 0V0m22 22.019C37.667 21.686 23 25.616 23 44"/>
                </svg>
            </div>
            <div class="flex flex-col text-5xl items-center font-poppinsItalic pt-20 space-y-1">
                <div>
                    years
                </div>
                <div>
                    months
                </div>
                <div>
                    days
                </div>
            </div>
        </form>
    )
}

export default CalculatorForm;