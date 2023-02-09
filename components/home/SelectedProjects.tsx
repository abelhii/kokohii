import { useQuery } from "@tanstack/react-query";

import { useProjects } from "@shared/projects.context";
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

  return projects;
};

export default function SelectedProjects() {
  const { setProjects } = useProjects();
  const { data: projects } = useQuery(
    ["getSelectedProjects"],
    getSelectedProjects,
    {
      onSuccess: (projects) => {
        if (projects) setProjects(projects);
      },
    }
  );

  if (!projects) return <p>no projects found</p>;

  return (
    <section id="selected-projects" className="min-h-screen">
      <div className="grid md:grid-cols-2 md:p-20 grid-cols-1 items-center justify-items-center">
        <div className="self-center p-10 row-span-2 row-start-1">
          <h2 className="text-4xl font-header">Selected Projects</h2>
        </div>
        {projects &&
          projects.map((project, index) => {
            const { _id, title, contributions, coverImg } = project;

            return (
              <ProjectCard
                key={index + _id}
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
