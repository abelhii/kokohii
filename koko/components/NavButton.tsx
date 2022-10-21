import Image from "next/image";
import Link from "next/link";
import navArrow from "../public/images/nav-arrow.svg";

type NavButtonProps = {
  label: string;
  href: string;
};

export default function NavButton({ label, href }: NavButtonProps) {
  return (
    <Link href={href}>
      <button
        className="flex items-center gap-3 justify-between h-10 p-5 rounded-3xl border-white dark:border-koko-black border-solid border-[1px]"
      >
        {label}
        <Image src={navArrow} alt="view project arrow" />
      </button>
    </Link>
  );
}
