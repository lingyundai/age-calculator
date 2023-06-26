import Calculator from "../components/Calculator";

function CalculatorContainer() {
    return (
        <div class="flex justify-center items-center 
                    h-screen w-screen bg-stone-100 
                    font-poppins font-semibold text-[11px] tracking-[0.2em] text-stone-500">
            <div class="h-3/5 w-10/12 bg-white 
                        rounded-br-large rounded-t-default rounded-bl-default">
                <Calculator />
            </div>
        </div>
    )
}

export default CalculatorContainer;