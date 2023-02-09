import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Project } from "./types";

export const ProjectsContext = createContext<{
  projects: Project[];
  setProjects: Dispatch<SetStateAction<Project[]>>;
}>({ projects: [], setProjects: () => null });

export function ProjectProvider({ children }: { children: JSX.Element }) {
  const [projects, setProjects] = useState<Project[]>([]);

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
}

export const useProjects = () => {
  return useContext(ProjectsContext);
};
