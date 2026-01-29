import Navbar from '@/app/_components/navbar/Navbar';
import Footer from '@/app/_sections/Footer';
import Start from '@/app/_sections/Start';
import About from '@/app/_sections/About';
import NavProvider from '@/app/contexts/NavContext';
import Work from './_sections/Work';

export default function Page() {
  return (
    <NavProvider>
      <main className="min-h-screen">
        <Navbar />
        <Start />
        <Work />
        <About />
        <Footer />
      </main>
    </NavProvider>
  );
}
