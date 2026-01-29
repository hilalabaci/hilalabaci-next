function NavbarItemInfo({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-start text-[14px] font-bold text-[rgba(46,16,66,1)] uppercase md:text-[16px]">
      {children}
    </div>
  );
}

export default NavbarItemInfo;
