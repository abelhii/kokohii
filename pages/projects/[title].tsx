import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";

import FixedTools from "@components/FixedTools";
import NavButton from "@components/NavButton";
import ProjectContent from "@components/ProjectContent";
import navArrow from "@images/nav-arrow.svg";
import { PortableText } from "@portabletext/react";
import { useProjects } from "@shared/projects.context";
import client from "@shared/sanity-client";
import { Project as ProjectType } from "@shared/types";

const getProject = async (title: string): Promise<ProjectType> => {
  const projects = await client.fetch<ProjectType[]>(`
  *[_type == 'project' && title match '${title}']{
    _id,
    title,
    description,
    contributions,
    "content": content[]{
      type,
      description,
      position,
      "image": image{
        orientation,
        "url": image.asset->url
      },
    },
    "typographyImg": typography.asset->url,
    "colourPaletteImg": colour_palette.asset->url,
    "coverImg": coverImage.asset->url,
  }`);

  return projects[0];
};

export default function Project() {
  const router = useRouter();
  const { title } = router.query;
  const { data: project, isFetching } = useQuery(
    ["getProject", title],
    async () => {
      if (title && typeof title === "string") return await getProject(title);
      return null;
    }
  );
  const { projects } = useProjects();

  if (isFetching) return <div>Fetching</div>;
  if (!project) return <div>Project not found</div>;

  let nextProject;
  if (projects) {
    const projectIndex = projects.findIndex((p) => p._id === project._id);
    let nextProjectIndex = projectIndex + 1;
    if (nextProjectIndex >= projects.length) {
      nextProjectIndex = 0;
    }
    nextProject = projects[nextProjectIndex];
  }

  console.log(nextProject);

  const {
    title: projectTitle,
    description,
    coverImg,
    colourPaletteImg,
    typographyImg,
    content,
    contributions,
  } = project;

  return (
    <article className="grid gap-10 min-h-screen h-full bg-project-light dark:bg-project-dark text-project-dark dark:text-white">
      <FixedTools show={{ scrollDown: false, title: false, hamburger: true }} />

      <section className="flex gap-8 px-10">
        <NavButton href="/">
          <Image src={navArrow} alt="nav arrow" />
          EXIT
        </NavButton>

        <h1 className="text-4xl font-header">{projectTitle}</h1>
      </section>

      <section className="h-full w-full">
        <picture>
          <img
            src={coverImg}
            alt={`Cover image for ${projectTitle}`}
            style={{
              width: "100vw",
              height: "50vh",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </picture>
      </section>

      <section className="relative grid">
        <div className="mx-auto lg:my-20 lg:px-0 my-10 px-10 w-full sm:max-w-2xl 2xl:max-w-7xl xl:max-w-6xl lg:max-w-4xl">
          <div className="flex justify-between md:gap-20 gap-10 lg:flex-row flex-col">
            <div className="flex flex-col gap-5 justify-start">
              <div className="max-w-lg prose dark:prose-invert lg:prose-xl xl:prose-p:text-2xl xl:prose-h4:text-2xl">
                <PortableText value={description} />
              </div>
            </div>
            <div className="flex flex-col gap-10 w-full max-w-xs">
              <section className="grid gap-3 xl:text-2xl lg:text-xl text-base">
                <h3 className="font-bold">Roles/Contributions:</h3>
                <hr className="border-gray-500" />
                <ul className="flex flex-col gap-2">
                  {contributions.map((contribution) => {
                    return (
                      <li key={contribution}>
                        <p className="mb-3">{contribution}</p>
                        <hr className="border-gray-500" />
                      </li>
                    );
                  })}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col xl:gap-32 gap-20 items-center">
        <ProjectContent content={content} />
      </section>

      <section className="flex flex-col gap-20 h-full w-full">
        {typographyImg && (
          <div className="flex relative lg:my-20 lg:px-0 my-10 px-10 justify-between mx-auto h-full w-full sm:max-w-2xl 2xl:max-w-7xl xl:max-w-6xl lg:max-w-4xl">
            <h2 className="text-4xl align-baseline">Typography</h2>

            <Image
              height="500"
              width="800"
              src={typographyImg}
              alt={"Typography"}
            />
          </div>
        )}

        {colourPaletteImg && (
          <div className="flex relative lg:mb-52 lg:px-0 my-40 px-10 justify-between mx-auto h-full w-full sm:max-w-2xl 2xl:max-w-7xl xl:max-w-6xl lg:max-w-4xl">
            <h2 className="text-4xl align-baseline">Colour Palette</h2>

            <Image
              height="500"
              width="800"
              src={colourPaletteImg}
              alt={"Colour palette"}
            />
          </div>
        )}
      </section>

      <section className="flex flex-col pb-32 gap-4 items-center">
        {nextProject && (
          <>
            <h3 className="lg:text-4xl text-2xl">Next Project</h3>
            <div className="grid relative items-center justify-center mt-10">
              <a
                href={`/projects/${nextProject.title}`}
                className="group relative m-auto cursor-pointer lg:w-[600px] md:w-[400px] w-[200px] lg:h-[400px] md:h-[300px] h-[150px] "
              >
                <span className="inline-block relative w-full h-full translate-y-20 -rotate-12 group-hover:rotate-0 group-hover:-translate-y-5 transition-transform">
                  <Image
                    fill
                    className="object-none"
                    src={nextProject.coverImg}
                    alt={"Next project image"}
                  />
                </span>
                <h2 className="absolute flex z-10 h-full w-full m-auto items-center justify-center text-center opacity-0 select-none bottom-0 lg:text-8xl translate-y-32 text-6xl font-header group-hover:-translate-y-6 group-hover:opacity-100 transition-all duration-300">
                  {nextProject?.title}
                </h2>
              </a>
              <div className="relative lg:w-[800px] md:w-[600px] sm:w-[400px] w-[300px] h-[200px] z-10 border-solid border-t-[1px] dark:border-white border-koko-dark bg-project-light dark:bg-project-dark"></div>
            </div>
          </>
        )}
      </section>
    </article>
  );
}
