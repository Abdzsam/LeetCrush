import React from "react";
import { createRoot } from "react-dom/client";
import '../assets/tailwind.css';
import Popup from "./popup";

function App() {
    return (
        <Popup />
    );
}

const root = createRoot(document.body);
root.render(<App />);
