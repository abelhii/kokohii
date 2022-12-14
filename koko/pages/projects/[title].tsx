import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";

import NavButton from "@components/NavButton";
import ProjectContent from "@components/ProjectContent";
import navArrow from "@images/nav-arrow.svg";
import { APIDatas, Project as ProjectType } from "@shared/types";
import { getImageUrl } from "@shared/utils";

const getProject = async (title: string): Promise<APIDatas<ProjectType>> => {
  const qs = require("qs");
  const query = qs.stringify(
    {
      filters: { title: { $eqi: title } },
      populate: {
        contributions: true,
        coverImage: true,
        techUsed: { populate: { logo: true } },
        content: { populate: "*" },
      },
    },
    { encodeValuesOnly: true }
  );

  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND}/api/projects?${query}`
  );
  return data;
};

export default function Project() {
  const router = useRouter();
  const { title } = router.query;
  const { data, isFetching } = useQuery(["getProject", title], () => {
    if (title && typeof title === "string") return getProject(title);
    return null;
  });

  if (isFetching) return null;

  const project = data?.data[0].attributes;
  if (!project) {
    return <div>Project not found</div>;
  }

  const {
    id: projectId,
    title: projectTitle,
    contributions,
    coverImage,
    description,
    techUsed,
  } = project;

  console.log(project);
  const coverImageUrl = getImageUrl(coverImage);

  return (
    <article className="grid overflow-y-auto h-screen bg-project-light dark:bg-project-dark text-project-dark dark:text-white">
      <section className="h-full w-full">
        <picture>
          <img
            src={coverImageUrl}
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
                {contributions.data.map((c, index) => {
                  return (
                    <li key={c.id + c.attributes.name}>
                      <p className="mb-3">{c.attributes.name}</p>
                      <hr className="border-gray-500" />
                    </li>
                  );
                })}
              </ul>
            </section>
            <section className="grid gap-3">
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
                      width="30px"
                      height="30px"
                      objectFit="contain"
                      alt={`${name} logo`}
                    />
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-32 my-32 items-center w-full">
        <ProjectContent content={project.content} />
      </section>
    </article>
  );
}
