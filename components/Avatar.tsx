"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <div className="absolute left-1/2 top-10 z-[5000] -translate-x-1/2 items-center justify-center">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            src="/profile.jpg"
            alt="Web developer portfolio"
            width={96}
            height={96}
            quality="95"
            priority={true}
            className="size-24 rounded-full border-[0.35rem] border-purple object-cover shadow-xl"
          />
        </motion.div>
        <motion.span
          className="absolute bottom-0 right-0 text-4xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 125,
            delay: 0.2,
            duration: 0.7,
          }}
        >
          👋
        </motion.span>
      </div>
    </div>
  );
};

export default Avatar;
