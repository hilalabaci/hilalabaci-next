'use client';

import Image from 'next/image';
import useNav from '@/app/contexts/UseNav';
import { gloria } from '@/app/fonts';

function Start() {
  const startRef = useNav<HTMLDivElement>('Start');

  return (
    <section
      ref={startRef}
      id="start"
      className={`${gloria.className} flex h-screen items-center justify-center bg-gradient-to-b from-[#ffe9df] to-[#fdbdac] max-md:flex-col-reverse`}
    >
      <div className="space-y-15 md:ml-[100px]">
        <h1 className="text-center text-[45px] leading-[30px] font-normal tracking-[3.6px] text-[#2e1042] md:text-[100px] md:tracking-[9.6px]">
          {"I'm Hilal"}
        </h1>
        <p className="text-center text-[17px] font-normal tracking-[2px] text-[#2e1042] md:text-[30px] md:tracking-[2.4px]">
          Full Stack Web Developer
        </p>
      </div>

      <Image
        src="/logo/absurd.design.png"
        alt="Illustration"
        width={600}
        height={600}
        className="ml-0 w-[280px] md:ml-[100px] md:w-[600px]"
      />
    </section>
  );
}

export default Start;
