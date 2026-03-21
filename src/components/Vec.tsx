/**
 * Renders a variable with a vector arrow above it using CSS.
 * More reliable than Unicode combining arrow (U+20D7) which renders as a box in many fonts.
 */
export default function Vec({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block relative italic font-serif">
      <span className="absolute -top-1 left-0 right-0 text-center leading-none text-[0.6em]">
        →
      </span>
      <span className="invisible">→</span>
      {children}
    </span>
  );
}
