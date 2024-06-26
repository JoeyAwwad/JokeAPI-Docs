import { themes } from "@storybook/theming";
import { useDarkMode } from "storybook-dark-mode";
import React from "react";
import type { Preview } from "@storybook/react";
import StorybookThemeProvider from "./StorybookThemeProvider";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      // Override the default dark theme
      dark: { ...themes.dark, appBg: "#121212" },
      // Override the default light theme
      light: { ...themes.normal, appBg: "#ffffff" }
    }
  },
  decorators: [
    // MUI theme provider using storybook-dark-mode hook
    (Story) => (
      <StorybookThemeProvider>
        <React.StrictMode>
          <Story />
        </React.StrictMode>
      </StorybookThemeProvider>
    ),
    // dark story background
    (Story) => {
      const darkMode = useDarkMode();

      return React.createElement(StorybookThemeProvider, {
        children: [
          React.createElement("style", {
            dangerouslySetInnerHTML: {
              __html: `html { ${
                darkMode ? "background-color: rgb(35,35,35);" : ""
              } }`
            }
          }),
          Story()
        ]
      });
    }
  ],
};

export default preview;
