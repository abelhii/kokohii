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
      <span className="relative md:h-96 h-56 w-[100%]">
        <Image
          fill
          alt="cover image"
          className="object-cover"
          src={coverImageUrl}
        />
      </span>
      <div className="flex sm:flex-row flex-col gap-4 lg:p-10 max-h-52 p-4 justify-between items-center bg-koko-dark text-white dark:bg-white dark:text-koko-dark">
        <div className="grid gap-1">
          <h2 className="md:text-2xl text-xl">{title}</h2>
          <ul className="lg:block hidden">
            {contributions.slice(0, 3).map((contribution) => (
              <li>{contribution}</li>
            ))}
          </ul>
        </div>
        <NavButton href={`/projects/${title}`}>
          View <Image src={navArrow} alt="view project arrow" />
        </NavButton>
      </div>
    </article>
  );
}
