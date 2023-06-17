import { useQuery } from "@tanstack/react-query";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState
} from "react";

import client from "@shared/sanity-client";

import { Project } from "./types";

export const ProjectsContext = createContext<{
  projects: Project[];
  setProjects: Dispatch<SetStateAction<Project[]>>;
}>({ projects: [], setProjects: () => null });

const getSelectedProjects = async (): Promise<Project[]> => {
  const projects = await client.fetch<Project[]>(`
  *[_type == 'project']{
    _id,
    title,
    description,
    contributions,
    "coverImg": coverImage.asset->url,
  }`);

  return projects;
};

export function ProjectProvider({ children }: { children: JSX.Element }) {
  const [projects, setProjects] = useState<Project[]>([]);
  useQuery(["getSelectedProjects"], getSelectedProjects, {
    onSuccess: (projects) => {
      if (projects) setProjects(projects);
    },
  });

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
}

export const useProjects = () => {
  return useContext(ProjectsContext);
};
