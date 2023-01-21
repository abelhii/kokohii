import { createClient } from "next-sanity";

const client = createClient({
  projectId: "myej3dgd",
  dataset: "production",
  apiVersion: "2023-01-20",
  useCdn: true,
});

export default client;
