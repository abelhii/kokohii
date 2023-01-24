import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

import ProjectCard from "../ProjectCard";
import { Project } from "@shared/types";

type SelectedProjectsType = {
  title: string;
  description: string;
  projects: { data: { id: string; attributes: Project }[] };
};

const getSelectedProjects = async (): Promise<{
  data: { attributes: SelectedProjectsType };
}> => {
  const { data } = await axios.get(
    process.env.NEXT_PUBLIC_BACKEND +
      "/api/selected-project?populate[projects][populate]=coverImage,contributions"
  );
  return data;
};

export default function SelectedProjects() {
  const { data } = useQuery(["getSelectedProjects"], getSelectedProjects);
  const selectedProjectsData = data?.data.attributes;
  const projects = selectedProjectsData?.projects.data;

  return (
    <section className="min-h-screen border-solid border-2 border-yellow-400">
      <div className="grid grid-cols-2 p-20 items-center justify-items-center">
        <div className="self-center p-10 row-span-2 row-start-1">
          <h2 className="text-4xl font-header">
            {selectedProjectsData?.title}
          </h2>
        </div>
        {projects &&
          projects.map((project) => {
            const { id } = project;
            const { title, contributions, coverImg } = project.attributes;
            const roles = contributions.map((c) => project.attributes.title);

            return (
              <ProjectCard
                key={id}
                title={title}
                contributions={roles}
                coverImageUrl={coverImg}
              />
            );
          })}
      </div>
    </section>
  );
}
