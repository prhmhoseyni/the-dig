import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";
import type { ReactNode } from "react";

import styles from "./index.module.css";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                {/** biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    className="mx-auto mb-4"
                >
                    <rect
                        width="80"
                        height="80"
                        rx="20"
                        fill="url(#paint0_linear_3005_19778)"
                    />
                    <rect
                        x="6.00004"
                        y="5.99999"
                        width="68"
                        height="68"
                        rx="14"
                        stroke="white"
                        stroke-width="1.33333"
                    />
                    <path
                        d="M63.3334 6.21559L63.3334 73.7119"
                        stroke="white"
                        stroke-opacity="0.2"
                        stroke-width="0.666667"
                        stroke-dasharray="2 2"
                    />
                    <path
                        d="M16.6666 6.21559L16.6666 73.7119"
                        stroke="white"
                        stroke-opacity="0.2"
                        stroke-width="0.666667"
                        stroke-dasharray="2 2"
                    />
                    <path
                        d="M6.25183 16.6667L73.7482 16.6667"
                        stroke="white"
                        stroke-opacity="0.2"
                        stroke-width="0.666667"
                        stroke-dasharray="2 2"
                    />
                    <path
                        d="M6.25183 63.3333L73.7482 63.3333"
                        stroke="white"
                        stroke-opacity="0.2"
                        stroke-width="0.666667"
                        stroke-dasharray="2 2"
                    />
                    <path
                        d="M15.3334 63.3333H18M16.6667 62L16.6667 64.6667"
                        stroke="white"
                        stroke-width="0.666667"
                    />
                    <path
                        d="M15.3334 16.6667H18M16.6667 15.3333L16.6667 18"
                        stroke="white"
                        stroke-width="0.666667"
                    />
                    <path
                        d="M62 63.3333H64.6667M63.3333 62L63.3333 64.6667"
                        stroke="white"
                        stroke-width="0.666667"
                    />
                    <path
                        d="M62 16.6667H64.6667M63.3333 15.3333L63.3333 18"
                        stroke="white"
                        stroke-width="0.666667"
                    />
                    <path
                        d="M55 38.4805C55 30.1021 48.271 23.2857 40 23.2857C31.729 23.2857 25 30.1021 25 38.4805H22C22 48.5334 30.076 56.7143 40 56.7143C49.924 56.7143 58 48.5334 58 38.4805H55ZM40 50.6364C33.382 50.6364 28 45.1845 28 38.4805H31C31 33.4541 35.038 29.3636 40 29.3636C43.681 29.3636 46.852 31.6155 48.244 34.8277L31.045 38.4805H49.345H52C52 45.1845 46.618 50.6364 40 50.6364Z"
                        fill="url(#paint1_linear_3005_19778)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_3005_19778"
                            x1="9.54935e-07"
                            y1="-0.751663"
                            x2="40"
                            y2="80"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#8A8A8A" />
                            <stop offset="1" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_3005_19778"
                            x1="22"
                            y1="23.2857"
                            x2="58"
                            y2="56.7143"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="white" />
                            <stop offset="1" stop-color="#A6A6A6" />
                        </linearGradient>
                    </defs>
                </svg>
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/introduction"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
        >
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
