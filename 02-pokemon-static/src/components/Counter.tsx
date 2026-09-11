import { createSignal } from "solid-js"


export const Counter = () => {

    const [counter, setCounter] = createSignal(10)

    return (
        <>
            <h1 class="text-5xl mb-5">Counter</h1>
            <h3 class="text-8xl mb-5">Value: {counter()}</h3>

            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
                onClick={() => setCounter((prev) => ++prev)}>+1</button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
                onClick={() => setCounter((prev) => --prev)}>-1</button>
        </>
    )
}