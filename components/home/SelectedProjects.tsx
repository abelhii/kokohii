import { useQuery } from "@tanstack/react-query";

import client from "@shared/sanity-client";
import { Project as ProjectType } from "@shared/types";
import ProjectCard from "../ProjectCard";

const getSelectedProjects = async (): Promise<ProjectType[]> => {
  const projects = await client.fetch<ProjectType[]>(`
  *[_type == 'project']{
    _id,
    title,
    description,
    contributions,
    "coverImg": coverImage.asset->url,
  }`);

  console.log(projects);
  return projects;
};

export default function SelectedProjects() {
  const { data: projects } = useQuery(
    ["getSelectedProjects"],
    getSelectedProjects
  );

  if (!projects) return <p>no projects found</p>;

  return (
    <section className="min-h-screen border-solid border-2 border-yellow-400">
      <div className="grid grid-cols-2 p-20 items-center justify-items-center">
        <div className="self-center p-10 row-span-2 row-start-1">
          <h2 className="text-4xl font-header">Selected Projects</h2>
        </div>
        {projects &&
          projects.map((project) => {
            const { id } = project;
            const { title, contributions, coverImg } = project;

            return (
              <ProjectCard
                key={id}
                title={title}
                contributions={contributions}
                coverImageUrl={coverImg}
              />
            );
          })}
      </div>
    </section>
  );
}
