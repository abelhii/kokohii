import { useProjects } from "@shared/projects.context";
import ProjectCard from "../ProjectCard";

export default function SelectedProjects() {
  const { projects } = useProjects();

  return (
    <section id="selected-projects" className="min-h-screen">
      <div className="grid md:grid-cols-2 md:p-20 grid-cols-1 items-center justify-items-center">
        <div className="self-center p-10 row-span-2 row-start-1">
          <h2 className="text-4xl font-header">Selected Projects</h2>
        </div>
        {projects.map((project, index) => {
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
