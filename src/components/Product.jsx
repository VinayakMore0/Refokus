import React from "react";
import Button from "./Button";
import { motion } from "motion/react";

function Product({ val, mover, count }) {
  return (
    <div className="w-full py-10 h-[23rem] text-white">
      <motion.div
        whileHover={{
          backgroundColor: val.color,
        }}
        className="w-full h-full flex items-center"
      >
        <div
          onMouseEnter={() => {
            mover(count);
          }}
          className="max-w-screen-xl mx-auto flex items-center justify-between"
        >
          <h1 className="text-6xl capitalize font-medium text-center">
            {val.title}
          </h1>
          <div className="dets w-1/3 flex flex-col">
            <p className="mb-10 mr-24">{val.description}</p>
            <div className="flex items-center gap-5">
              {val.live && <Button title="Live Website" />}
              {val.case && <Button title="Case Study" />}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Product;
