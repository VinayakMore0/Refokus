import { motion } from "motion/react";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, start, para, hover = "false", heading, text, team }) {
  return (
    <motion.div
      whileHover={{
        backgroundColor: hover === "true" ? "#7443ff" : "#3f3f46",
        padding: "24px",
      }}
      className={`bg-zinc-800 p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center ">
          <h3 className="font-extralight">{heading}</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">{text}</h1>
      </div>
      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-8xl font-semibold tracking-tight leading-none">
              Start a project
            </h1>
            <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50 font-semibold cursor-pointer">
              Contact Us
            </button>
          </>
        )}
        {para && <p className="text-sm text-zinc-500 font-medium">{team}</p>}
      </div>
    </motion.div>
  );
}

export default Card;
