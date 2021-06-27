---
title: "JAM-STACKING shawnsandy.dev: 11ty, Vanilla JS, HTML, Netlify, Node/NPM"
subtitle: "Jamstack is an architecture designed to make the web faster, more secure, and easier to scale. It builds on many of the tools and workflows which developers love, and which bring maximum productivity."
date: 2021-06-20
tags: ['posts', 'frontend']
coverImage: ['servers.jpg']
---

!['javascript']({{ hlp.sharp.img(['servers.jpg'])}})

Before joining the 9-5 workforce, no matter where or what I was doing I always had a side project, whether it was a WordPress plugin, Laravel library, a CSS toolkit, or a VUE plugin. I was always exploring new things trying out the latest tech or prototyping some idea. But when you work in a corporate environment, you become comfortable; you fall into a safe routine work, home, and back to work. There's very little time for anything else; you lose your edge, the dream clouds the mission and, the things you were once passionate about now take a backseat and slowly fade away.

At least that's how it felt for me. So I made a decision, dust off some of those projects that I had forgotten about, catch up on all the new shiny stuff that I had missed (a lot of those), create something new and meaningful, and have fun doing it.

I also realized that I needed a place to share my renewed passion with others. Naturally, I decided to start a blog, well, not just any average blog; I wanted one built on that JAM stack thingy that all the cool cats were talking about; it would also allow me to try out a classless, accessibility-first CSS framework that I had been building.

By this time, I was already sold on the idea of Statically generated websites as a viable option to the traditional CMS like WordPress. I tried several static site generators and chose 11_TY mainly because it did not require a Javascript framework like react or vue as many of the others I had come across do. It had a short learning curve, and more importantly, it did not get in my way.

I would also need a place to host my Blog; I went with Netlify; I played around with it for about a year, so I was familiar with how it worked; it was designed for static website hosting and free for personal projects, no-brainer.

----------

### Implementation

##### FirstPaint: CSS framework

> First Paint is an easy to use CSS/SCSS starter library that contains accessibility focused, classless, semantic HTML elements and components for quickly scaffolding/building modern, lightweight mobile friendly digital products, websites apps and the likes.

I had been working on a small SASS/CSS framework off and on for about two years. My goal was to replace Bootstrap, my framework of choice at the time, with my own, something lightweight and easy to use. A simple drop-in solution. Sometime later, I ran into a couple of CSS classless frameworks. The idea resonated, so I decided to refactor and build a classless SASS framework that would focus on accessibility. Since I was also digging into performance and site metrics with Google lighthouse at the time, so I named the library FirstPaint.  {{ hlp.11ty.openUrl('https://github.com/shawn-sandy/ideas/blob/main/projects/first-paint/README.md', 'You can checkout the library here') | safe }}.

##### FP. PAGES: HTML5 (UI KIT)

Next, using FirstPaint (the CSS framework  I mentioned earlier), I built an HTML 5 UI toolkit for rapid prototyping and site design, giving me the flexibility I needed to turn my design ideas into pages quickly.

----------

#### JavaScript

Javascript is the juice that powers the JAM stack; servers, builds, interactivity, data management, etc. It's what makes a lot of what we can now do on the front-end possible. It takes what would have required a backend framework and makes it simple, empowering the frontend in ways we have never seen before. JavaScript has done what Pinky and Brain couldn't; taken over the world. So here is what my JavaScript setup looks like

##### Node.js

> As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.

Node.js is used to run a massive part of my development; Locally, it functions as an HTTPS server and development platform providing things like live reloading, post/pre-processing of scripts on the frontend, and backend, CLI commands. On the server, it manages and builds out all my static pages, DevOps tasks, etc.

##### 11ty (Eleventy)

> Eleventy is not a JavaScript framework—that means zero boilerplate client-side JavaScript. We’re thinking long term and opting out of the framework rat race. The tool chain, code conventions, and modules you use in your front end stack are decoupled from this tool. Work from a solid foundation of pre-rendered templates that suit your project’s progressive enhancement baseline requirements.

Eleventy.js is a javascript library used to generate static pages from markdown/HTML files at build/runtime that is simple to use. While it's not a framework, but it provides all the foundation tools you have come to expect in a framework. The difference is that you get to choose the plumbing, fittings, accessories, and that's what sold me.

##### Other JS Libraries

* {{ hlp.11ty.openUrl('Sharp for image resizing', 'https://sharp.pixelplumbing.com/') | safe }}
* {{ hlp.11ty.openUrl('https://lodash.com/', 'Lodash for handling arrays, objects function etc') | safe }}
* {{ hlp.11ty.openUrl('https://day.js.org/', 'Day.js simple easy date handling') | safe }}

----------

#### Netlify Hosting

> Netlify is an all-in-one platform for automating modern web projects. Replace your hosting infrastructure, continuous integration, and deployment pipeline with a single workflow. Integrate dynamic functionality like serverless functions, user authentication, and form handling as your projects grow.

[Netlify](http://netlifly.com) plays the role of my entire DevOps team, providing not just hosting, CI/CD deployment, serverless functionality, authentication, analytics, form processing on the backend.

A/B testing, domain and DNS management, commit preview, and the recently added collaborative deploy previews allow you to share your development progress with stakeholders. Netlify is pushing the boundaries and making it simple for frontend developers to explore this exciting new stack.

That's it for now; I will go over each of these features how they are used in detail in the future hope you enjoyed it.
