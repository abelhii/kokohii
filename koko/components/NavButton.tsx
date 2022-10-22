import Link from "next/link";
import { ReactNode } from "react";

type NavButtonProps = {
  children: ReactNode;
  href: string;
};

export default function NavButton({ children, href }: NavButtonProps) {
  return (
    <Link href={href}>
      <button className="flex items-center gap-3 justify-between h-10 p-5 rounded-3xl border-white dark:border-koko-black border-solid border-[1px]">
        {children}
      </button>
    </Link>
  );
}
