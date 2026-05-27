import { cn } from "@/shared/lib/cn";
import type { HTMLAttributes } from "react";

export function Container({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-14", className)}
      {...rest}
    />
  );
}
