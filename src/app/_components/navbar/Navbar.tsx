'use client';

import { useNavContext } from '@/app/contexts/NavContext';
import NavDot from './NavDot';
import NavbarItemInfo from './NavbarItemInfo';

export default function Navbar() {
  const { activeLinkId } = useNavContext();

  const handleClick = (sectionId: string) => {
    document
      .getElementById(sectionId.toLowerCase())
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="font-worksans fixed top-[20px] left-[20px] flex h-fit items-center md:top-[30px] md:left-[30px]">
      <div className="flex flex-col items-start justify-start gap-[20px] md:gap-[30px]">
        {/* Start */}
        <div className="flex flex-row items-center justify-center gap-[5px] md:gap-[10px]">
          <NavDot
            selected={activeLinkId === 'Start'}
            onClick={() => handleClick('Start')}
          />
          {activeLinkId === 'Start' && <NavbarItemInfo>Start</NavbarItemInfo>}
        </div>

        {/* Work */}
        <div className="flex flex-row items-center justify-center gap-[5px] md:gap-[10px]">
          <NavDot
            selected={activeLinkId === 'Work'}
            onClick={() => handleClick('Work')}
          />
          {activeLinkId === 'Work' && <NavbarItemInfo>Work</NavbarItemInfo>}
        </div>

        {/* About */}
        <div className="flex flex-row items-center justify-center gap-[5px] md:gap-[10px]">
          <NavDot
            selected={activeLinkId === 'About'}
            onClick={() => handleClick('About')}
          />
          {activeLinkId === 'About' && <NavbarItemInfo>About</NavbarItemInfo>}
        </div>
      </div>
    </section>
  );
}
