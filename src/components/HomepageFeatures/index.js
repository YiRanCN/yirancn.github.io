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
    title: "手机组态编辑器",
    img: tuozhanImg,
    description: (
      <>
        可以在控制台零代码拖拽生成不同的设备详情，方便手机端小程序和APP灵活使用。
      </>
    ),
  },
  {
    title: "代码全部开源、使用完全免费",
    img: anquanImg,
    description: (
      <>
        绝对的免费、开源，开放所有程序的源代码，使用完全免费；包含手机组态和WEB组态源码。
      </>
    ),
  },
  {
    title: "WEB组态编辑器",
    img: xieyiImg,
    description: <>低代码灵活拖拽生成不同的web组态画面。</>,
  },
  {
    title: "报警联动灵活多样",
    img: dbImg,
    description: <>支持多条件报警触发器，支持报警联动，且支持多种报警方式。</>,
  },
  {
    title: "多协议支持，且可自定义解析",
    img: sdkImg,
    description: <>支持MQTT、TCP、HTTP、ModbusRTU，且可以自定义协议解析。</>,
  },
  {
    title: "完善的用户体系支持",
    img: guanliImg,
    description: (
      <>
        支持<span style={{ fontWeight: 600 }}>RAM用户</span>、
        <span style={{ fontWeight: 600 }}>客户</span>
        两种用户类型，支持设备分组，方便企业管理设备的用户权限。
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
