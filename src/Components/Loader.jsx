import React from "react";

export default function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-[#F9E400]">
      <div className="flex flex-col items-center gap-6">
        
        {/* Animated bars */}
        <div className="flex gap-2">
          <span className="w-2 h-8 bg-[#F9E400] animate-pulse delay-0"></span>
          <span className="w-2 h-12 bg-[#F9E400] animate-pulse delay-150"></span>
          <span className="w-2 h-6 bg-[#F9E400] animate-pulse delay-300"></span>
          <span className="w-2 h-10 bg-[#F9E400] animate-pulse delay-500"></span>
        </div>

        {/* Text */}
        <p
          className="text-sm tracking-[0.3em] uppercase"
          style={{ fontFamily: "Inconsolata" }}
        >
          initializing offjson
        </p>
      </div>
    </div>
  );
}
