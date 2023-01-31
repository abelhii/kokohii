import Image from "next/image";

import NavButton from "./NavButton";
import navArrow from "@images/nav-arrow.svg";

type ProjectCardProps = {
  title: string;
  contributions: string[];
  coverImageUrl: string;
};

export default function ProjectCard({
  title,
  contributions,
  coverImageUrl,
}: ProjectCardProps) {
  return (
    <article className="flex flex-col p-4 w-full h-full row-span-5">
      <span className="relative h-[300px] w-[100%]">
        <Image
          fill
          src={coverImageUrl}
          className="object-cover"
          alt="cover image"
        />
      </span>
      <div className="flex justify-between items-center px-10 py-9 max-h-40 bg-koko-dark text-white dark:bg-white dark:text-koko-dark">
        <div className="grid gap-1">
          <h2 className="text-2xl">{title}</h2>
        </div>
        <NavButton href={`/projects/${title}`}>
          View <Image src={navArrow} alt="view project arrow" />
        </NavButton>
      </div>
    </article>
  );
}
