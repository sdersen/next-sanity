import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "xxxxxxx", //Insert your Id here.
  dataset: "production", //Insert your dataset here.
  apiVersion: "2022-03-25",
  useCdn: false,
});
