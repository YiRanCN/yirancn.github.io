// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  //
  title: "YiRanCN",
  tagline: "云平台开发者",
  favicon: "img/favicon.ico",
  //
  url: "https://yirancn.github.io",
  baseUrl: "/",
  organizationName: "YiRanCN", // Usually your GitHub org/user name.
  projectName: "yirancn.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: true,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  //
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
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  //
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      //
      docs: {
        sidebar: {
          hideable: true, // 可以折叠
          autoCollapseCategories: true, // 自动折叠所有其他同级类别
        },
      },
      navbar: {
        title: "Jiot.cloud",
        logo: {
          alt: "Jiot.cloud",
          src: "img/logo.png",
        },
        items: [
          {
            href: "/about",
            position: "right",
            label: "关于",
          },
          {
            type: "docSidebar",
            sidebarId: "studySidebar",
            position: "left",
            label: "笔记",
          },
          // {
          //   type: "docSidebar",
          //   sidebarId: "xuanxingSidebar",
          //   position: "left",
          //   label: "技术选型",
          // },
          // {
          //   type: "docSidebar",
          //   sidebarId: "iotCloudSidebar",
          //   position: "left",
          //   label: "文档",
          // },
          {
            href: "https://github.com/YiRanCN",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        copyright: `Copyright © ${new Date().getFullYear()} YiRanCN docs`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
    }),
  //
  headTags: [
    {
      tagName: "meta",
      attributes: {
        name: "keywords",
        content: "YiRanCN 云平台开发者",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "description",
        content: "YiRanCN 云平台开发者",
      },
    },
  ],
  plugins: [
    [
      "docusaurus-booklet",
      {
        // baseDirectory: "/build",
        cover: {
          title: "YiRanCN",
          subtitle: "Generate PDF from Docusaurus docs",
        },
        selectors: {
          pagination: "a.pagination-nav__link--next",
        },
      },
    ],
  ],
};

module.exports = config;
