---
title: "Performance metrics; lighthouse scores and fixes for ShawnSandy.dev"
subtitle: "Using the web.dev/measure, allows you to see how well your website performs and gives you tips on how to improve your user experience"
date: 2021-06-15
tags: ['posts', 'performance']
coverImage: ['shawn-sandy-dev.jpg']
---

![acknowledgement image]({{ hlp.sharp.img(['shawn-sandy-dev.jpg'], { force: true, format: 'webp' }) }})

The official launch the site/blog (shawnsandy.dev) is getting closer, no exact launch date yet, but *"I can feel it in my bones"*, it's getting closer. Most of the development work is done, I'm still tweaking things here and there, adding a couple of nice to have features, refining styles, but everything works. I'm also really pleased with the look and feel of the site, it's simple yet well put together the code and UX flows well.

I'm a huge advocate of Frontend performance metrics, so before launch, I wanted to measure how the design and development decisions made while building the site would impact performance, accessibility, page load, SEO, etc, in the real-world.

----------

![acknowledgement image]({{ hlp.sharp.img(['web-dev-audit.jpg'], { force: true, format: 'webp' }) }})

> Using the web.dev/measure, allows you to see how well your website performs and gives you tips on how to improve your user experience

A Google's lighthouse audit on the site returned a pretty good score, performance and accessibility both got 98 scores. Best practice and SEO got a 100 apiece. There were a couple of minor errors, nothing too big I will walk through how I fixed them (or didn't) below.

----------
