import Image from "next/image";

import bg from "@images/background.svg";
import HamburgerMenu from "./hamburger-menu/HamburgerMenu";
import ScrollDown from "./ScrollDown";
import ThemeChanger from "./ThemeChanger";

export default function FixedTools() {
  return (
    <>
      <Image
        src={bg}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="!fixed dark:mix-blend-multiply -z-10 opacity-50 dark:opacity-100 animate-pulse"
      />
      <div className="z-10 p-10 pr-14 fixed flex justify-between content-center w-full whitespace-pre-wrap text-2xl">
        <p>Wardah</p>
        <HamburgerMenu
          onChange={(c) => {
            console.log(c);
          }}
        />
      </div>
      <a href="#about" className="z-10 fixed bottom-0 p-10 self-start">
        <ScrollDown onClick={() => console.log("click")} />
      </a>
      <div className="z-10 fixed bottom-0 right-4 p-10">
        <ThemeChanger />
      </div>
    </>
  );
}
