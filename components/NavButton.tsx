import Link from "next/link";
import { ReactNode } from "react";

type NavButtonProps = {
  children: ReactNode;
  href: string;
};

export default function NavButton({ children, href }: NavButtonProps) {
  return (
    <Link href={href}>
      <button className="flex items-center gap-3 justify-between h-10 p-5 min-w-max w-full rounded-full border-white dark:border-koko-dark border-solid border-[1px]">
        {children}
      </button>
    </Link>
  );
}
