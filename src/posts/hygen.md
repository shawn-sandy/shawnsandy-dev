---
title: "Automate boilerplate task/code with Hygen"
date: 2022-03-14
subtitle: "Automate boilerplate code with Hygen--a simple, fast, and scalable code generator that lives in your project."
tags: ['posts', 'developer tooling']
coverImage: ['hygen-script.png']
---
While working on react components for a personal project I kept having to create the same files over and over. Why not automate the creation process, first thoughts were to go with `plop.js` but remembered that I had come across `Hygen.js` that seemed like and easier solution so I decided to give it a try.

I will detail the process when I find time (promise 🙂), for now I have added a gist(s) with my `hygen` scripts` below. Checkout the <a href="https://www.hygen.io/docs/quick-start" target="_blank" rel="nofollow noopener">Hygen Quick Start</a>

#### Install, setup hygen, scaffold a project in hygen

- Install hygen globally `npm i hygen -g` or locally `npm i hygen -D`
- Init in the project folder `hygen init self`
- Create a generator `hygen generator new react-components`
- Build the template (see gist below)
- Use the generator `hygen react-components new`

---

> Gist of my Hygen scripts for creating react components with story book stories

---

<script src="https://gist.github.com/shawn-sandy/031f2e3beae8c1e7c342a7c7e114425b.js"></script>

Thank you hope you find this post useful.
