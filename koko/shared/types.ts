// Common
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

export type ImageType = APIData<{
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: string;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  provider_metadata: string;
  createdAt: string;
  updatedAt: string;
}>;
export const isImageType = (x: any): x is ImageType => {
  if((x as ImageType).data.attributes.url) return true;
  else return false;
}

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

export enum ContentTypes {
  description = 'description',
  image = 'image'
}

export enum ImageTypes {
  portrait = 'portrait',
  landscape = 'landscape',
  fullWidth = 'full-width'
}

export enum ProjectContentPositions {
  left,
  right,
  center,
  fullWidth
}

export type DynamicComponent = {
  id: number;
  __component: string;
} & Record<string, string | number | ImageType>;
