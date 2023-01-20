// Common

type ObjectValue<T> = T[keyof T];

export type APIData<ATTR> = {
  data: {
    id: number;
    attributes: ATTR;
  };
};

export type APIDatas<ATTR> = {
  data: {
    id: number;
    attributes: ATTR;
  }[];
};

// API specific
export type Project = {
  id: string;
  title: string;
  description: string;
  contributions: APIDatas<{ name: string }>;
  techUsed: APIDatas<{ name: string; logo: ImageType }>;
  coverImage: ImageType;
  content: DynamicComponent[];
};

export const CONTENT_TYPE = {
  paragraph: "paragraph",
  image: "image",
} as const
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

export type DynamicComponent = {
  id: number;
  __component: string;
} & Record<string, string | number | ImageType>;
