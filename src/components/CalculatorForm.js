function CalculatorForm({inputFields, inputError, ageResult, 
                        handleSubmit, handleDisplayValidation, handleChange}) {

    return (
        <div class="flex justify-center items-center 
            bg-stone-100 flex-col w-full min-h-screen overflow-x-hidden">
            <div class="min-h-[560px] max-w-[720px] bg-white 
                        rounded-br-large rounded-t-default rounded-bl-default mx-5">
                <form class="max-w-fit pt-6 font-poppins font-semibold text-[11px] tracking-[0.2em]" onSubmit={handleSubmit}>
                    <div class="flex pt-9 space-x-4 text-stone-500 justify-center">
                        <div class="w-1/6 min-w-[80px]">
                            <label class={inputError.showDay ? "text-red-400" : "text-stone-500"}>DAY</label>
                            <input 
                                value={inputFields.day}
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
                        <div class="w-1/6 min-w-[80px]">
                            <label class={inputError.showMonth ? "text-red-400" : "text-stone-500"}>MONTH</label>
                            <input 
                                value={inputFields.month} 
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
                        <div class="w-1/6 min-w-[80px]">
                            <label class={inputError.showYear ? "text-red-400" : "text-stone-500"}>YEAR</label>
                            <input 
                                value={inputFields.year} 
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
                    <button class="pt-16 px-7 inline-flex items-center justify-center sm:justify-end w-full">
                        <hr class="w-full"/>
                        <svg class="w-16 h-16 bg-violet-500 rounded-full absolute" viewBox="-32 15 110 15" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" stroke="#FFF" stroke-width="3"
                                d="M1 22.019C8.333 21.686 23 25.616 23 44m0 0V0m22 22.019C37.667 21.686 23 25.616 23 44"/>
                        </svg>
                    </button>
                    <div class="flex flex-col text-5xl items-center font-poppinsBoldItalic pt-20 space-y-1 tracking-tight">
                        <div>
                            <span class="mr-2.5 text-violet-500" onChange={handleDisplayValidation}>
                                {!handleDisplayValidation() ? "- -" : ageResult.diffYear}
                            </span>
                            years
                        </div>
                        <div>
                            <span class="mr-2.5 text-violet-500" onChange={handleDisplayValidation}>
                                {!handleDisplayValidation() ? "- -" : ageResult.diffMonth}
                            </span>
                            months
                        </div>
                        <div>
                            <span class="mr-2.5 text-violet-500" onChange={handleDisplayValidation}>
                                {!handleDisplayValidation() ? "- -" : ageResult.diffDay}
                            </span>
                            days
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CalculatorForm;