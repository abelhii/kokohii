import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import { APIDatas, Project as ProjectType } from "../../shared/types";

const getProject = async (title: string): Promise<APIDatas<ProjectType>> => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND}/api/projects/?filters[title][$eqi]=${title}&populate=*`
  );
  return data;
};

export default function Project() {
  const router = useRouter();
  const { title } = router.query;
  const { data } = useQuery(["getProject", title], () => {
    if (title && typeof title === "string") return getProject(title);
    return null;
  });

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

  return (
    <article>
      <section className="m-40">
        <h1 className="text-6xl">{projectTitle}</h1>
      </section>
    </article>
  );
}
