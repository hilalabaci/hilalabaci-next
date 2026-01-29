function Footer() {
  return (
    <footer className="fixed bottom-0 flex h-[30px] w-full items-center justify-center bg-[#edebeb]">
      <p className="text-[13px] tracking-[0.5px] text-[#2e1042]">
        © {new Date().getFullYear()} Hilal Abaci, Didcot
      </p>
    </footer>
  );
}
export default Footer;
