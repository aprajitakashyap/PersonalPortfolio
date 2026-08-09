import { Container } from "@/components/common/Container";

export function SectionDivider() {
  return (
    <div className="relative py-3 overflow-hidden" aria-hidden="true">
      <Container>
        <div className="relative flex items-center justify-center">
          {/* Delicate gradient line that fades softly on the edges */}
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-accent-primary/25 to-transparent" />
          
          {/* Subtle stylish center diamond accent */}
          <div className="absolute flex items-center justify-center">
            <div className="h-2 w-2 rotate-45 border border-accent-primary/30 bg-[var(--background-primary)] shadow-[0_0_8px_rgba(92,107,46,0.15)]" />
          </div>
        </div>
      </Container>
    </div>
  );
}
