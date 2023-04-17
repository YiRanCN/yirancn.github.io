// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  //
  title: "YiRanCN",
  tagline: "物联网云平台开发者",
  favicon: "img/favicon.ico",
  //
  url: "https://yirancn.github.io",
  baseUrl: "/",
  organizationName: "YiRanCN", // Usually your GitHub org/user name.
  projectName: "yirancn.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,
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
        blog: {
          blogTitle: "博文",
          blogDescription: "博文",
          blogSidebarTitle: "最新博文",
          blogSidebarCount: 10, // 隐藏博文侧边栏
          showReadingTime: true,
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
          { to: "/blog", label: "博文", position: "left" },
          {
            href: "https://github.com/YiRanCN/YiRanCN",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} YiRanCN/weichuang docs`,
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
        content: "YiRanCN 物联网云平台开发者",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "description",
        content: "YiRanCN 物联网云平台开发者",
      },
    },
  ],
};

module.exports = config;
