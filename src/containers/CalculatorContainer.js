import CalculatorDisplay from "../components/CalculatorDisplay";
import CalculatorForm from "../components/CalculatorForm";

function CalculatorContainer() {
    return (
        <div class="flex justify-center items-center 
                    h-screen w-screen bg-stone-100">
            <div class="h-3/5 w-10/12 bg-white 
                        rounded-br-large rounded-t-default rounded-bl-default">
                <CalculatorForm />
                <CalculatorDisplay />
            </div>
        </div>
    )
}

export default CalculatorContainer;