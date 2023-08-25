import CalculatorForm from "../components/CalculatorForm";
import { useState } from "react";
import { DateUtils } from "../utils/DateUtils";

function CalculatorContainer() {

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

    const handleChange = (e) => {
        setInputFields({
            ...inputFields, 
            [e.target.name]: e.target.value,
        });
      };

    const validateInputs = () => {
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
        }

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
        }

        const currentYear = new Date().getFullYear();
        // year
        if (!year || year === "") {
            setInputError((inputError) => ({
                ...inputError,
                showYear: true,
                yearErrorMessage: 'This field is required',
            }))
        } else if (parseInt(year, 10) < 0 || parseInt(year, 10) > currentYear) {
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
        }
    }

    const handleAgeResult = () => {
        const res = DateUtils(inputFields.day, inputFields.month, inputFields.year);
        setAgeResult((ageResult) => ({
            ...ageResult,
           diffDay: res.diffDay,
            diffMonth: res.diffMonth,
            diffYear: res.diffYear,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validateInputs();
        handleAgeResult();
    }

    const handleDisplayValidation = () => {
        if (inputError.showDay === false && inputError.showMonth === false
            && inputError.showYear === false && !isNaN(diffDay) && !isNaN(diffMonth) && !isNaN(diffYear)) {
                return true;
        }
        return false;
    }
    
    return (
        <CalculatorForm 
            inputFields={inputFields}
            inputError={inputError}
            ageResult={ageResult}
            handleSubmit={handleSubmit}
            handleAgeResult={handleAgeResult}
            handleDisplayValidation={handleDisplayValidation}
            handleChange={handleChange}
        />
    )
}

export default CalculatorContainer;