import katex from "katex";

/**
 * Server component that renders LaTeX formulas using KaTeX.
 *
 * Due to JSX string escaping, LaTeX backslashes arrive with extra escaping.
 * This component normalizes them before passing to KaTeX.
 */
function fixTex(input: string): string {
  // Generic fix: replace all instances of double-backslash before a letter
  // or special character with a single backslash.
  // This handles \\vec -> \vec, \\frac -> \frac, \\, -> \, etc.
  // We do multiple passes until stable, in case of quadruple escaping.
  let result = input;
  let prev = "";
  while (result !== prev) {
    prev = result;
    // \\X where X is a letter → \X (LaTeX command)
    result = result.replace(/\\\\([a-zA-Z])/g, "\\$1");
    // \\, \\; \\! \\> (LaTeX spacing) → \, \; \! \>
    result = result.replace(/\\\\([,;!>])/g, "\\$1");
    // \\{ \\} (escaped braces)
    result = result.replace(/\\\\([{}])/g, "\\$1");
  }
  return result;
}

export default function Formula({
  tex,
  display = false,
}: {
  tex: string;
  display?: boolean;
}) {
  const html = katex.renderToString(fixTex(tex), {
    throwOnError: false,
    displayMode: display,
  });

  return (
    <span
      dangerouslySetInnerHTML={{ __html: html }}
      className={display ? "block my-4" : ""}
    />
  );
}
