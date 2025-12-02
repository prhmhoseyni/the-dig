import Heading from "@theme/Heading";
import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Fast, Simple, No Fuss",
    Svg: require("@site/static/img/fast_speed.svg").default,
    description: (
      <>
        Dig is built to get you from design to code in the shortest time possible. No extra setup. No complexity. Just copy,
        paste, and build.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/focus.svg").default,
    description: (
      <>
        Stop wasting time hunting down the right component or checking style consistency. Dig helps you focus on logic, UX, and
        building value not syncing design and code.
      </>
    ),
  },
  {
    title: "Powered by React",
    Svg: require("@site/static/img/react.svg").default,
    description: (
      <>
        DigCode is built with clean, scalable React components ready to use or extend. You can plug it into your app, customize
        as needed, and keep building without breaking flow.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4 flex flex-col items-center")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h2" className="mt-4 opacity-75">
          {title}
        </Heading>
        <p className="opacity-75">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
