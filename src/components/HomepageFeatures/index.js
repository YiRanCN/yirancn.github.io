import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '高可扩展性',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        能够支持大规模设备连接和数据处理，并且可以根据业务需求弹性伸缩。
      </>
    ),
  },
  {
    title: '安全性高',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        提供多种安全措施，如设备认证、数据加密传输和访问控制等。
      </>
    ),
  },
  {
    title: '多协议支持',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        支持不同类型的通信协议，例如MQTT, CoAP, HTTP等等。
      </>
    ),
  },
  {
    title: '数据存储与分析',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        支持大规模数据存储和分析，对接接入设备，实现对数据的采集、存储、处理和分析，帮助企业更好地了解设备状态和用户行为。
      </>
    ),
  },
  {
    title: '业务应用快速接入',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        提供API和SDK，方便开发者快速接入并使用平台功能。
      </>
    ),
  },
  {
    title: '强大的管理工具',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        提供设备管理、运营监控、异常告警、日志分析等工具，帮助企业轻松管理和维护设备。
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
