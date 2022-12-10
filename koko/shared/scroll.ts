import { RefObject } from "react";

export function scroll(ref: RefObject<HTMLDivElement>) {
  ref.current?.scrollIntoView();
}
