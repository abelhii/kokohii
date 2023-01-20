import Link from "next/link";
import React from "react";

type MenuProps = {
  showMenu: boolean;
};

export default function Menu({ showMenu }: MenuProps) {
  return (
    <section
      className={`fixed z-20 flex flex-col justify-between h-screen w-screen bg-koko-light dark:bg-koko-dark transition-opacity opacity-0 !p-32 ${
        showMenu && "opacity-100"
      }`}
    >
      <ul className="text-8xl">
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
      <div className="flex justify-between">
        <ul className="flex gap-8 text-4xl self-end">
          <li>Mail</li>
          <li>Insta</li>
          <li>Upwork</li>
        </ul>
        <div>
          <h2 className="text-9xl">Have an idea?</h2>
          <p  className="text-6xl text-right">
            <Link href={""}>Let me help you!</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
