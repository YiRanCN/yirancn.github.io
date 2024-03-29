/**
 * 首页
 */
import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

import logoLargeImg from "@site/static/img/logo-jiot.webp";
import coverImg from "@site/static/img/cover_image.jpg";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header>
      <div className="container">
        <div className="row" style={{ marginTop: "100px" }}>
          <div className={clsx("col col--6", styles.left)}>
            <h1 className={styles.text1}>
              <span className={styles.clip}>Jiot.cloud</span>
            </h1>
            <p className={styles.text2}>我的开发笔记</p>
            <p className={styles.text3}>多读、多写、多分享</p>
            <p className={styles.text3}>尽可能的包含各种IT技术</p>
            <p className={styles.text4}>个人简介：10年以上软件开发经验，擅长Web前端、Java后端等编程技术，擅长物联网云平台相关业务，擅长组建开发团队、技术管理、技术架构等。</p>
            <p className={styles.text4}>喜欢研究，热爱编程。</p>
          </div>
          <div className={clsx("col col--6")}>
            <div className={styles.right}>
              <div className={styles.imageBg}></div>
              <img className={styles.imageSrc} src={coverImg}></img>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title} - ${siteConfig.tagline}`} description="YiRanCN 云平台开发者">
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
