---
title: 'AccessLint: quickly add dynamic accessibility testing to your development workflow'
subtitle: 'Accessibility warnings for dynamic web content.'
date: 2021-06-07
coverImage: ['access-lint.jpg']
tags: ['posts', 'tools', accessibility']
---

!['Accesslint github site']({{ hlp.sharp.img(['access-lint.jpg'])}})

I consider accessibility testing an important part any Frontend development workflow so I'm constantly on the lookout for tools that can make the process easier. Recently I came across a lightweight JavaScript library that allows you to quickly add accessibility testing to any project in under a minute.

Created by the Accesslint team, `accesslint.js` , when added to any page, allows you to view accessibility warnings/errors in your browser's console. What's unique is that `accesslint.js` will even return errors for dynamic content.

!['head code']({{ hlp.sharp.img(['access-lint-code.jpg'])}})

#### Usage

* Add the link to the script below above your closing body tag.
* View the page in your browsers and check your console for errors and warnings.

```HTML
<script src="https://cdn.accesslint.com/accesslint-1.1.2.js"></script>
```

Visit the <a href="https://github.com/AccessLint/accesslint.js" rel="nofollow noopener">Access Lint GitHub page</a> for more information and detailed install instructions. Enjoy!
