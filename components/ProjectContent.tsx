import { PortableText } from "@portabletext/react";
import {
  ArbitraryTypedObject,
  PortableTextBlock,
  PortableTextMarkDefinition,
  PortableTextSpan,
} from "@portabletext/types";

import {
  Content,
  ContentPositions,
  CONTENT_POSITIONS,
  CONTENT_TYPE,
  IMAGE_ORIENTATION,
} from "@shared/types";

type DescriptionProps = {
  id: number;
  alignment: string;
  position: string;
  description: PortableTextBlock<
    PortableTextMarkDefinition,
    ArbitraryTypedObject | PortableTextSpan,
    string,
    string
  >[];
};

function Description({
  id,
  alignment,
  position,
  description,
}: DescriptionProps) {
  return (
    <div
      className={`w-full 2xl:max-w-7xl xl:max-w-6xl lg:max-w-4xl ${alignment}`}
    >
      <div
        key={id}
        className={`${position} lg:max-w-xl lg:px-0 w-full px-10
    prose dark:prose-invert lg:prose-xl xl:prose-p:text-2xl xl:prose-h4:text-2xl`}
      >
        <PortableText value={description} />
      </div>
    </div>
  );
}

export default function ProjectContent({ content }: { content: Content[] }) {
  const bigSpacing = "xl:mb-52 lg:mb-32 mb-20";

  const positionsMap: Record<ContentPositions, string> = {
    [CONTENT_POSITIONS.LEFT]: "lg:mr-auto lg:ml-0 mx-auto",
    [CONTENT_POSITIONS.RIGHT]: "lg:ml-auto lg:mr-0 mx-auto",
    [CONTENT_POSITIONS.CENTER]: "mx-auto",
    [CONTENT_POSITIONS.FULL]: "",
  };

  const alignmentMap: Record<ContentPositions, string> = {
    [CONTENT_POSITIONS.LEFT]: `${bigSpacing}`,
    [CONTENT_POSITIONS.RIGHT]: `${bigSpacing}`,
    [CONTENT_POSITIONS.CENTER]: `${bigSpacing}`,
    [CONTENT_POSITIONS.FULL]: `${bigSpacing}`,
  };

  return (
    <>
      {content.map((c, index) => {
        const gutterColor = c.gutterColor?.hex;
        const spaceBetween = c.spaceBetween ?? true;

        const position = positionsMap[c.position];
        const alignment = spaceBetween ? alignmentMap[c.position] : "mb-0";

        if (c.type === CONTENT_TYPE.description && c.description) {
          return (
            <Description
              id={index}
              alignment={alignment}
              position={position}
              description={c.description}
            />
          );
        }

        if (c.type === CONTENT_TYPE.image && c.image) {
          let width = "w-full";
          let height = "h-full";
          let padding = "lg:px-52 md:px-30";
          const { orientation, url } = c.image;

          if (orientation === IMAGE_ORIENTATION.portrait)
            width = "md:w-[45%] w-full";
          if (orientation === IMAGE_ORIENTATION.landscape) width = "lg:w-[80%]";
          if (orientation === IMAGE_ORIENTATION.fullWidth) padding = "";

          return (
            <picture
              key={index}
              className={`w-full ${alignment} ${position} ${padding}`}
              style={{ background: gutterColor }}
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
