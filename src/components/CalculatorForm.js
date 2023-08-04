import { useState } from "react";
import { DateUtils } from "../utils/DateUtils";

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
        dayErrorMessage: '',
        monthErrorMessage: '',
        yearErrorMessage: '',
    };

    const defaultAgeResult = {
        diffYear: "- -",
        diffMonth: "- -",
        diffDay: "- -",
    }

    const [inputFields, setInputFields] = useState(defaultInputValues);
    const [inputError, setInputError] = useState(defaultErrorValues);
    const [ageResult, setAgeResult] = useState(defaultAgeResult);

    const { year, month, day } = inputFields;

    const { diffYear, diffMonth, diffDay } = ageResult;

    console.log("age result ", ageResult);

    const handleChange = (e) => {
        setInputFields({
            ...inputFields, 
            [e.target.name]: e.target.value,
        });
      };

    console.log("fields: ", inputFields);

    const validateInputs = () => {
        const res = DateUtils(inputFields.day, inputFields.month, inputFields.year);
        // day
        if (!day || day === "") {
            setInputError((inputError) => ({
                ...inputError,
                showDay: true,
                dayErrorMessage: 'This field is required',
            }))
        } else if (parseInt(day, 10) > 31 || parseInt(day, 10) < 0) {
            setInputError((inputError) => ({
                ...inputError,
                showDay: true,
                dayErrorMessage: 'Must be a valid day',
            }))
        } else {
            setInputError((inputError) => ({
                ...inputError,
                showDay: false,
                dayErrorMessage: '',
            }))
            setAgeResult((ageResult) => ({
                ...ageResult,
               diffDay: res.diffDay,
                diffMonth: res.diffMonth,
                diffYear: res.diffYear,
            }))
        }
        console.log("day", inputError);

        // month
        if (!month || month === "") {
            setInputError((inputError) => ({
                ...inputError,
                showMonth: true,
                monthErrorMessage: 'This field is required',
            }))
        } else if (parseInt(month, 10) > 12 || parseInt(month, 10) < 0) {
            setInputError((inputError) => ({
                ...inputError,
                showMonth: true,
                monthErrorMessage: 'Must be a valid month',
            }))
        } else {
            setInputError((inputError) => ({
                ...inputError,
                showMonth: false,
                monthErrorMessage: '',
            }))
            setAgeResult((ageResult) => ({
                ...ageResult,
               diffDay: res.diffDay,
                diffMonth: res.diffMonth,
                diffYear: res.diffYear,
            }))
        }
        console.log("month", inputError);

        const currentYear = new Date().getFullYear();
        // year
        if (!year || year === "") {
            setInputError((inputError) => ({
                ...inputError,
                showYear: true,
                yearErrorMessage: 'This field is required',
            }))
        } else if (parseInt(year, 10) < 1823 || parseInt(year, 10) < 0 || parseInt(year, 10) > currentYear) {
            setInputError((inputError) => ({
                ...inputError,
                showYear: true,
                yearErrorMessage: 'Must be a valid year',
            }))
        } else {
            setInputError((inputError) => ({
                ...inputError,
                showYear: false,
                yearErrorMessage: '',
            }))
             setAgeResult((ageResult) => ({
                 ...ageResult,
                diffDay: res.diffDay,
                 diffMonth: res.diffMonth,
                 diffYear: res.diffYear,
             }))
        }
        console.log("year", inputError);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validateInputs();
    }

    const handleDisplayValidation = () => {
        if (defaultErrorValues.showDay === false && defaultErrorValues.showMonth === false
            && defaultErrorValues.showYear === false && !isNaN(diffDay) && !isNaN(diffMonth) && !isNaN(diffYear)) {
                return true;
        }
        return false;
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
                        <div class={"text-red-400 font-poppinsItalic font-thin tracking-normal"}>{inputError.dayErrorMessage}</div>}
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
                        <div class={"text-red-400 font-poppinsItalic font-thin tracking-normal"}>{inputError.monthErrorMessage}</div>}
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
                        <div class={"text-red-400 font-poppinsItalic font-thin tracking-normal"}>{inputError.yearErrorMessage}</div>}
                </div>
            </div>
            <button class="pt-16 px-7 inline-flex items-center justify-center w-full">
                <hr class="w-full"/>
                <svg class="w-14 h-14 bg-violet-500 rounded-full absolute" viewBox="-32 15 110 15" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" stroke="#FFF" stroke-width="3"
                        d="M1 22.019C8.333 21.686 23 25.616 23 44m0 0V0m22 22.019C37.667 21.686 23 25.616 23 44"/>
                </svg>
            </button>
            <div class="flex flex-col text-5xl items-center font-poppinsBoldItalic pt-20 space-y-1 tracking-tight">
                <div>
                    <span class="mr-2.5 text-violet-500">{!handleDisplayValidation() ? "- -" : diffYear}</span>
                    years
                </div>
                <div>
                    <span class="mr-2.5 text-violet-500">{!handleDisplayValidation() ? "- -" : diffMonth}</span>
                    months
                </div>
                <div>
                    <span class="mr-2.5 text-violet-500">{!handleDisplayValidation() ? "- -" : diffDay}</span>
                    days
                </div>
            </div>
        </form>
    )
}

export default CalculatorForm;