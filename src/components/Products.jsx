import React, { useState } from "react";
import Product from "./Product";
import { color, motion } from "motion/react";

function Products() {
  var products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration date translate into real estate.",
      live: true,
      case: false,
      color: "#5355EE",
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
      color: "#46289A",
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: true,
      color: "#5D4EFF",
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, festuring holographic 3D models are an integrated web shop.",
      live: true,
      case: true,
      color: "#7E1FFF",
    },
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-32 relative">
      {products.map((val, index) => (
        <Product key={index} val={val} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[32rem] h-[23rem] left-[44%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full rounded-xl flex justify-center items-center"
          >
            <video
              autoPlay
              muted
              loop
              className="w-full h-full object-cover rounded-xl"
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/arqitel-169.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full rounded-xl"
          >
            <video
              autoPlay
              muted
              loop
              className="w-full h-full object-cover rounded-xl"
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/ttr-169.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full rounded-xl"
          >
            <video
              autoPlay
              muted
              loop
              className="w-full h-full object-cover rounded-xl"
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/yir2022-169.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full rounded-xl"
          >
            <video
              autoPlay
              muted
              loop
              className="w-full h-full object-cover rounded-xl"
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/yahoo-169.webm"
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
