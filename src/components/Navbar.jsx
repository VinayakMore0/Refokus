import React from "react";

function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex items-center ">
      <img
        src="https://cdn.prod.website-files.com/60d4936dc6a4eb2166d0f114/6136881a5fa4d5683ddf9dd1_Tools.svg"
        alt="refokus logo"
      />
      <div className="links flex gap-14 ml-20">
        {["Home", "Work", "Culture"].map((elem, index) => (
          <a className="text-sm flex items-center gap-1" href="#">
            {index === 1 && <span style={{boxShadow: "0 0 0.25em #00FF19"}} className="inline-block w-1 h-1 rounded-full bg-green-500"></span>}
            {elem}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
