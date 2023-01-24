import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

import { ImageType } from "@shared/types";

type HeaderType = {
  introduction: string;
  subIntro: string;
  name: string;
  location: string;
  profession: string;
  headerImage: ImageType;
};

const getHeader = async (): Promise<HeaderType> => {
  const { data } = await axios.get(
    process.env.NEXT_PUBLIC_BACKEND + "/api/home?populate=*"
  );
  return data;
};

const LoopingTitleText = ({ titles }: { titles: string[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const titleInterval = setInterval(() => {
      let titleIndex = activeIndex + 1;
      if (titleIndex === titles.length) titleIndex = 0;
      setActiveIndex(titleIndex);
    }, 2300);

    return () => clearInterval(titleInterval);
  }, [activeIndex]);

  return (
    <div className="relative inline-block overflow-y-hidden">
      {titles.map((title, index) => {
        const words = title.split(" ");
        return (
          <h1
            key={title + index}
            className={`${
              index !== activeIndex ? "hidden" : ""
            } xl:text-9xl lg:text-7xl text-6xl flex gap-8`}
          >
            {words.map((word, index) => {
              return (
                <span
                  key={word + index}
                  style={{ animationDelay: `calc(${index} * 0.1s) ` }}
                  className="translate-y-[100%] animate-slide-up"
                >
                  {word}
                </span>
              );
            })}
          </h1>
        );
      })}
    </div>
  );
};

export default function Header() {
  const { data: home } = useQuery(["getHeader"], getHeader);
  
  return (
    <section className="font-header bg-no-repeat bg-center flex flex-col min-h-screen h-screen justify-center items-center border-red-500 border-solid border-2">
      <div className="flex flex-col items-center justify-center h-full w-full gap-40 whitespace-pre-wrap">
        <LoopingTitleText titles={["Creative Designer", "Based in Ireland"]} />
      </div>
    </section>
  );
}
