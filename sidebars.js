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
  studySidebar: [
    "study/index",
    {
      type: "category",
      label: "前端",
      items: [
        {
          type: "autogenerated",
          dirName: "study/fe",
        },
      ],
    },
    {
      type: "category",
      label: "后端",
      items: [
        {
          type: "autogenerated",
          dirName: "study/back",
        },
      ],
    },
    {
      type: "category",
      label: "数据库",
      items: [
        {
          type: "autogenerated",
          dirName: "study/db",
        },
      ],
    },
    {
      type: "category",
      label: "编程语言/工具",
      items: [
        {
          type: "autogenerated",
          dirName: "study/program",
        },
      ],
    },
    {
      type: "category",
      label: "系统运维",
      items: [
        {
          type: "autogenerated",
          dirName: "study/devops",
        },
      ],
    },
    {
      type: "category",
      label: "硬件/嵌入式",
      items: [
        {
          type: "autogenerated",
          dirName: "study/hard",
        },
      ],
    },
    {
      type: "category",
      label: "编程思想",
      items: [
        {
          type: "autogenerated",
          dirName: "study/think",
        },
      ],
    },
    {
      type: "category",
      label: "Docker",
      items: [
        {
          type: "autogenerated",
          dirName: "study/docker",
        },
      ],
    },
    {
      type: "category",
      label: "竞品分析",
      items: [
        {
          type: "autogenerated",
          dirName: "study/competitive",
        },
      ],
    },
    {
      type: "category",
      label: "操作系统",
      items: [
        {
          type: "autogenerated",
          dirName: "study/system",
        },
      ],
    },
    {
      type: "category",
      label: "网络",
      items: [
        {
          type: "autogenerated",
          dirName: "study/net",
        },
      ],
    },
    {
      type: "category",
      label: "加解密",
      items: [
        {
          type: "autogenerated",
          dirName: "study/encryption",
        },
      ],
    },
    {
      type: "category",
      label: "人工智能",
      items: [
        {
          type: "autogenerated",
          dirName: "study/ai",
        },
      ],
    },
    {
      type: "category",
      label: "其他",
      items: [
        {
          type: "autogenerated",
          dirName: "study/other",
        },
      ],
    },
  ],

  xuanxingSidebar: [
    "xuanxing/index",
    {
      type: "category",
      label: "前端",
      items: [
        {
          type: "autogenerated",
          dirName: "xuanxing/fe",
        },
      ],
    },
    {
      type: "category",
      label: "后端",
      items: [
        {
          type: "autogenerated",
          dirName: "xuanxing/back",
        },
      ],
    },
    {
      type: "category",
      label: "运维",
      items: [
        {
          type: "autogenerated",
          dirName: "xuanxing/devops",
        },
      ],
    },
    {
      type: "category",
      label: "ThingsBoard",
      items: [
        {
          type: "autogenerated",
          dirName: "xuanxing/thingsboard",
        },
      ],
    },
  ],

  iotCloudSidebar: [
    "iotcloud/index",
    {
      type: "category",
      label: "设备接入",
      items: [
        {
          type: "autogenerated",
          dirName: "iotcloud/connect",
        },
      ],
    },
    {
      type: "category",
      label: "设备管理",
      items: [
        {
          type: "autogenerated",
          dirName: "iotcloud/devicemanager",
        },
      ],
    },
    {
      type: "category",
      label: "用户中心",
      items: [
        {
          type: "autogenerated",
          dirName: "iotcloud/usercenter",
        },
      ],
    },
  ],
};

module.exports = sidebars;
