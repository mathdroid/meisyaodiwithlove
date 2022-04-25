import { Global } from "@emotion/react";

export const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: "Jeanne Moderno";
      src: url("fonts/font.woff");
    }
      `}
  />
);
