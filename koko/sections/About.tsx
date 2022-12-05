import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

type AboutType = {
  about: string;
};

const getAbout = async (): Promise<{ data: { attributes: AboutType } }> => {
  const { data } = await axios.get(process.env.NEXT_PUBLIC_BACKEND + "/api/about");
  return data;
};

export default function About() {
  const { data } = useQuery(["getAbout"], getAbout);
  let description = data?.data.attributes;

  return (
    <section id="about" className="flex items-center justify-end h-full min-h-screen max-w-full border-solid border-2 border-green-700">
      <p className="max-w-4xl whitespace-pre-wrap text-4xl pr-40">{'\t\t\t\t' + description?.about || ''}</p>
    </section>
  );
}
