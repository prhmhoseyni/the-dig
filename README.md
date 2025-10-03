# DIG Monorepo

Welcome to the DIG (Design Interface Guide).
This repo contains multiple apps/packages organized in a single codebase to streamline development and dependencies using [Turborepo](https://turbo.build).

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **NPM** (v10.7.0 or higher recommended)

## What's inside?

This Monorepo includes the following packages/apps:

- **Docs:** a [Next.js](https://nextjs.org/) application
- **React Components**
- **The DIG CLI**

Each app is 100% [TypeScript](https://www.typescriptlang.org/).

### Installation

### Step 1: Clone the Repository

```shell
git clone https://github.com/prhmhoseyni/dig-ui.git
cd dig-ui
```

### Step 2: Install Dependencies

To develop docs application, run the following command:

```shell
npm install
```

## Running the Project

### Start the Docs Server

```shell
npm run dev
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/docs/reference/configuration)
- [CLI Usage](https://turbo.build/docs/reference/command-line-reference)
