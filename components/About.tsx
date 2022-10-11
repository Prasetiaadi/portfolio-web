import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-200 text-2xl">About</h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src="/img/7.png"
        alt="profile2"
        className="-mb-20 md:mb-0 flex-shrink-0 rounded-full h-64 w-56 mx-auto object-cover md:rounded-full md:w-62 md:h-86 xl:w-[300px] xl:h-[400px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          A <span className="underline decoration-[#C74B50]">little</span> backgound
        </h4>
        <p className="text-base">
          Saya berorientasi pada tujuan untuk mengejar perubahan karir jangka panjang dalam bidang
          frontend developer. Memiliki pengalaman dibidang Project Management selama 4 tahun dan
          sedang mencari pengalaman serius dibidang IT. Memiliki keterampilan Analysis, Management
          Project dan Problem Solving yang baik. Mampu berkaloborasi antar tim.
        </p>
      </div>
    </motion.div>
  );
}
