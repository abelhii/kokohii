import Image from "next/image";
import { useState } from "react";

import bg from "@images/background.svg";
import HamburgerMenu from "./hamburger-menu/HamburgerMenu";
import ScrollDown from "./ScrollDown";
import ThemeChanger from "./ThemeChanger";
import Menu from "./menu/Menu";

type FixedToolsType = {
  title?: boolean;
  hamburger?: boolean;
  scrollDown?: boolean;
};

type FixedToolsProp = {
  show?: FixedToolsType;
};

export default function FixedTools({
  show = { scrollDown: true, title: true, hamburger: true },
}: FixedToolsProp) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Menu showMenu={showMenu} />
      <Image
        src={bg}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="!fixed dark:mix-blend-multiply -z-10 opacity-50 dark:opacity-100 animate-pulse"
        alt="background image"
      />

      <div className="z-30 p-10 pr-14 fixed flex justify-between content-center w-full whitespace-pre-wrap text-2xl">
        {show.title && (
          <p style={{ visibility: showMenu ? "hidden" : "visible" }}>Wardah</p>
        )}

        {show.hamburger && (
          <HamburgerMenu
            onChange={(c) => {
              console.log(c);
              setShowMenu(c);
            }}
          />
        )}
      </div>

      {show.scrollDown && (
        <a href="#about" className="z-10 fixed bottom-0 p-10 self-start">
          <ScrollDown onClick={() => console.log("click")} />
        </a>
      )}
      
      <div className="z-30 fixed bottom-0 right-4 p-10">
        <ThemeChanger />
      </div>
    </>
  );
}
