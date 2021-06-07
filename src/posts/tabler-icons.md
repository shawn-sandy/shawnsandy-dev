---
title: "Tabler Icons: over 1250+ plus free vector icons for web design"
subtitle: "Free and open source icons designed to make your website or app attractive, visually consistent and simply beautiful."
date: 2021-06-06
tags: ["posts", "resources"]
coverImage: ['tabler.jpg']
---

![Tabler Icons]({{ hlp.sharp.img(['tabler-icons.jpg']) }})

If you are searching for a new set of font icons or SVG icons, or maybe you want to replace the popular FontAwesome, check out Tabler. It's a free icon set that comes with over 1250+ icons line style icons. Created by Michał Wolny and has an MIT license, check it out. You can find it by going to <a href="https://tabler-icons.io/" target="_blank" rel="nofollow noopener" style="user-select: auto; ">https://tabler-icons.io/</a>. Enjoy!

#### Usage

![img]({{ hlp.sharp.img(['tabler-install.jpg'])}})

##### Via CDN

* Copy the code below and past into the head of your html page
* Add the selected icon to your HTML page `<i class="ti ti-calendar-event"></i>` or to you CSS stylesheet `content: '\ea52'; `

```HTML
<link rel="stylesheet" href="https://unpkg.com/@tabler/icons@latest/iconfont/tabler-icons.min.css" media="screen>
```

##### Via NPM

* Run `npm i @tabler/icons` to install the tabler package
* Import tabler into you SCSS file `@use 'node_modules/@tabler/icons/iconfont/tabler-icons.scss'; `
* Add the icon variable using the content property

```CSS
@import 'node_modules/@tabler/icons/iconfont/tabler-icons.scss';

i.events {
    content: $ti-icon-calendar-event;
}
```

##### Via SVG

```HTML
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <rect x="4" y="5" width="16" height="16" rx="2"></rect>
    <line x1="16" y1="3" x2="16" y2="7"></line>
    <line x1="8" y1="3" x2="8" y2="7"></line>
    <line x1="4" y1="11" x2="20" y2="11"></line>
    <rect x="8" y="15" width="2" height="2"></rect>
</svg>
```
