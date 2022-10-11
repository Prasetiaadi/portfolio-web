import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircle from './BackgroundCircle';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ['Hi, My Name is Prasetia', 'Guy who love coffee & <code/>'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <Image
        className="relative rounded-full mx-auto object-cover"
        src="/img/1.png"
        width={260}
        height={250}
        alt="profile"
      />
      <div className="z-20">
        <h2 className="text-xl uppercase text-gray-200 pb-8 tracking-[26px]">Web Developer</h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#C74B50" />
        </h1>

        <div className="pt-14">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Project</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
