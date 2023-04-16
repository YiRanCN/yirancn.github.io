// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "YiRanCN",
  tagline: "物联网云平台开发者",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://yirancn.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "YiRanCN", // Usually your GitHub org/user name.
  projectName: "yirancn.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },
  // 预设一些插件配置
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "YiRanCN",
        logo: {
          alt: "YiRanCN",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "自我介绍",
          },
          {
            type: "docSidebar",
            sidebarId: "studySidebar",
            position: "left",
            label: "技术总结",
          },
          {
            type: "docSidebar",
            sidebarId: "xuanxingSidebar",
            position: "left",
            label: "技术选型",
          },
          { to: "/blog", label: "博客", position: "left" },
          {
            href: "https://github.com/YiRanCN/YiRanCN",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "文章列表",
            items: [
              {
                label: "自我介绍",
                to: "/docs/me/intro",
              },
            ],
          },
          {
            title: "更多",
            items: [
              {
                label: "技术总结",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/YiRanCN/YiRanCN",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} YiRanCN/weichuang docs`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      title: "YiRanCN 物联网云平台开发者",
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
    }),
  headTags: [
    {
      tagName: "meta",
      attributes: {
        name: "keywords",
        content: "YiRanCN 物联网云平台开发者"
      }
    },
    {
      tagName: "meta",
      attributes: {
        name: "description",
        content: "YiRanCN 物联网云平台开发者"
      }
    },
  ],
};

module.exports = config;
