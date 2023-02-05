import Link from "next/link";
import React from "react";

type MenuProps = {
  showMenu: boolean;
};

export default function Menu({ showMenu }: MenuProps) {
  return (
    <section
      className={`fixed flex flex-col lg:justify-between gap-10 h-screen w-screen bg-koko-light dark:bg-koko-dark transition-opacity opacity-0 !p-32 
      ${showMenu ? "opacity-100 z-20" : "z-[-10]"}`}
    >
      <ul className="lg:text-8xl md:text-6xl text-4xl">
        <li>
          <Link href={"../"}>Home</Link>
        </li>
        <li>
          <Link href={"../"}>Work</Link>
        </li>
        <li>
          <Link href={"../"}>Art</Link>
        </li>
        <li>
          <Link href={"../"}>Contact</Link>
        </li>
      </ul>
      <div className="flex md:flex-row flex-col md:justify-between gap-10">
        <ul className="flex md:flex-row flex-col md:gap-8 lg:text-4xl md:text-2xl sm:text-xl lg:self-end">
          <li>Mail</li>
          <li>Insta</li>
          <li>Upwork</li>
        </ul>
        <div>
          <h2 className="xl:text-9xl lg:text-6xl md:text-4xl text-2xl">Have an idea?</h2>
          <p className="lg:text-4xl md:text-2xl sm:text-xl text-lg md:text-right">
            <Link href={""}>Let me help you!</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
