import { visionTool } from "@sanity/vision"
import { Config, StudioNavbar } from "sanity"
import { deskTool } from "sanity/desk"
import { schemaTypes } from "./schemas"
import { sanityTheme } from "./src/app/theme"

export const config: Config = {
  name: "default",
  title: "ms-buy",
  projectId: "ehqqxokv",
  dataset: "production",
  basePath: "/studio",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  theme: sanityTheme,

  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
}
