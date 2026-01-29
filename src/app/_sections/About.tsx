'use client';

import Link from 'next/link';
import useNav from '@/app/contexts/UseNav';
import { montserrat } from '@/app/fonts';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function About() {
  const aboutRef = useNav<HTMLDivElement>('About');
  return (
    <section
      ref={aboutRef}
      id="About"
      className={`${montserrat.variable} font-montserrat h-[100vw] bg-[rgba(46,16,66,0.8)] bg-[url('/logo/absurd.design2.png')] bg-[size:40%] bg-[position:left_0%_top_14%] bg-no-repeat pt-[150px] tracking-[3px] text-[#edebeb] max-lg:h-fit max-lg:bg-[position:left_-5%_top_20%]`}
    >
      <div className="flex flex-col items-end pr-[100px] max-lg:pr-[20px]">
        <div className="w-1/2 text-[30px] leading-[2em] tracking-[7px] uppercase max-lg:w-[58%] max-lg:text-[16px] max-lg:tracking-[3px]">
          Hilal Abacı - Full Stack Web Developer in Didcot, UK
        </div>
        <br />
        <div className="mt-6 w-1/2 text-justify text-[15px] leading-[2em] tracking-[2px] max-lg:w-[58%] max-lg:text-[12px] max-lg:leading-[1.5em] max-lg:tracking-[1px]">
          Hello, I’m Hilal, a Full Stack Web Developer based in Didcot, UK. I
          have a passion for creating innovative and user-friendly web
          applications. With a strong foundation in both front-end and back-end
          development, I enjoy building scalable and efficient web applications.
          I work extensively with modern technologies such as React, Node.js,
          TypeScript, and PostgreSQL. My expertise includes developing RESTful
          APIs, integrating third-party services, and managing complex data
          models using Prisma and relational databases. I focus on creating
          maintainable and high-performance back-end systems while delivering
          user-friendly front-end interfaces with React and Styled-components.
          Additionally, I’m proficient in unit testing, CI/CD processes, and
          Agile methodologies to ensure quality and efficiency in every project.
          I’m always eager to learn new technologies and continuously improve my
          skills in the ever-evolving tech landscape.
          <br />
          <br />
          If you are interested in my work or would like to explore
          collaboration possibilities, please feel free to get in touch.
        </div>
      </div>
      <div className="mt-[150px] flex flex-col items-center justify-center max-lg:mt-0 max-lg:py-[50px]">
        <div className="text-[55px] leading-[2em] tracking-[7px] uppercase max-lg:text-[15px]">
          Contact
        </div>
        <div className="mt-4">
          <div className="cursor-default">
            Mail:
            <a
              href="mailto:hilalabaci55@gmail.com"
              className="ml-2 text-[15px] leading-[2em] text-[#edebeb] no-underline hover:underline max-lg:text-[8px]"
            >
              {' '}
              hilalabaci55@gmail.com
            </a>
          </div>
          <br />
          <div className="mt-4 cursor-default">
            Mobile Phone:
            <a
              href="tel:+4407470220382"
              className="max-lg:text-[8px]ƒ ml-2 text-[15px] leading-[2em] text-[#edebeb] no-underline hover:underline"
            >
              {' '}
              +44 0747 022 03 82
            </a>
          </div>
        </div>
        <div className="mt-[30px] flex flex-row gap-5 max-lg:mt-[10px] max-lg:gap-[5px]">
          <a
            className="text-[#edebeb]"
            href="https://www.linkedin.com/in/hilal-abaci/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="bg-softGray h-13 w-13 transition-colors hover:text-blue-800" />
          </a>

          <Link
            href="https://github.com/hilalabaci"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="bg-softGray h-13 w-13 transition-colors hover:text-gray-600" />
          </Link>
        </div>
      </div>
      {/*  <IllustImg src="/logo/absurd.design2.png" /> */}
    </section>
  );
}
export default About;
