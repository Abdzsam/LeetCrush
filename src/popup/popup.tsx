import React from "react";
import {createRoot} from 'react-dom/client'
import '../assets/tailwind.css'

const test = (
    <div>
        <h1 className="text-4xl text-red-500">Hello World</h1>
    </div>
)

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(test)