import React from "react";
import {
  ContentTypes,
  DynamicComponent,
  ImageTypes,
  isImageType,
} from "../shared/types";
import { getImageUrl } from "../shared/utils";

type ProjectContentProps = {
  content: DynamicComponent[];
};

const positionsMap: Record<string, string> = {
  left: "mr-auto",
  right: "ml-auto",
  center: "mx-auto",
};

export default function ProjectContent({ content }: ProjectContentProps) {
  return (
    <>
      {content.map((c, index) => {
        const [content, type] = c.__component.split(".");

        let padding = "px-52";
        const position: string =
          typeof c.position === "string"
            ? positionsMap[c.position]
            : "self-center";

        if (
          content === ContentTypes.description &&
          typeof c.description === "string"
        ) {
          return (
            <p key={index} className={`${padding}`}>
              {c.description}
            </p>
          );
        }

        if (content === ContentTypes.image && isImageType(c.image)) {
          const url = getImageUrl(c.image);
          let width = "100%";
          let height = "100%";
          let fullWidth = "100vw";

          if (type === ImageTypes.portrait) width = "30%";
          if (type === ImageTypes.landscape) width = "60%";
          if (type === ImageTypes.fullWidth) padding = "";

          return (
            <picture
              key={index}
              className={`grid h-full w-full ${fullWidth} ${padding}`}
            >
              <img
                src={url}
                alt={type}
                className={`${position}`}
                style={{ width, height, objectFit: "contain" }}
              />
            </picture>
          );
        }
      })}
    </>
  );
}
