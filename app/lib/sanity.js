import { createClient } from "next-sanity";

// const projectId = "5l6gydcx";
// const dataset = "production";
// const apiVersion = "2023-07-18";

export const client = createClient({
  projectId: "5l6gydcx",
  dataset: "production",
  apiVersion: "2023-07-18",
  useCdn: true,
});
