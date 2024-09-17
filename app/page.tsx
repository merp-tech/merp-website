"use client";

import logo from "@/public/logo.png";
import Image from "next/image";
import phoneImage from "@/public/sidepic1.png";
import React from "react";
import { motion } from "framer-motion";

const Home: React.FC<any> = () => {
  const AnimatedTextCharacter = ({ text }: { text: string }) => {
    const letters = Array.from(text);

    const container = {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.07, delayChildren: 0.04 * i },
      }),
    };

    // Variants for each letter
    const child = {
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          type: "spring",
          damping: 20,
          stiffness: 100,
          mass: 1,
        },
      },
      hidden: {
        opacity: 0,
        x: -20,
        y: 10,
        transition: {
          type: "spring",
          damping: 20,
          stiffness: 1,
          mass: 1,
        },
      },
    };

    return (
      <motion.div
        className="flex overflow-hidden text-4xl md:text-6xl mt-24 md:mt-0 lg:text-6xl h-48 font-bold "
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, index) => (
          <motion.span variants={child} key={index}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
    );
  };
  return (
    <div className="w-full min-h-screen n px-6 pb-10 pt-3 flex flex-col items-center justify-start bg-[url('../public/background.png')] bg-no-repeat bg-center bg-cover">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="w-full"
      >
        <Image src={logo} alt="merp-logo" className="scale-90" />
      </motion.section>

      <section className="flex flex-col justify-center items-center w-full overflow-y-hidden">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <div className="text-center md:text-left md:w-1/2">
            <AnimatedTextCharacter text="Coming Soon." />
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 10 }}
              transition={{ ease: "easeOut", duration: 2 }}
              className="text-lg text-gray-300  -mt-32 lg:-mt-24"
            >
              Stay tuned for more updates.
            </motion.p>
          </div>

          <div className="md:mt-0 md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              <Image
                src={phoneImage}
                alt="Phone-image"
                className="max-h-[calc(100vh-120px)] object-contain scale-75 blur mt-32 lg:mt-0"
              />
            </motion.div>
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
          className="text-gray-300 font-sans absolute bottom-10"
        >
          © 2024 Merp.{" "}
        </motion.p>
      </section>
    </div>
  );
};

export default Home;
