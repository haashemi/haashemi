import type { MDXComponents } from "mdx/types";
import type { ImageProps } from "next/image";

import getImageSize from "image-size";
import Image from "next/image";
import path from "path";

import { cn } from "../_lib/cn";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <div className="mb-4 flex w-full items-center justify-center gap-2 bg-gradient-to-b from-zinc-950 via-zinc-950 to-transparent py-2">
      <span className="h-0.5 w-10 bg-gradient-to-r from-transparent to-zinc-500" />
      <h1 {...props} className={cn(props.className, "mb-0")}>
        {props.children}
      </h1>
      <span className="h-0.5 flex-1 bg-gradient-to-l from-transparent to-zinc-500" />
    </div>
  ),

  img: (props) => {
    // If it's a local image and width and height are not defined.
    if (props.src && !props.src.startsWith("http") && !props.width && !props.height) {
      const filePath = path.join(process.cwd(), "public", props.src);

      const { width, height } = getImageSize(filePath);

      return (
        <Image
          {...(props as ImageProps)}
          height={height}
          width={width}
          className="h-auto w-full dark:bg-zinc-900"
          quality={100}
          sizes="650px"
        />
      );
    }

    return <Image {...(props as ImageProps)} className="h-auto w-full dark:bg-zinc-900" sizes="65ch" />;
  },
};
