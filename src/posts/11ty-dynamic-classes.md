---
title: 'Tip: Simple, dynamic 11ty class-names'
subtitle: ''
date: 2021-06-08
tags: ['posts', 'tips', '11ty']
---

When building dynamic websites, you will most likely find yourself working with template-driven pages controlled by a master layout(s). So it's standard practice for developers to generate unique CSS class names for each page from dynamic data, allowing them to customize the look and feel of individual pages quickly.

Here's a tip I found on 11ty rocks that allows you to add dynamic classes on your Eleventy template. I cleaned up the code to remove the if statements on Nunjucks templates; personal preference.

### Usage

I usually add these to the body tag; you can also add them to individual components; prefix the class with the component name something like `banner-main` for easier identification.

Page name classes

Template classes

Using them together

More info on the Eleventy docs
