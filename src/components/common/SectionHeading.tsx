import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  titleAs?: "h1" | "h2" | "h3" | "p";
  className?: string;
  labelClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
} & HTMLAttributes<HTMLDivElement>;

export function SectionHeading({
  label,
  title,
  description,
  titleAs: TitleTag = "h2",
  className,
  labelClassName,
  titleClassName,
  descriptionClassName,
  ...props
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl space-y-4", className)} {...props}>
      {label ? (
        <p
          className={cn(
            "font-geist text-sm font-medium uppercase tracking-[0.14em] text-accent-secondary",
            labelClassName
          )}
        >
          {label}
        </p>
      ) : null}
      <TitleTag
        className={cn(
          "font-geist text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl",
          titleClassName
        )}
      >
        {title}
      </TitleTag>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-7 text-text-secondary sm:text-lg",
            descriptionClassName
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
