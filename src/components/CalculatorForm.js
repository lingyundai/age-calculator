import { useState } from "react";

function CalculatorForm() {
    const defaultInputValues = {
        year: '',
        month: '',
        day: '',
    };

    const defaultErrorValues = {
        showDay: false,
        showMonth: false,
        showYear: false,
        errorMessage: '',
    };

    const [inputFields, setInputFields] = useState(defaultInputValues);
    const [inputError, setInputError] = useState(defaultErrorValues);

    const { year, month, day } = inputFields;

    const handleChange = (e) => {
        setInputFields({
            ...inputFields, 
            [e.target.name]: e.target.value,
        });
      };

    console.log("fields: ", inputFields);

    const validateInputs = () => {
        // day
        if (!day || day === "") {
            setInputError((inputError) => ({
                ...inputError,
                showDay: true,
                errorMessage: 'This field is required',
            }))
        } else if (parseInt(day, 10) > 31 || parseInt(day, 10) < 0) {
            setInputError((inputError) => ({
                ...inputError,
                showDay: true,
                errorMessage: 'Must be a valid day',
            }))
        } else {
            setInputError((inputError) => ({
                ...inputError,
                showDay: false,
                errorMessage: '',
            }))
        }
        console.log("day", inputError);

        // month
        if (!month || month === "") {
            setInputError((inputError) => ({
                ...inputError,
                showMonth: true,
                errorMessage: 'This field is required',
            }))
        } else if (parseInt(month, 10) > 12 || parseInt(month, 10) < 0) {
            setInputError((inputError) => ({
                ...inputError,
                showMonth: true,
                errorMessage: 'Must be a valid month',
            }))
        } else {
            setInputError((inputError) => ({
                ...inputError,
                showMonth: false,
                errorMessage: '',
            }))
        }
        console.log("month", inputError);

        // year
        if (!year || year === "") {
            setInputError((inputError) => ({
                ...inputError,
                showYear: true,
                errorMessage: 'This field is required',
            }))
        } else if (parseInt(year, 10) < 1823 || parseInt(year, 10) < 0) {
            setInputError((inputError) => ({
                ...inputError,
                showYear: true,
                errorMessage: 'Must be a valid year',
            }))
        } else {
            setInputError((inputError) => ({
                ...inputError,
                showYear: false,
                errorMessage: '',
            }))
        }
        console.log("year", inputError);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validateInputs();
    }

    return (
        <form class="max-w-fit pt-6 font-poppins font-semibold text-[11px] tracking-[0.2em]" onSubmit={handleSubmit}>
            <div class="flex pt-5 space-x-4 justify-center text-stone-500">
                <div class="w-1/4">
                    <label class={inputError.showDay ? "text-red-400" : "text-stone-500"}>DAY</label>
                    <input 
                        value={day}
                        type="text" 
                        onChange={handleChange}
                        name="day"
                        class={inputError.showDay 
                        ? "border rounded-md w-full text-lg py-2 border-red-400 text-black tracking-wider indent-3 focus:outline-none focus:border-violet-500"
                        : "border rounded-md w-full text-lg py-2 text-black tracking-wider indent-3 focus:outline-none focus:border-violet-500"}
                    />
                    {inputError.showDay && 
                        <div class={"text-red-400 font-poppinsItalic font-thin tracking-normal"}>{inputError.errorMessage}</div>}
                </div>
                <div class="w-1/4">
                    <label class={inputError.showMonth ? "text-red-400" : "text-stone-500"}>MONTH</label>
                    <input 
                        value={month} 
                        type="text" 
                        onChange={handleChange}
                        name="month" 
                        class={inputError.showMonth
                            ? "border rounded-md w-full text-lg py-2 border-red-400 text-black tracking-wider indent-3 focus:outline-none focus:border-violet-500"
                            : "border rounded-md w-full text-lg py-2 text-black tracking-wider indent-3 focus:outline-none focus:border-violet-500"}
                    />
                    {inputError.showMonth && 
                        <div class={"text-red-400 font-poppinsItalic font-thin tracking-normal"}>{inputError.errorMessage}</div>}
                </div>
                <div class="w-1/4">
                    <label class={inputError.showYear ? "text-red-400" : "text-stone-500"}>YEAR</label>
                    <input 
                        value={year} 
                        type="text" 
                        onChange={handleChange}
                        name="year" 
                        class={inputError.showYear
                            ? "border rounded-md w-full text-lg py-2 border-red-400 text-black tracking-wider indent-3 focus:outline-none focus:border-violet-500"
                            : "border rounded-md w-full text-lg py-2 text-black tracking-wider indent-3 focus:outline-none focus:border-violet-500"}
                    />
                    {inputError.showYear && 
                        <div class={"text-red-400 font-poppinsItalic font-thin tracking-normal"}>{inputError.errorMessage}</div>}
                </div>
            </div>
            <button class="pt-16 px-7 inline-flex items-center justify-center w-full">
                <hr class="w-full"/>
                <svg class="w-14 h-14 bg-violet-500 rounded-full absolute" viewBox="-32 15 110 15" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" stroke="#FFF" stroke-width="3"
                        d="M1 22.019C8.333 21.686 23 25.616 23 44m0 0V0m22 22.019C37.667 21.686 23 25.616 23 44"/>
                </svg>
            </button>
            <div class="flex flex-col text-5xl items-center font-poppinsBoldItalic pt-20 space-y-1">
                <div>
                    {/* {inputFields.year} */}
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