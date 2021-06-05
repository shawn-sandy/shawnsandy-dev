---
title: Cleaner, useful team commits messages with commitizen
subtitle: Commitizen is an open-source project created to help developers  write better commit messages by making the process simple!
tags: ['posts', 'tips', 'Win10']
coverImage: ['commitizen-terminal.jpg']
date: 2021-06-02
---

![alt]({{ hlp.sharp.img(['commitizen-terminal.jpg'], {'force': true, 'format': 'webp'}) }})

> A commit message is a short description of the changes you've made to a file added before committing the changes to your repository.

 Let's, chat about commit messages, what we ue them for and how we as developers can improve how we write them. For the record, I have written(still do) some pretty horrible commit --messages—WIP (personal fav), updated code, refine page layout/style(CSS), fix error on page, add new functionName(), add a feature for new post, or some other random description that I often cannot make sense of myself five minutes after :(.

So what's the problem, we all do it? Well, I use commits messages to help me better understand and figure out the purpose of a code change and why it was made when either reviewing PR's or working directly with the code itself. So writing something that makes sense is kind of important. Yet, I'm mortified when going through my commit messages, muttering to myself how horrible they are, and promising to work on improving them in my next commit.

> Commit messages are a way of communication between team members. Let’s say there’s a bug in the application which was not there before. To find out what caused the problem, reading the commit messages could be handy. The proper commit message can save a great deal of time finding the recent changes related to a bug

More importantly, I work with a team. I'm not the only person contributing to the codebase(s). Commit messages help team members understand what new feature was added or why a developer made changes; it saves developers time! Bad commit message can hurt my team's productivity, so it became a mission of mine to improve my commit messages.

> Commitizen is an open-source project that helps contributors be good open-source citizens. It accomplishes this by prompting them to follow commit message conventions at commit time. It also empowers project maintainers to create or use predefined commit message conventions in their repos to better communicate their expectations to potential contributors.

After a quick google search, I found [commitizen](http://commitizen.github.io/cz-cli/), an open-source project created to help developers  write better commit messages by making the the process simple! Setup via npm takes about 5-10mins and once completed it you get interactive commits in your terminal, it's even shorter if you are a VS Code user grab(install) the [commitizen extensions](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits) run via a command panel or icon click via the source control panel.

---

#### Conventional Commits (VS Code extension)

##### Installation/Setup

 Search for the extension by typing `conventional commits` in your VS CODE extensions panel search and hitting install. Alternatively you can install directly from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits)

![alt]({{ hlp.sharp.img(['commitizen-install-extension.jpg'], {'force': true, 'format': 'webp' }) }})

Click on the `conventional commit` icon in the source control menu ot `command/ctrl + shift + p` enter `conventional commit` to launch the interactive prompts

![alt]({{ hlp.sharp.img(['conventional-commit-run.jpg'], {'force': true, 'format': 'webp' }) }})

Follow the prompts to complete your commit!

![alt]({{ hlp.sharp.img(['cz-prompts.jpg'], {'force': true, 'format': 'webp' }) }})

---

#### Install commitizen via NPM

Install commitizen globally or in your project/repo

```terminal
# global install
npm install -g commitizen

# project install
npm install commitizen

```

Make sure your project/repo is commitizen friendly. Initialize your project to use the cz-conventional-changelog

```BASH
#npm
commitizen init cz-conventional-changelog --save-dev --save-exact

#yarn
commitizen init cz-conventional-changelog --yarn --dev --exact
```

Replace git commit with `git cz` and follow the prompts or add the command to your `npm scripts`

```BASH
"scripts": {
    "commit": "cz"
  }
```

[If you run into any problems checkout the project docs here](http://commitizen.github.io/cz-cli/)

---

#### Resources

---

##### [Commitizen by commitizen](http://commitizen.github.io/cz-cli/)

When you commit with Commitizen, you'll be prompted to fill out any required commit fields at commit time. No more waiting until later for a git commit hook to run and reject your commit (though that can still be helpful). No more digging through CONTRIBUTING.md to find what the preferred format is. Get instant feedback on your commit message formatting and be prompted for required fields.

---

##### [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with SemVer, by describing the features, fixes, and breaking changes made in commit messages.

---

##### [How to write a good commit message - DEV Community](https://dev.to/chrissiemhrk/git-commit-message-5e21)

---

##### [Udacity Nanodegree Style Guide](https://udacity.github.io/git-styleguide/)

---

##### [Writing Meaningful Commit Messages](https://reflectoring.io/meaningful-commit-messages/)
