# The DIG CLI

🛠 A powerful command-line interface tool for managing The DIG component library in your projects.

## Overview

The DIG CLI is a Node.js-based command-line tool that helps you initialize, configure, and manage The DIG component library in your projects. It provides a seamless way to set up your project with the necessary configuration and add components from the library.

## Features

- **Project Initialization**: Set up your project with The DIG configuration
- **Component Management**: Add components from the library to your project
- **CSS Configuration**: Automatically configure your project's CSS with The DIG styles
- **Dependency Management**: Automatically install required dependencies
- **TypeScript Support**: Full TypeScript support with proper type definitions

## Usage

### Initialize a Project

Set up your project with The DIG configuration:

```bash
npx the-dig@latest init
```

This command will:

- Create a `.thedigrc.json` configuration file
- Install necessary dependencies (`clsx`, `lucide-react`)
- Set up the basic project structure

### Configure CSS

Configure your project's CSS with The DIG styles:

```bash
npx the-dig@latest config
```

This will update your global CSS file with The DIG styles and Tailwind CSS configuration.

### Add Components

Add components from The DIG library to your project:

```bash
npx the-dig@latest add <component-name>
```

Example:

```bash
npx the-dig@latest add Button
npx the-dig@latest add Input
npx the-dig@latest add Badge
```

## Configuration

The CLI uses a `.thedigrc.json` file to store project configuration. Here's the default configuration:

```json
{
  "tsx": true,
  "tailwind": {
    "version": 4,
    "css": "/src/app/globals.css"
  },
  "aliases": {
    "components": "/src/components"
  }
}
```

### Configuration Options

- **tsx**: Enable TypeScript JSX support
- **tailwind.version**: Tailwind CSS version to use
- **tailwind.css**: Path to your global CSS file
- **aliases.components**: Directory where components will be added

## Available Commands

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `init`            | Initialize the project for The DIG  |
| `config`          | Configure the project CSS           |
| `add <component>` | Add a new component to your project |

## Development

### Prerequisites

- Node.js 18+
- TypeScript
- npm or yarn

### Building

```bash
npm run build
```

### Development Dependencies

- `chalk`: Terminal styling
- `commander`: CLI framework
- `fs-extra`: Enhanced file system operations
- `node-fetch`: HTTP client
- `ora`: Terminal spinners

## License

ISC License - see the [LICENSE](../../LICENSE) file for details.

## Author

Parham Hoseyni

---

For more information about The DIG component library, visit the main documentation.
