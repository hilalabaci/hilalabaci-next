'use client';

import useNav from '@/app/contexts/UseNav';
import { WorkCard } from '@/app/_components/card';
import works from '@/app/data/works';

function Work() {
  const workRef = useNav<HTMLDivElement>('Work');

  return (
    <section
      ref={workRef}
      id="work"
      className="flex flex-row flex-wrap justify-center gap-[50px] bg-gradient-to-b from-[#fdbdac] to-[rgba(46,16,66,0.8)] md:gap-[80px]"
    >
      {works.map((work, index) => (
        <WorkCard
          key={index}
          imgUrl={work.imgUrl}
          title={work.title}
          techno={work.techno}
          details={work.content}
          link={work.link}
        />
      ))}
    </section>
  );
}
export default Work;
