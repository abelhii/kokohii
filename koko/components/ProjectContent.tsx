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

        let padding = "lg:px-52 md:px-30 px-10";
        const position: string =
          typeof c.position === "string"
            ? positionsMap[c.position]
            : "self-center";

        if (
          content === ContentTypes.description &&
          typeof c.description === "string"
        ) {
          return (
            <p key={index} className={`whitespace-pre-wrap ${padding}`}>
              {c.description}
            </p>
          );
        }

        if (content === ContentTypes.image && isImageType(c.image)) {
          const url = getImageUrl(c.image);
          let width = "w-full";
          let height = "h-full";
          let fullWidth = "100vw";

          if (type === ImageTypes.portrait) width = "md:w-[50%] w-full";
          if (type === ImageTypes.landscape) width = "md:h-[80%] h-full";
          if (type === ImageTypes.fullWidth) padding = "";

          return (
            <picture
              key={index}
              className={`grid h-full w-full ${fullWidth} ${padding}`}
            >
              <img
                src={url}
                alt={type}
                className={`${position} ${width} ${height}`}
                style={{ objectFit: "contain" }}
              />
            </picture>
          );
        }
      })}
    </>
  );
}
