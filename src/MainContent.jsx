//import { useState } from 'react'
import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { greeting, jsxElement, ChildrenPassing } from './JSX_Intro';
import { WhatIsReactHook, StateHooks, ContextHooks } from './ReactHooks';
//import { jsxElement } from './JSX_Intro';

function MainContent()
{
    return (
        <>
            <h1>Why React Components</h1>
            <ul>
                <li>Was first release in 2013</li>
                <li>React apps are made out of components.</li>
                <li>Applications are built using reusable components that enable the reload of only the changed part of the UI.</li>
                <li>Component also can not return multiple JSX tags, it required a wrapper.</li>
                <li>React is great for single page application(SPA) AND Virtual DOM.</li>
                <li>JSX is stricter than HTML</li>
            </ul>
            <div>
                {jsxElement}
                {greeting}
                <br />
                <ChildrenPassing />
                <WhatIsReactHook />
                <StateHooks />
                <ContextHooks />

            </div>
            <div></div>
        </>
    )
}
export default MainContent