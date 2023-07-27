import { createClient } from "next-sanity";

const projectId = "hk6h7url";
const dataset = "production";
const apiVersion = "2023-07-27";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
