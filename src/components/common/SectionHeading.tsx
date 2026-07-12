import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export function SectionHeading({
  label,
  title,
  description,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl space-y-4", className)} {...props}>
      {label ? (
        <p className="font-geist text-sm font-medium uppercase tracking-[0.14em] text-accent-secondary">
          {label}
        </p>
      ) : null}
      <h2 className="font-geist text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
