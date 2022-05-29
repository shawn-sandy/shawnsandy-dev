---
title: CodeStudio Extension Pack for VS Code (ver. 0.8.0)
subtitle: 'CodeStudio is an extension pack for VSCODE that bundles several extensions (frontend) developers into one install. I created this extension for two reasons, the first to teach myself how to, the second, to scratch an itch that I had trying to figure out the quickest to get VSCODE from install to work ready.'
date: 2021-06-26
coverImage: ["code-studio.jpg"]
tags: ['posts', 'codestudio', 'projects']
---

![code studio]({{ hlp.sharp.img(['code-studio.jpg']) }})

CodeStudio is an extension pack for VSCODE that bundles several extensions (frontend) into one install. I created the extension for two reasons, the first to teach myself how to, the second, to scratch an itch that I had trying to figure out how to get VSCODE from installation to work ready in the quickest possible time. I managed to do both; YAY me :)!

In version 8.0, I have added two new extensions WebHint and Conventional Commits to the pack and removed a couple of older extensions with features that we're built into VSCODE.

> Performance note. I have been able to comfortably run (39+) extensions on a surfacebook pro i5 8gb of ram 256gb hd , lets say I like pushing it. If you are multitasking or run a lot of memory hungry apps (Chrome...), I would recommend that you go with something a bit more powerful.

----------

#### Install/Usage

* **VSCode market place** <https://marketplace.visualstudio.com/items?itemName=shawnsandy.codestudio>
* Or go to your extensions panel `View > Extensions` and type `codestudio` in search box to find the extension than click install.
* The [VSCode ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension requires the latest version of, If you haven't installed ESLint either locally or globally do so by running `npm install eslint` in the workspace folder for a local install or `npm install -g eslint` for a global install.

----------

#### Featured Extensions

* {{ hlp.11ty.openUrl('https://webhint.io/', "Webhint is a customizable linting tool that helps you improve your site's accessibility, speed, cross-browser compatibility, and more by checking your code for best practices and common errors.") | safe }}
* {{ hlp.11ty.openUrl('https://github.com/Huachao/vscode-restclient/blob/master/README.md', 'REST Client allows you to send HTTP request and view the response in Visual Studio Code directly.') | safe }}
*  {{ hlp.11ty.openUrl('https://github.com/sleistner/vscode-fileutils/blob/master/README.md', 'File Utils - Visual Studio Code Extension') | safe }}
* {{ hlp.11ty.openUrl('https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits', 'This extension helps you to fill in commit message according to Conventional Commits.') | safe }}
* {{ hlp.11ty.openUrl('https://gitlens.amod.io/', 'GitLens supercharges the Git capabilities built into Visual Studio Code') | safe }}

----------

#### Recommending extensions in your project

You can recommend extensions to team members, users, or contributors by adding the `extensions.json` to your project folder `./vscode` directory.

* Create and `extensions.json` file in `.vscode/` folder in your project
* Copy and paste the code below into the `extensions.json` file you created
* Share the project/repo with others and they will be promoted to install your recommend extensions on first load.

```json
{
  "recommendations": [
    "shawnsandy.codestudio",
    "dbaeumer.vscode-eslint",
    "mkaufman.HTMLHint",
    "humao.rest-client",
    "dsznajder.es7-react-js-snippets",
    "eseom.nunjucks-template",
    "douglaszaltron.nunjucks-vscode-extensionpack",
    "msjsdiag.debugger-for-chrome",
    "sdras.vue-vscode-extensionpack",
    "octref.vetur",
    "hollowtree.vue-snippets",
    "sdras.vue-vscode-snippets"
  ]
}
```

----------
