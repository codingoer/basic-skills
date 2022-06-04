---
category: 
  - Vuepress
tag:
  - Vuepress  
---

# Install and Usage

## Prerequisites

- [Node.js V14+](https://nodejs.org/)
- [Yarn v1 classic](https://classic.yarnpkg.com/en/)

查看node版本号

```bash
node -v
```

查看yarn版本号

```bash
yarn -v
```

## Manual Installation

- Step 1: Create and change into a new directory

```bash
mkdir vuepress-starter
cd vuepress-starter
```

- Step 2: Initialize your project

```bash
git init
yarn init
```

- Step 3: Install VuePress locally

```bash
yarn add -D vuepress@next
```

- Step 4: Install VuePress theme hope locally

```bash
yarn add -D vuepress-theme-hope@next
```

## package.json

```json
{
  "devDependencies": {
    "vuepress": "^2.0.0-beta.46",
    "vuepress-theme-hope": "^2.0.0-beta.46"
  },
  "name": "javaer-basic-skills",
  "version": "1.0.0",
  "description": "java basic skills",
  "main": "index.js",
  "repository": "git@github.com:codingoer/basic-skills.git",
  "author": "codingoer",
  "license": "MIT",
  "private": true,
  "scripts": {
    "docs:dev-help": "vuepress dev --help",
    "docs:build-help": "vuepress build --help",
    "docs:info": "vuepress info",
    "docs:dev": "vuepress dev docs --clean-cache --config config/config.ts",
    "docs:build": "vuepress build docs --clean-cache --config config/config.ts"
  }
}
```

## Dev and Build

Add some scripts to `package.json`

```json
{
  "scripts": {
    "docs:dev-help": "vuepress dev --help",
    "docs:build-help": "vuepress build --help",
    "docs:info": "vuepress info",
    "docs:dev": "vuepress dev docs --clean-cache --clean-temp --config config/config.ts",
    "docs:build": "vuepress build docs --clean-cache --clean-temp --config config/config.ts"
  }
}
```

Serve the documentation site in the local server

::: code-tabs#shell

@tab:active yarn

```bash
yarn docs:dev
```

@tab npm

```bash
npm run docs:dev
```

:::