import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'E-commerce Ready',
    emoji: '🛒',
    description: (
      <>
        Curated icons and components specifically designed for e-commerce applications.
        Shopping carts, product cards, checkout flows, and more.
      </>
    ),
  },
  {
    title: 'Zero-JS by Default',
    emoji: '📦',
    description: (
      <>
        React Server Components by default. Add interactivity only when needed.
        Performance-first approach with sub-1KB components.
      </>
    ),
  },
  {
    title: 'Cross-Platform',
    emoji: '📊',
    description: (
      <>
        Same design tokens and component APIs work across Web and React Native.
        One design system, two platforms, zero compromises.
      </>
    ),
  },
  {
    title: 'Design Tokens',
    emoji: '🔍',
    description: (
      <>
        Consistent theming with CSS variables, TypeScript, and JSON tokens.
        Systematic constraints that enforce design consistency.
      </>
    ),
  },
];

function Feature({title, emoji, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center padding-horiz--md">
        <div className={styles.featureEmoji}>{emoji}</div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">Design System Features</Heading>
          <p>Built with principles that ensure consistency across platforms</p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
