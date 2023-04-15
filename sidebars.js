/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: ["me/intro"],

  studySidebar: [
    'study/study-index',
    {
      type: 'category',
      label: '前端',
      items: [
        {
          type: 'autogenerated',
          dirName: 'study/fe',
        },
      ]
    },
    {
      type: 'category',
      label: '后端',
      items: [
        {
          type: 'autogenerated',
          dirName: 'study/back',
        },
      ]
    },
    {
      type: 'category',
      label: '数据库',
      items: [
        {
          type: 'autogenerated',
          dirName: 'study/db',
        },
      ]
    },
    {
      type: 'category',
      label: '编程语言/工具',
      items: [
        {
          type: 'autogenerated',
          dirName: 'study/program',
        },
      ]
    },
    {
      type: 'category',
      label: '系统运维',
      items: [
        {
          type: 'autogenerated',
          dirName: 'study/devops',
        },
      ]
    },
    {
      type: 'category',
      label: '硬件/嵌入式',
      items: [
        {
          type: 'autogenerated',
          dirName: 'study/hard',
        },
      ]
    },
    {
      type: 'category',
      label: '编程思想',
      items: [
        {
          type: 'autogenerated',
          dirName: 'study/think',
        },
      ]
    },
    {
      type: 'category',
      label: '竞品分析',
      items: [
        {
          type: 'autogenerated',
          dirName: 'study/competitive',
        },
      ]
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
