import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

export default function skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        alt="skill.img"
        className="rounded-lg border border-gray-600 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-gray-400 h-26 w-26 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-lg z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">{skill.progress}%</p>
        </div>
      </div>
    </div>
  );
}