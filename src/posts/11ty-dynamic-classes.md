---
title: 'Tip: Simple, dynamic 11ty class-names'
date: 2021-06-08
subtitle: Here's a tip I found on 11ty rocks that allows you to add dynamic classes on your Eleventy template. I cleaned up the code to remove the if statements on Nunjucks templates and replaced them with or statement; personal preference
tags: ['posts', 'tips', '11ty']
coverImage: ['11ty-class-names-code.jpg']
---

!['11ty classnames screenshots']({{ hlp.sharp.img(['11ty-class-names-code.jpg'], {suffix: '-main', force: true })}})

When building dynamic websites, you will most likely find yourself working with template-driven pages controlled by a master layout(s). So it's standard practice for developers to generate dynamic CSS class-names for each page from template data, allowing them to quickly customize the look and feel of individual pages.

Here's a tip I found on <a href="https://11ty.rocks/tips/layout-templating/" target="_blank" rel="nofollow noopenner">11ty rocks</a> that allows you to add dynamic classes on your  Eleventy template. I cleaned up the code to remove the if statements on Nunjucks templates and replaced them with `or` statement; personal preference.

> The fileSlug variable is mapped from inputPath and is useful for creating your own clean permalinks.

#### Usage

* You are going to need to grab the `flileSlug` from the 11ty supplied `page` data.

* I usually add these to the body tag; you can also add them to individual components; prefix the class with the component name something like `banner-main` for easier identification (prefixing is optional).

Page name classes

```HTML
{% raw %}

<body class="page-{{ page.fileSlug or 'home' }}">
    ...
</body>
{% endraw %}
```

Component class

```HTML
{% raw %}
<header class=" header-{{ page.fileSlug or 'home' }}">
    ...
</header>
{% endraw %}
```

For more info visit the {{ hlp.11ty.openUrl('https://www.11ty.dev/docs/data-eleventy-supplied/', 'Eleventy Supplied Data') | safe }}  Enjoy!
