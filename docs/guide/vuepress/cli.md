---
category: 
  - Vuepress
tag:
  - Vuepress  
---

# Command Line Interface

VuePress CLI is provided by @vuepress/cli package. It is included by the vuepress package, and you can also install it separately.

Run vuepress --help to get following help messages:

```bash
Usage:
  $ vuepress <command> [options]
Commands:
  dev [sourceDir]    Start development server
  build [sourceDir]  Build to static site
  info               Display environment information
For more info, run any command with the `--help` flag:
  $ vuepress dev --help
  $ vuepress build --help
  $ vuepress info --help
Options:
  -v, --version  Display version number 
  -h, --help     Display this message 
```

## Dev

Start a development server to develop your VuePress site locally.

```bash
Usage:
  $ vuepress dev [sourceDir]
Options:
  -c, --config <config>  Set path to config file 
  -p, --port <port>      Use specified port (default: 8080) 
  -t, --temp <temp>      Set the directory of the temporary files 
  --host <host>          Use specified host (default: 0.0.0.0) 
  --cache <cache>        Set the directory of the cache files 
  --clean-temp           Clean the temporary files before dev 
  --clean-cache          Clean the cache files before dev 
  --open                 Open browser when ready 
  --debug                Enable debug mode 
  --no-watch             Disable watching page and config files (default: true)
  -v, --version          Display version number 
  -h, --help             Display this message
```

::: tip
Options set by CLI will override those options with the same name in your config file.
:::

## Build

Build your VuePress site to static files.

```bash
Usage:
  $ vuepress build [sourceDir]
Options:
  -c, --config <config>  Set path to config file 
  -d, --dest <dest>      Set the directory build output (default: .vuepress/dist) 
  -t, --temp <temp>      Set the directory of the temporary files 
  --cache <cache>        Set the directory of the cache files 
  --clean-temp           Clean the temporary files before build 
  --clean-cache          Clean the cache files before build 
  --debug                Enable debug mode 
  -v, --version          Display version number 
  -h, --help             Display this message
```

::: tip
Options set by CLI will override those options with the same name in your config file.
:::

## Info

Outputs information about your system and dependencies.


