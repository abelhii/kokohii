import { ImageType } from "./types";

export function getImageUrl(imageObj: ImageType) {
  return process.env.NEXT_PUBLIC_BACKEND + imageObj.data.attributes.url;
}
