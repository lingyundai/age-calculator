import CalculatorForm from "../components/CalculatorForm";

function CalculatorContainer() {
    return (
        <div class="flex justify-center items-center 
                    h-screen w-screen bg-stone-100">
            <div class="min-h-[560px] max-w-[720px] min-w-[360px] h-1/2 bg-white 
                        rounded-br-large rounded-t-default rounded-bl-default">
                <CalculatorForm />
            </div>
        </div>
    )
}

export default CalculatorContainer;