// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from "@shared/sanity-client";

export async function getProjects() {
  const projects = await client.fetch(`*[_type == "project"]`);

  return { props: { projects } };
}
