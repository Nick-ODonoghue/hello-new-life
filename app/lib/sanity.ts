import { createClient } from "next-sanity";

const projectId = "dyw6zza7";
const dataset = "production";
const apiVersion = "2023-07-27";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
