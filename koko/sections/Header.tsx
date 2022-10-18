import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ImageType } from "../shared/types";

type HeaderType = {
  introduction: string;
  sub_intro: string;
  name: string;
  location: string;
  profession: string;
  header_image: ImageType;
};

const getHeader = async (): Promise<{ data: { attributes: HeaderType } }> => {
  const { data } = await axios.get(
    process.env.NEXT_PUBLIC_BACKEND + "/api/home?populate=*"
  );
  return data;
};

export default function Header() {
  const { data } = useQuery(["getHeader"], getHeader);

  const home = data?.data.attributes;
  const headerImg = home?.header_image.data?.attributes;
  const headerImgUrl = `${process.env.NEXT_PUBLIC_BACKEND}${headerImg?.url}`;

  console.log(home, headerImg, headerImgUrl);

  return (
    <section
      style={{
        backgroundImage: `url(${headerImgUrl})`,
        backgroundSize: "40%",
      }}
      className="font-header bg-no-repeat bg-center flex flex-col min-h-screen h-screen justify-center items-center border-red-500 border-solid border-2"
    >
      <ul className="flex justify-between content-center w-full whitespace-pre-wrap text-2xl">
        <li>{home?.name}</li>
        <li>{home?.location}</li>
        <li>{home?.profession}</li>
      </ul>
      <div className="flex flex-col items-center justify-center h-full w-full gap-40 whitespace-pre-wrap">
        <h1 className="text-5xl max-w-5xl">{home?.introduction}</h1>
        <h2 className="text-3xl max-w-lg ml-[50%]">{home?.sub_intro}</h2>
      </div>
    </section>
  );
}
