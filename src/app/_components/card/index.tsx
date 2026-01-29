import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { montserrat } from '@/app/fonts';
export type CardItemProps = {
  imgUrl: string;
  title: string;
  techno: string;
  details: string;
  link: string;
};

export function WorkCard({
  imgUrl,
  title,
  techno,
  details,
  link,
}: CardItemProps) {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  return (
    <article
      ref={ref}
      className={[
        `${montserrat.variable}`,
        'flex flex-col items-center justify-evenly',
        'text-[#edebeb]',
        'w-[80%] rounded-[50px] p-[15px]',
        'shadow-[0px_30px_60px_rgba(46,16,66,0.08)]',
        'transition-transform duration-1000 ease-in-out',
        inView ? 'scale-100' : 'scale-[0.4]',
      ].join(' ')}
    >
      {/* IMAGE */}
      <div className="relative min-h-[200px] min-w-[400px] overflow-hidden rounded-[10px] border-2 border-[#edebeb] transition-transform duration-500 ease-in-out hover:scale-110 max-md:h-[90px] max-md:w-[90px]">
        <Image src={imgUrl} alt={title} fill className="object-cover" />
      </div>

      <h1 className="p-2.5 text-[15px] font-bold tracking-[7px] uppercase md:text-[20px]">
        {title}
      </h1>

      <h4 className="p-2.5 text-[12px] font-extrabold tracking-[3px] text-[rgba(46,16,66,0.8)] uppercase md:text-[15px]">
        {techno}
      </h4>

      <p className="p-2.5 px-[30px] text-justify text-[15px] leading-[2em] tracking-[1px] md:text-[17px]">
        {details}
      </p>

      <a
        href={link}
        className="transform text-justify text-[10px] leading-[2em] tracking-[1px] text-[#edebeb] uppercase no-underline transition duration-200 ease-in-out [text-shadow:2px_2px_5px_rgba(46,16,66,0.8)] hover:scale-[1.2] hover:text-[rgba(46,16,66,0.8)] md:text-[14px]"
      >
        check it out
      </a>
    </article>
  );
}
