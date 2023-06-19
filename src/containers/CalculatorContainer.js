import Calculator from "../components/Calculator";

function CalculatorContainer() {
    return (
        <div class="flex justify-center items-center h-screen w-screen bg-stone-100">
            <div class="h-1/2 w-9/12 max-w-3xl max-h-128 bg-white rounded-br-large rounded-t-default rounded-bl-default">
                <Calculator />
            </div>
        </div>
    )
}

export default CalculatorContainer;