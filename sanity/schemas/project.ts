import { CONTENT_POSITIONS, CONTENT_TYPE } from "@shared/types";
import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    { name: "title", type: "string", title: "Title" },
    { name: "description", type: "string", title: "Description" },
    { name: "contributions", type: "", title: "Contributions" },
    { name: "tech", type: "string", title: "Tech" },
    { name: "coverImage", type: "string", title: "Cover Image" },
    {
      name: "content",
      type: "array",
      title: "Content",
      of: [
        {
          title: "",
          type: "object",
          fields: [
            {
              name: "type",
              type: "string",
              options: {
                list: [
                  { title: "Paragraph", value: CONTENT_TYPE.paragraph },
                  { title: "Image", value: CONTENT_TYPE.image },
                ],
              },
            },
            {
              name: "position",
              type: "string",
              initialValue: "center",
              options: {
                list: [
                  { title: "Center", value: CONTENT_POSITIONS.CENTER },
                  { title: "Left", value: CONTENT_POSITIONS.LEFT },
                  { title: "Right", value: CONTENT_POSITIONS.RIGHT },
                  { title: "Full Width", value: CONTENT_POSITIONS.FULL },
                ],
                layout: "dropdown",
              },
            },
          ],
        },
      ],
    },
  ],
});

/**
 * export type Project = {
  id: string;
  title: string;
  description: string;
  contributions: APIDatas<{ name: string }>;
  techUsed: APIDatas<{ name: string; logo: ImageType }>;
  coverImage: ImageType;
  content: DynamicComponent[];
};
 */
