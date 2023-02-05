import { PortableTextBlock } from "@portabletext/types";

type ObjectValue<T> = T[keyof T];

export type Project = {
  id: string;
  title: string;
  description: PortableTextBlock[];
  coverImg: string;
  typographyImg: string;
  colourPaletteImg: string;
  contributions: string[];
  content: Content[];
};

export type Content = {
  type: ContentType;
  position: ContentPositions;
  description?: PortableTextBlock[];
  image?: { type: ImageOrientation; url: string };
};

export const CONTENT_TYPE = {
  description: "description",
  image: "image",
} as const;
export type ContentType = ObjectValue<typeof CONTENT_TYPE>;

export const IMAGE_ORIENTATION = {
  portrait: "portrait",
  landscape: "landscape",
  fullWidth: "full-width",
} as const;
export type ImageOrientation = ObjectValue<typeof IMAGE_ORIENTATION>;

export const CONTENT_POSITIONS = {
  LEFT: "left",
  RIGHT: "right",
  CENTER: "center",
  FULL: "full",
} as const;
export type ContentPositions = ObjectValue<typeof CONTENT_POSITIONS>;
