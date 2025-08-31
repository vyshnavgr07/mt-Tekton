import React from "react";
import { motion } from "framer-motion";
const Footer = () => {
  const items = [
    "2018 macbook air",
    "kentucky kynect",
    "growsquares",
    "city of fall river",
  ];
  return (
    <footer className="w-full h-14  text-white flex items-center ">


<div className=" h-full w-[200px] border bg-white  border-t-black flex justify-center items-center">
<p className="text-lg text-black">Projects in Market</p>
</div>




<div className="relative w-full h-14 bg-[#003fff] overflow-hidden flex items-center">
      <motion.div
        className="flex space-x-6 whitespace-nowrap"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        {items.map((item, i) => (
          <a
            key={i}
            href="#"
            className="text-xs underline text-white hover:text-gray-200"
          >
            {item}
          </a>
        ))}

 
      </motion.div>
    </div>


    </footer>
  );
};

export default Footer;
