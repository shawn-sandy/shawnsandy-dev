---
title: Cleaner, useful team commits messages with commitizen
subtitle: Commitizen is an open-source project created to help developers  write better commit messages by making the process simple!
tags: ['posts', 'tips', 'Win10']
date: 2021-06-02
---

![alt]({{ hlp.sharp.img('commitizen-terminal.jpg', {'force': true}) }})

<!-- {{ hlp.sharp.img('commitizen-terminal.jpg') }} -->

 Let's, chat about commit messages, what we as developers can do to improve how we write them and why we owe it to our peers to do so.

Now, I will be the first to admin that  I have written some pretty horrible commit messages—WIP (personal fav), updated code, refine page layout/style(CSS), fix error on page, add new functionName(), add a feature for new post, or some other random description.

> A commit message is a short description of the changes you've made to a file added before committing the changes to you repository.

So what's the problem? I use commits messages to help me better understand and figure out the purpose of a code change and why it was made when either reviewing PR's or working directly with the code itself. So writing something that makes sense is kind of important. Yet, I'm mortified when going through my commit messages, muttering to myself how horrible they are, and promising to work on improving them in my next commit.

> Commit messages are a way of communication between team members. Let’s say there’s a bug in the application which was not there before. To find out what caused the problem, reading the commit messages could be handy. The proper commit message can save a great deal of time finding the recent changes related to a bug

More importantly, I work with a team. I'm not the only person contributing to the codebase(s). Commit messages help team members understand what new feature was added or why a developer made changes; it saves developers time! Bad commit message can hurt my team's productivity, so it became a mission of mine to improve my commit messages.

> Commitizen is an open-source project that helps contributors be good open-source citizens. It accomplishes this by prompting them to follow commit message conventions at commit time. It also empowers project maintainers to create or use predefined commit message conventions in their repos to better communicate their expectations to potential contributors.

After a quick google search, I found [commitizen](http://commitizen.github.io/cz-cli/), an open-source project created to help developers  write better commit messages by making the the process simple! Setup via npm takes about 5-10mins and once completed it you get interactive commits in your terminal, it's even shorter if you are a VS Code user grab(install) the [commitizen extensions](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits) run via a command panel or icon click via the source control panel.

#### Install

VS Code

![alt]({{ hlp.sharp.img('convential-commits.jpg', {'force': true, 'format': 'webp' }) }})

#### Resources

[Commitizen by commitizen](https://www.notion.so/Commitizen-by-commitizen-e5c5e4c100dc441bbe268a99debe38bd)

[Conventional Commits](https://www.notion.so/Conventional-Commits-fa51511da96a40079e6e493bae7bb11d)

[Git MERGE vs REBASE - YouTube](https://www.notion.so/Git-MERGE-vs-REBASE-YouTube-c231474f5e154f509a6719922508d7cd)

[How to write a good commit message - DEV Community](https://www.notion.so/How-to-write-a-good-commit-message-DEV-Community-fa2b87063387465797d421306fc64ac5)

[Udacity Nanodegree Style Guide](https://www.notion.so/Udacity-Nanodegree-Style-Guide-b679ee3fc2ef462a956b0eb339b79ce4)

[Writing Meaningful Commit Messages](https://www.notion.so/Writing-Meaningful-Commit-Messages-53c0a165b51749388130305637c78c5c)

[commitlint - Lint commit messages](https://www.notion.so/commitlint-Lint-commit-messages-5f7465225b364674bcfbc188463e8fb7)
