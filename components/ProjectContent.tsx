import { PortableText } from "@portabletext/react";
import {
  Content,
  ContentPositions,
  CONTENT_POSITIONS,
  CONTENT_TYPE,
  IMAGE_ORIENTATION,
} from "@shared/types";

export default function ProjectContent({ content }: { content: Content[] }) {
  const positionsMap: Record<ContentPositions, string> = {
    [CONTENT_POSITIONS.LEFT]: "lg:mr-auto lg:ml-0 mx-auto",
    [CONTENT_POSITIONS.RIGHT]: "lg:ml-auto lg:mr-0 mx-auto",
    [CONTENT_POSITIONS.CENTER]: "mx-auto",
    [CONTENT_POSITIONS.FULL]: "",
  };

  const alignmentMap: Record<ContentPositions, string> = {
    [CONTENT_POSITIONS.LEFT]: "-mt-52",
    [CONTENT_POSITIONS.RIGHT]: "-mt-52",
    [CONTENT_POSITIONS.CENTER]: "m-10 mb-52",
    [CONTENT_POSITIONS.FULL]: "m-10 mb-52",
  };

  return (
    <>
      {content.map((c, index) => {
        const position = positionsMap[c.position];
        const alignment = alignmentMap[c.position];

        if (c.type === CONTENT_TYPE.description && c.description) {
          return (
            <div
              className={`w-full 2xl:max-w-7xl xl:max-w-6xl lg:max-w-4xl ${alignment}`}
            >
              <div
                key={index}
                className={`${position} lg:max-w-xl lg:px-0 w-full px-10
              prose dark:prose-invert lg:prose-xl xl:prose-p:text-2xl xl:prose-h4:text-2xl`}
              >
                <PortableText value={c.description} />
              </div>
            </div>
          );
        }

        if (c.type === CONTENT_TYPE.image && c.image) {
          let width = "w-full";
          let height = "h-full";
          let padding = "lg:px-52 md:px-30";
          const { orientation, url } = c.image;

          if (orientation === IMAGE_ORIENTATION.portrait)
            width = "md:w-[45%] w-full";
          if (orientation === IMAGE_ORIENTATION.landscape)
            width = "md:h-[80%] h-full";
          if (orientation === IMAGE_ORIENTATION.fullWidth) padding = "";

          return (
            <picture
              key={index}
              className={`w-full ${alignment} ${position} ${padding}`}
            >
              <img
                src={url}
                alt={orientation}
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
