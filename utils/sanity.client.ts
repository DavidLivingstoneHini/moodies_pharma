import { ClientConfig, createClient } from "next-sanity"

const clientConfig: ClientConfig = {
  projectId: "ehqqxokv",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-06-18",
}

export const client = createClient(clientConfig)
