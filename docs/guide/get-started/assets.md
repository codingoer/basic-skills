---
category: 
  - Vuepress
tag:
  - Vuepress  
---

# Assets

## Relative URLs

You can reference any assets using relative URLs in your Markdown content:

```md
![An image](./image.png)
```

## Public Files

The default public directory is .vuepress/public, which can be changed in config.

Take our documentation source files as an example, we are putting the logo of VuePress inside the public directory:

```
─ docs
   ├─ .vuepress
   |  └─ public
   |     └─ images
   |        └─ hero.png  # <- Logo file
   └─ guide
      └─ assets.md       # <- Here we are
```

We can reference our logo in current page like this:

Input

```md
![Java Logo](/basic-skills/java-1.svg)
```

Output

![Java Logo](/basic-skills/java-1.svg)

## Base Helper

If your site is deployed to a non-root URL, i.e. the base is not "/", you will need to prepend the base to the absolute URLs of your public files.

For example, if you plan to deploy your site to https://foo.github.io/bar/, then base should be set to "/bar/", and you have to reference your public files in Markdown like this:

```md
![Java Logo](/basic-skills/java-1.svg)
```
