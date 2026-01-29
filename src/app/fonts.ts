import { Gloria_Hallelujah, Work_Sans, Montserrat } from 'next/font/google';
export const gloria = Gloria_Hallelujah({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-glory',
});

export const workSans = Work_Sans({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-work-sans',
});

export const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-montserrat',
});
