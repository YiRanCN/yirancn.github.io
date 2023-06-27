import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import tuozhanImg from "@site/static/img/tuo-zhan.png";
import xieyiImg from "@site/static/img/xie-yi.png";
import anquanImg from "@site/static/img/an-quan.jpg";
import dbImg from "@site/static/img/db.png";
import sdkImg from "@site/static/img/sdk.png";
import guanliImg from "@site/static/img/guan-li.png";
const FeatureList = [
  {
    title: "高可扩展性",
    img: tuozhanImg,
    description: (
      <>能够支持大规模设备连接和数据处理，并且可以根据业务需求弹性伸缩。</>
    ),
  },
  {
    title: "免费、开源",
    img: anquanImg,
    description: <>绝对的免费、开源，开放所有程序的源代码，使用完全免费。</>,
  },
  {
    title: "多协议支持",
    img: xieyiImg,
    description: (
      <>支持不同类型的通信协议，例如MQTT、CoAP、HTTP、Modbus等等。</>
    ),
  },
  {
    title: "数据存储与分析",
    img: dbImg,
    description: (
      <>
        支持大规模数据存储和分析，对接接入设备，实现对数据的采集、存储、处理和分析。
      </>
    ),
  },
  {
    title: "业务应用快速接入",
    img: sdkImg,
    description: <>提供API和SDK，方便开发者快速接入并使用平台功能。</>,
  },
  {
    title: "强大的管理工具",
    img: guanliImg,
    description: (
      <>
        提供设备管理、运营监控、异常告警、日志分析等工具，帮助企业轻松管理和维护设备。
      </>
    ),
  },
];

function Feature({ img, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <img
          src={img}
          className={styles.featureImg}
          style={{
            borderRadius: "10px",
            border: "1px solid #efefef",
            width: "80%",
          }}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 style={{ fontSize: "18px" }}>{title}</h3>
        <p style={{ fontSize: "13px" }}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
