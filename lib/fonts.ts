/**
 * Build-safe font handles. These intentionally use local system stacks rather
 * than next/font/google so production builds never depend on fonts.googleapis.com.
 */
export const inter = {
  className: "font-inter-fallback",
};

export const newsreader = {
  className: "font-newsreader-fallback",
};
