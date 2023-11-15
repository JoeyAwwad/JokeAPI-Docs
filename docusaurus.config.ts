import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const organizationName = "Sv443-Network";
const projectName = "JokeAPI-Docs-Test";

const config: Config = {
  title: "JokeAPI",
  tagline: "Get your funny up bozo",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://v3.jokeapi.dev/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            `https://github.com/${organizationName}/${projectName}/tree/main/packages/create-docusaurus/templates/shared/`,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            `https://github.com/${organizationName}/${projectName}/tree/main/packages/create-docusaurus/templates/shared/`,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "JokeAPI",
      logo: {
        alt: "JokeAPI Logo",
        src: "img/logo_128.png",
      },
      items: [
        {
          label: "Documentation",
          type: "docSidebar",
          sidebarId: "documentationSidebar",
          position: "left",
        },
        {
          label: "Pricing",
          to: "/pricing",
          position: "left",
        },
        {
          label: "Jokes",
          to: "/jokes",
          position: "left",
        },
        {
          label: "Submissions",
          to: "/submissions",
          position: "left",
        },
        {
          label: "Blog",
          to: "/blog",
          position: "left",
        },
        {
          label: "GitHub",
          href: `https://github.com/${organizationName}/${projectName}`,
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://dc.sv443.net/",
            },
            {
              label: "GitHub Discussions",
              href: "https://github.com/Sv443/JokeAPI/discussions",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/Sv443/JokeAPI",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sv443 Network. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
