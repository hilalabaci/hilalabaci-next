import NavProvider from '@/app/contexts/NavContext';

export default function Page() {
  return (
    <NavProvider>
      <div className="min-h-screen">HELLO</div>
    </NavProvider>
  );
}
