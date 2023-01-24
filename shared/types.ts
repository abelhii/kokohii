type ObjectValue<T> = T[keyof T];

export type Project = {
  title: string;
  description: string;
  coverImg: string;
  typographyImg: string;
  colourPaletteImg: string;
  contributions: string[];
  content: Content[];
};

export type Content = {
  type: ContentType;
  position: ContentPositions;
  description?: string;
  image?: { type: ImageType; url: string };
};

export const CONTENT_TYPE = {
  description: "description",
  image: "image",
} as const;
export type ContentType = ObjectValue<typeof CONTENT_TYPE>;

export const IMAGE_TYPE = {
  portrait: "portrait",
  landscape: "landscape",
  fullWidth: "full-width",
} as const;
export type ImageType = ObjectValue<typeof IMAGE_TYPE>;

export const CONTENT_POSITIONS = {
  LEFT: "left",
  RIGHT: "right",
  CENTER: "center",
  FULL: "full",
} as const;
export type ContentPositions = ObjectValue<typeof CONTENT_POSITIONS>;
