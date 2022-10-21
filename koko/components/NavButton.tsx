import Image from "next/image";
import navArrow from '../public/images/nav-arrow.svg';

type NavButtonProps = {
  label: string;
  onClick: VoidFunction;
};

export default function NavButton({ label, onClick }: NavButtonProps) {
  return (
    <button
      className="flex items-center gap-3 justify-between h-10 p-5 rounded-3xl border-koko-black border-solid border-[1px]"
      onClick={onClick}
    >
      {label}
      <Image src={navArrow} alt="view project arrow" />
    </button>
  );
}
