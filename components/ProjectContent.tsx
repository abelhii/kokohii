import { DocumentDefinition, FieldDefinition } from "sanity";

import { ContentTypes, DynamicComponent, IMAGE_TYPE } from "@shared/types";
import { getImageUrl } from "@shared/utils";

const positionsMap: Record<string, string> = {
  left: "mr-auto",
  right: "ml-auto",
  center: "mx-auto",
};

export default function ProjectContent(content: FieldDefinition[]) {
  return (
    <>
      {content.map((c, index) => {
        c.type = ''

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

        if (content === ContentTypes.image) {
          const url = getImageUrl(c.image);
          let width = "w-full";
          let height = "h-full";
          let fullWidth = "100vw";

          if (type === IMAGE_TYPE.portrait) width = "md:w-[50%] w-full";
          if (type === IMAGE_TYPE.landscape) width = "md:h-[80%] h-full";
          if (type === IMAGE_TYPE.fullWidth) padding = "";

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
