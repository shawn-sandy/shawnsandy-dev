---
title: "Performance metrics; lighthouse scores and fixes for ShawnSandy.dev"
subtitle: "Using the web.dev/measure, allows you to see how well your website performs and gives you tips on how to improve your user experience"
date: 2021-06-15
tags: ['posts', 'performance']
coverImage: ['shawn-sandy-dev.jpg']
---

![acknowledgement image]({{ hlp.sharp.img(['shawn-sandy-dev.jpg'], { force: true, format: 'webp' }) }})

The blog's official launch is getting closer, no exact launch date yet, but it's getting closer *"can feel it in my bones"*. Most of the development work is done. I'm till tweaking things here and there, adding a couple of nice to have features, refining styles, etc,  but everything works. I'm also really pleased with the look and feel of the site, it's simple and clean, code and UX flows together nicely.

However, before launching I wanted to measure how the design and development decisions made while building the site would impact performance, accessibility, page load, SEO, etc, in the real-world.

----------

![site screenshot preview]({{ hlp.sharp.img(['web-dev-audit.jpg'], { force: true, format: 'webp' }) }})

----------

> Using the web.dev/measure, allows you to see how well your website performs and gives you tips on how to improve your user experience

Google's lighthouse online app (web.dev/measure) returned a pretty decent score--performance and accessibility both got a 98 score, best practice, and search engine optimization 100 apiece. Pretty good, a couple of minor errors, nothing that can't be fixed.

Here is a link to the  [Lighthouse score]([https://link](https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fshawnsandy.dev%2F))

----------

![lighthouse recommendations]({{ hlp.sharp.img(['lighthouse-reccomends.png'], { force: true, format: 'webp' }) }})

##### Recommendations and Fixes

**Eliminate render-blocking resources**

![preload fonts]({{ hlp.sharp.img(['preload-fonts.png'])}})

> The Opportunities section of your Lighthouse report lists all URLs blocking the first paint of your page. The goal is to reduce the impact of these render-blocking URLs by inlining critical resources, deferring non-critical resources, and removing anything unused.

This issue was caused by linking to a font from git using `UNPKG` . I added the `preload` and `as` attributes to the link, but I feel the best way to fix this would be to load the font locally and not from the CDN, the question is it worth the work?

**Serve next-gen image formats**

> JPEG 2000, JPEG XR, and WebP are image formats that have superior compression and quality characteristics compared to their older JPEG and PNG counterparts. Encoding your images in these formats rather than JPEG or PNG means that they will load faster and consume less cellular data.

I'm not sure I want to give up png/jpegs as image formats just yet so I will have to think this over and make sure that backwards compatibility is not an issue. `**fixed` .

**Image elements do not have explicit width and height**

> Always include width and height size attributes on your images and video elements. Alternatively, reserve the required space with CSS aspect ratio boxes. This approach ensures that the browser can allocate the correct amount of space in the document while the image is loading.

Personally, I'm not a huge fan of this metric as it impacts how I do my responsive image loading. to fix I will have to refactor some of my code so I will leave it in for now.

**Keep request counts low and transfer sizes small 20 requests • 382 KiB**

> Lighthouse now supports performance budgets. This feature, LightWallet, can be set up in under five minutes and provides feedback on performance metrics and the size and quantity of page resources.

I forgot to add a performance for the site (the shame) so I will get on this ASAP. Using the Lighthouse CLI I can add this to my build process so that reports are generated after build.

I will update the post when the changes are done so stay tuned.
