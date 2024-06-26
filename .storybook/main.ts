import { resolve } from "path";
import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "storybook-dark-mode",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config, { configType }) => {
    if(config.resolve)
      config.resolve.alias = {
        ...config.resolve.alias,
        "@site": resolve(__dirname, "../"),
        "@theme": resolve(__dirname, "../node_modules/@docusaurus/theme-classic/src/theme/")
      };

    return config;
  }
};
export default config;
