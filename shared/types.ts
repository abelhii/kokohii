import { PortableTextBlock } from "@portabletext/types";

type ObjectValue<T> = T[keyof T];

export type Project = {
  _id: string;
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
  gutterColor?: ColorInput;
  spaceBetween?: boolean;
  image?: { orientation: ImageOrientation; url: string };
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

// https://www.sanity.io/plugins/color-input
type ColorInput = {
  _type: "color";
  hex: string;
  alpha: number;
  hsl: {
    _type: "hslaColor";
    h: number;
    s: number;
    l: number;
    a: number;
  };
  hsv: {
    _type: "hsvaColor";
    h: number;
    s: number;
    v: number;
    a: number;
  };
  rgb: {
    _type: "rgbaColor";
    r: number;
    g: number;
    b: number;
    a: number;
  };
};
