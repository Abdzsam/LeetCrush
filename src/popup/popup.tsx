import React from "react";
import './popup.css'

const Popup = () => {
    return (
        <div className="w-[310px] h-[200px] flex flex-col items-center space-y-4 bg-[#000000] p-6 shadow-lg">
            
                 <div className="absolute flex justify-center items-center">

                    <svg className="w-full h-full">
                        <circle cx="40%" cy="50%" r="70" stroke="#4B5563" stroke-width="8" fill="none" />    
                        <circle cx="40%" cy="50%" r="70" stroke="#1CBABA" stroke-width="8" fill="none" stroke-dasharray="120,240" stroke-dashoffset="-120" />
                        <circle cx="40%" cy="50%" r="70" stroke="#FFB700" stroke-width="8" fill="none" stroke-dasharray="120,240" stroke-dashoffset="-240" />
                        <circle cx="40%" cy="50%" r="70" stroke="#F63737" stroke-width="8" fill="none" stroke-dasharray="120,240" stroke-dashoffset="-360" />
                    </svg>

                    <div className="relative right-44 top-1/3 flex flex-row justify-center items-center">
                         <span className="text-white text-4xl font-semibold">9999</span>
                    </div>
                </div>

                <div className="relative left-20 top-7 flex flex-col space-y-1 text-white text-sm">
                    <div className="flex justify-between space-x-4">
                        <span>9999</span>
                        <span className="text-[#1CBABA]">Easy</span>
                    </div>
                        <div className="flex justify-between space-x-4">
                        <span>9999</span>
                    <span className="text-[#FFB700]">Medium</span>
                    </div>
                    <div className="flex justify-between space-x-4"> 
                        <span>9999</span>
                        <span className="text-[#F63737]">Hard</span>
                    </div>
                </div>
        </div>


    )
};

export default Popup;