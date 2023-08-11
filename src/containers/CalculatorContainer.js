import CalculatorForm from "../components/CalculatorForm";

function CalculatorContainer() {
    return (
        <div class="flex justify-center items-center 
                    bg-stone-100 flex-col w-full min-h-screen overflow-x-hidden">
            <div class="min-h-[560px] max-w-[720px] bg-white 
                        rounded-br-large rounded-t-default rounded-bl-default mx-5">
                <CalculatorForm />
            </div>
        </div>
    )
}

export default CalculatorContainer;