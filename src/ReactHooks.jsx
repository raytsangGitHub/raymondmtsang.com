import React, { createContext, useContext, useState } from "react";

//WhatIsReactHook() is the hook 
function WhatIsReactHook()
{
    return (
        <div>
            <h2 class="text-black">What are Hooks in React</h2>
            <ul>
                <li>
                    React Hoods are function that allow function components:
                </li>
                <li>Manage state.</li>
                <li>Handle side effects.</li>
                <li>Access other React Features without needing class components.</li>
            </ul>
            <h2>Why use React Hooks</h2>
            <ul>
                <li>Simplified code:</li>
                <li>State and Side Effects:</li>
                <li>Reusability:</li>
                <li>Readability:</li>
            </ul>
        </div>
    );
}

//Type of Hooks:

//1. State Hooks
function StateHooks()
{
    //state: The current state value.
    //setState: A function used to update the state.
    //initialState: The initial value of the state, which can be a primitive type or an object/array
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return (
        <div>
            <h2>Count: {count}</h2>  {/* Display the current count */}
            <button onClick={increment} class="text-white">Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}
// The Context Hook
const ThemeContext = createContext();
function ContextHooks()
{
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () =>
    {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={theme} >
            <div><h>Current Them: {theme}</h>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <ThemeDisplay />
            </div>
        </ThemeContext.Provider>
    );
}
function ThemeDisplay()
{
    const theme = useContext(ThemeContext);
    return <h2>Theme from context: {theme}</h2>
}
export { WhatIsReactHook, StateHooks, ContextHooks }