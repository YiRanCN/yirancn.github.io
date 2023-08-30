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
            <p className={styles.text2}>免费开源的物联网云平台</p>
            <p className={styles.text3}>简单、强大、使用完全免费</p>
            <p className={styles.text3}>包含手机组态、WEB组态，支持多种协议</p>
          </div>
          <div className={clsx("col col--6")}>
            <div className={styles.right}>
              <div className={styles.imageBg}></div>
              <img className={styles.imageSrc} src={logoLargeImg}></img>
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
    <Layout title={`${siteConfig.title} - ${siteConfig.tagline}`} description="YiRanCN 物联网云平台开发者">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
