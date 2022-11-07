import React from 'react'
import clsx from 'clsx'

import styles from './styles.module.css'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: '多云选择',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: <>自由选择公有云服务商 用户对数据有绝对拥有使用权 丰富的迁移工具与方案，助力上云下云， 跨云切换</>,
  },
  {
    title: '成本节省 50%',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: <>更多更优的云端计算，存储资源组合，相比云上 RDS 服务，节省成本可达 50%</>,
  },
  {
    title: '一站到底',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: <>一站式云数据库保姆服务，让您将更多的精力专注于企业业务</>,
  },
]

function Feature({ title, Svg, description }: FeatureItem) {
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
  )
}

export default function HomepageFeatures(): JSX.Element {
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
  )
}
