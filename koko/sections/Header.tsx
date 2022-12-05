import axios from "axios";
import React, { ReactNode, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { APIData, ImageType } from "@shared/types";
import { getImageUrl } from "@shared/utils";
import HamburgerMenu from "@components/hamburger-menu/HamburgerMenu";

type HeaderType = {
  introduction: string;
  subIntro: string;
  name: string;
  location: string;
  profession: string;
  headerImage: ImageType;
};

const getHeader = async (): Promise<APIData<HeaderType>> => {
  const { data } = await axios.get(
    process.env.NEXT_PUBLIC_BACKEND + "/api/home?populate=*"
  );
  return data;
};

const LoopingTitleText = ({ titles }: { titles: ReactNode[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const loopInterval = setInterval(() => {
      let currIndex = activeIndex + 1;
      if (currIndex === titles.length) currIndex = 0;
      setActiveIndex(currIndex);
    }, 2000);

    return () => clearInterval(loopInterval);
  }, [activeIndex]);

  return (
    <div className="relative inline-block overflow-hidden">
      {titles.map((title, index) => (
        <h1
          key={index}
          className={`${
            index !== activeIndex ? "hidden" : ""
          } xl:text-9xl lg:text-7xl text-5xl max-w-5xl animate-slide-up`}
        >
          {title}
        </h1>
      ))}
    </div>
  );
};

const HeaderData = ({ name, introduction, subIntro }: HeaderType) => {
  return (
    <>
      <div className="flex justify-between content-center w-full whitespace-pre-wrap text-2xl">
        <p>{name}</p>
        <HamburgerMenu
          onChange={(c) => {
            console.log(c);
          }}
        />
      </div>
      <div className="flex flex-col items-center justify-center h-full w-full gap-40 whitespace-pre-wrap">
        <LoopingTitleText titles={["Creative Designer", "Based in Ireland"]} />
      </div>
    </>
  );
};

export default function Header() {
  const { data } = useQuery(["getHeader"], getHeader);

  const home = data?.data.attributes;
  return (
    <section
      style={{
        backgroundImage: `url(${home && getImageUrl(home.headerImage)})`,
        backgroundSize: "40%",
      }}
      className="font-header bg-no-repeat bg-center flex flex-col min-h-screen h-screen justify-center items-center border-red-500 border-solid border-2"
    >
      {home ? HeaderData(home) : <h1>Loading...</h1>}
    </section>
  );
}
