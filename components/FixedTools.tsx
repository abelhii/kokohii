import Image from "next/image";
import { useEffect, useState } from "react";

import bg from "@images/background.svg";
import HamburgerMenu from "./hamburger-menu/HamburgerMenu";
import ScrollDown from "./ScrollDown";
import ThemeChanger from "./ThemeChanger";
import Menu from "./menu/Menu";

type FixedToolsType = {
  title?: boolean;
  hamburger?: boolean;
  scrollDown?: boolean;
  scrollTop?: boolean;
  background?: boolean;
};

type FixedToolsProp = {
  show?: FixedToolsType;
};

export default function FixedTools({
  show = {
    scrollDown: true,
    title: true,
    hamburger: true,
    background: true,
    scrollTop: false,
  },
}: FixedToolsProp) {
  const [showMenu, setShowMenu] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = () => {
    window.scrollY > 500 ? setShowScrollTop(true) : setShowScrollTop(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Full screen */}
      <Menu showMenu={showMenu} />
      {show.background && (
        <Image
          fill
          src={bg}
          className="!fixed dark:mix-blend-multiply -z-10 opacity-50 dark:opacity-100 animate-pulse object-cover object-center"
          alt="background image"
        />
      )}

      <div className="z-30 relative">
        {/* Top left */}
        {show.title && (
          <p
            className="fixed left-14 pt-10 text-2xl"
            style={{ visibility: showMenu ? "hidden" : "visible" }}
          >
            Wardah
          </p>
        )}

        {/* Top right */}
        {show.hamburger && (
          <div className="fixed right-14 pt-10">
            <HamburgerMenu
              onChange={(c) => {
                setShowMenu(c);
              }}
            />
          </div>
        )}
      </div>

      {/* Bottom left */}
      {show.scrollTop && (
        <button
          className={`${
            showScrollTop ? "opacity-100" : "opacity-0 -translate-x-52"
          } fixed z-10 p-10 self-start bottom-0 flex flex-col items-center justify-center gap-2 dark:text-white cursor-pointer transition-opacity`}
          onClick={() => window.scroll(0, 0)}
        >
          <span className="select-none">^</span>
          <p className="select-none">TOP</p>
        </button>
      )}
      {show.scrollDown && (
        <a href="#about" className="absolute z-10 bottom-0 p-10 self-start">
          <ScrollDown onClick={() => console.log("click")} />
        </a>
      )}

      {/* Bottom right */}
      <div className="z-30 fixed bottom-0 right-4 p-10">
        <ThemeChanger />
      </div>
    </>
  );
}
