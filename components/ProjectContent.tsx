import { PortableText } from "@portabletext/react";
import { Content, CONTENT_TYPE, IMAGE_ORIENTATION } from "@shared/types";

const positionsMap: Record<string, string> = {
  left: "lg:mr-auto lg:ml-0 mx-auto",
  right: "lg:ml-auto lg:mr-0 mx-auto",
  center: "mx-auto",
};

function wrapper(className: string, children: JSX.Element) {
  return <div className={className}>{children}</div>;
}

export default function ProjectContent({ content }: { content: Content[] }) {
  return (
    <>
      {content.map((c, index) => {
        const position = positionsMap[c.position];

        if (c.type === CONTENT_TYPE.description && c.description) {
          return wrapper(
            "w-full 2xl:max-w-7xl xl:max-w-6xl lg:max-w-4xl",
            <div
              key={index}
              className={`${position} lg:max-w-xl lg:px-0 w-full px-10
              prose dark:prose-invert lg:prose-xl xl:prose-p:text-2xl xl:prose-h4:text-2xl`}
            >
              <PortableText value={c.description} />
            </div>
          );
        }

        if (c.type === CONTENT_TYPE.image && c.image) {
          let width = "w-full";
          let height = "h-full";
          let fullWidth = "100vw";
          let padding = "lg:px-52 md:px-30 px-10";
          const { orientation, url } = c.image;

          if (orientation === IMAGE_ORIENTATION.portrait)
            width = "md:w-[50%] w-full";
          if (orientation === IMAGE_ORIENTATION.landscape)
            width = "md:h-[80%] h-full";
          if (orientation === IMAGE_ORIENTATION.fullWidth) padding = "";

          return (
            <picture
              key={index}
              className={`grid h-full w-full ${fullWidth} ${padding}`}
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
