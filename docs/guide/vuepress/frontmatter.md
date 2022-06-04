---
headerDepth: 2
category: 
  - Vuepress
tag:
  - Vuepress  
---

# Frontmatter

## date

Created date for the page.

## description

Description for the page.

## head

Extra tags in `<head>` tag for the page.

## lang

Language for the page. This will override the lang option in your site config.

## layout

Layout for the page. Layouts are provided by theme.

## permalink

Permalink for the page.

This will override the default route path that determined by the file path of the page.

## permalinkPattern

Pattern to generate permalink for the page.

| Pattern | Description |
| :---------: | :-----------: |
| **:year** | Year part of created date|
| **:month**	| Month part of created date |
| **:day** | Day part of created date |
| **:slug** | Slug of page filename |

Example:

The page filename is foo-bar.md.

The page frontmatter is:

```md
---
date: 2021-01-03
permalinkPattern: :year/:month/:day/:slug.html
---
```

Then the permalink of the page would be 2021/01/03/foo-bar.html.

## routeMeta

## title

Title for the page.

If you don't specify title in frontmatter, content of the first level-one header (i.e. # title) will be used as the title.
