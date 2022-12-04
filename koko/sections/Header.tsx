import axios from "axios";
import React from "react";
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
        <h1 className="text-5xl max-w-5xl">{introduction}</h1>
        <h2 className="text-3xl max-w-lg ml-[50%]">{subIntro}</h2>
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
