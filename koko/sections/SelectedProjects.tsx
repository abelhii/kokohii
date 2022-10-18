import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

type Project = {
  id: string;
  title: string;
  description: string;
  contributions: string[];
  tech_used: string[];
};

type SelectedProjectsType = {
  title: string;
  description: string;
  projects: { data: { id: string; attributes: Project }[] };
};

const getSelectedProjects = async (): Promise<{
  data: { attributes: SelectedProjectsType };
}> => {
  const { data } = await axios.get(
    "http://localhost:1337/api/selected-project?populate=projects"
  );
  return data;
};

export default function SelectedProjects() {
  const { data } = useQuery(["getSelectedProjects"], getSelectedProjects);
  const selectedProjectsData = data?.data.attributes;
  const projects = selectedProjectsData?.projects.data;

  console.log(projects);

  return (
    <section className="grid grid-cols-2 items-center justify-center h-full min-h-screen max-w-full border-solid border-2 border-yellow-400">
      <div>
        <h2 className="text-4xl font-header">{selectedProjectsData?.title}</h2>
        <p className="max-w-2xl whitespace-pre-wrap text-3xl">
          {selectedProjectsData?.description}
        </p>
      </div>
      {projects &&
        projects.map((project) => {
          const { id } = project;
          const { title, description, contributions, tech_used } =
            project.attributes;
            
          return (
            <div key={id}>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          );
        })}
    </section>
  );
}
