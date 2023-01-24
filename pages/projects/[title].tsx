import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";

import NavButton from "@components/NavButton";
import ProjectContent from "@components/ProjectContent";
import navArrow from "@images/nav-arrow.svg";
import client from "@shared/sanity-client";
import { Project as ProjectType } from "@shared/types";

const getProject = async (title: string): Promise<ProjectType> => {
  const projects = await client.fetch<ProjectType>(`
  *[_type == 'project' && title match '${title}']{
    _id,
    title,
    description,
    contributions,
    "content": content[]{
      type,
      description,
      position,
      "image": image.asset->url,
    },
    "typographyImg": typography.asset->url,
    "colourPaletteImg": colour_palette.asset->url,
    "coverImg": coverImage.asset->url,
  }`);

  return projects;
};

export default function Project() {
  const router = useRouter();
  const { title } = router.query;
  const { data: project, isFetching } = useQuery(["getProject", title], () => {
    if (title && typeof title === "string") return getProject(title);
    return null;
  });

  console.log(project);

  if (isFetching) return null;

  if (!project) {
    return <div>Project not found</div>;
  }

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
    <article className="grid overflow-y-auto h-screen bg-project-light dark:bg-project-dark text-project-dark dark:text-white">
      <section className="h-full w-full">
        <picture>
          <img
            src={coverImg}
            alt={`Cover image for ${projectTitle}`}
            style={{
              width: "100vw",
              height: "40vh",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </picture>
      </section>

      <section className="relative grid lg:m-52 md:m-25 m-10">
        <div className="fixed top-0 left-0 p-10">
          <NavButton href="/">
            <Image src={navArrow} alt="nav arrow" />
            Back
          </NavButton>
        </div>

        <div className="flex justify-between md:gap-40 gap-20 lg:flex-row flex-col">
          <div className="flex flex-col gap-5 justify-start">
            <h1 className="text-4xl">{projectTitle}</h1>
            <p className="text-l max-w-lg whitespace-pre-wrap">{description}</p>
          </div>
          <div className="flex flex-col gap-10 w-full max-w-xs">
            <section className="grid gap-3">
              <h3 className="text-xl">Roles/Contributions:</h3>
              <hr className="border-gray-500" />
              <ul className="flex flex-col gap-2">
                {contributions?.map((contribution, index) => {
                  return (
                    <li key={contribution}>
                      <p className="mb-3">{contribution}</p>
                      <hr className="border-gray-500" />
                    </li>
                  );
                })}
              </ul>
            </section>
            {/* <section className="grid gap-3">
              <h3 className="text-xl">Tech used:</h3>
              <div className="flex gap-3">
                {techUsed.data.map((t) => {
                  const {
                    id,
                    attributes: { logo, name },
                  } = t;
                  if (!logo) return null;

                  return (
                    <Image
                      key={id}
                      src={getImageUrl(logo)}
                      width={30}
                      height={30}
                      objectFit="contain"
                      alt={`${name} logo`}
                    />
                  );
                })}
              </div>
            </section> */}
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-32 my-32 items-center w-full">
        <ProjectContent content={content} />
      </section>
    </article>
  );
}
