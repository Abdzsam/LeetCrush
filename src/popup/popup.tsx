import React, { useEffect, useState } from "react";
import "./popup.css";

const Popup = () => {
  //Progress

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProg) => (prevProg < 100 ? prevProg + 1 : 100));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  //Color change based on progress

  const getTextColorBasedOnProgress = (progress: number) => {
    if (progress < 5) return "text-[#2C2C2C]";
    if (progress < 15) return "text-red-400";
    if (progress < 30) return "text-yellow-200";
    if (progress < 45) return "text-yellow-500";
    if (progress < 60) return "text-yellow-600";
    if (progress < 75) return "text-[#b6172d]";
    if (progress < 85) return "text-[#00d8ff]";
    if (progress < 95) return "text-[#0973a3]";
    if (progress < 99) return "text-[#44627e]";

    return "text-[#f5f5fe]";
  };

  const textColorClass = getTextColorBasedOnProgress(progress);

  //Image change based on progress

  const getImageBasedOnProgress = (progress: number) => {
    if (progress < 5) return { src: "./goku/B.png", w: 90, h: 90 };
    if (progress < 15) return { src: "./goku/K.png", w: 110, h: 110 };
    if (progress < 30) return { src: "./goku/SS.png", w: 120, h: 120 };
    if (progress < 45) return { src: "./goku/SS2.webp", w: 135, h: 135 };
    if (progress < 60) return { src: "./goku/SS3.webp", w: 135, h: 135 };
    if (progress < 75) return { src: "./goku/SSG.png", w: 95, h: 95 };
    if (progress < 85) return { src: "./goku/SSB.png", w: 170, h: 170 };
    if (progress < 95) return { src: "./goku/SSBK.png", w: 105, h: 105 };
    if (progress < 99) return { src: "./goku/UIU.png", w: 140, h: 140 };

    return { src: "./goku/UIM.png", w: 135, h: 135 };
  };

  const ImageClass = getImageBasedOnProgress(progress);

  return (
    <div className="w-[310px] h-[200px] flex flex-col items-center space-y-4 bg-[#000000] p-6 shadow-lg">
      <div className="relative right-16 flex justify-center items-center text-ye">
        <span
          className={`absolute bottom-40 left-1 text-lg font-extrabold font-sans ${textColorClass}`}
        >
          {progress}%
        </span>
        <div
          className={`radial-progress ${textColorClass} left-2`}
          style={
            {
              "--value": progress,
              "--size": "10.5rem",
              "--thickness": "8px",
            } as React.CSSProperties
          }
          role="progressbar"
        >
          <img
            src={`${ImageClass.src}`}
            alt="Goku"
            width={`${ImageClass.w}`}
            height={`${ImageClass.h}`}
          />
        </div>
      </div>

      <div className="relative left-24 bottom-36 flex flex-col space-y-1 text-white text-sm">
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
  );
};

export default Popup;
