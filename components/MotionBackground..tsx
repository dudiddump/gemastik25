"use client";

import { motion } from "framer-motion";

export default function MotionBackground() {
  return (
    <div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-50px] left-[-50px] w-[200px] h-[200px] bg-primary rounded-full opacity-30 z-0"
      />

      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-80px] right-[-80px] w-[300px] h-[300px] bg-primary rounded-full opacity-40 z-0"
      />

      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[30%] right-[20%] w-[150px] h-[150px] bg-primary opacity-20 z-0 rounded-[30%]"
      />
    </div>
  );
}
