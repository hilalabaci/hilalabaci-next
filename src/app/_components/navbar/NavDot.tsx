type NavDotProps = {
  selected: boolean;
  onClick: () => void;
};

function NavDot({ selected, onClick }: NavDotProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={[
        'm-0 rounded-full border-0 p-0',
        'h-[25px] w-[25px] md:h-[30px] md:w-[30px]',
        selected ? 'bg-[rgba(46,16,66,0.80)]' : 'bg-[rgba(46,16,66,0.10)]',
      ].join(' ')}
    />
  );
}

export default NavDot;
