import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type SectionProps = ComponentPropsWithoutRef<"section">;

export function Section({
  children,
  className,
  id,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-24 lg:py-section", className)}
      {...props}
    >
      {children}
    </section>
  );
}
