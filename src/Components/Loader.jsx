import React from "react";

export default function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
        <p
          className="text-lg tracking-widest"
          style={{ fontFamily: "Inconsolata" }}
        >
          loading offJson...
        </p>
      </div>
    </div>
  );
}
