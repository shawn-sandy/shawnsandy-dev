---
title: 'Master to Main, renaming Github default branch. Making Sense of it?'
subtitle: The renaming of a git branch from master to main made no sense at first. But I did it, I love it and I'm not going back
date: 2021-06-18
tags: ['posts', 'opinion']
coverImage: ['github-master-main-announcement.jpg']
---

![acknowledgement image]({{ hlp.sharp.img(['Acknowledgement.png']) }})

GitHub, in a show of support and solidarity with the African community during the turmoil and unrest that rocked the US in response to the death of George Floyd and many others while in the custody of law enforcement. Announced that "The default branch for newly-created repositories is now main.".

For me, the announcement's timing felt like a cheap corporate publicity stunt and one that would have little impact on the issues that affected my community. However, after a bit of research, I realized that it was not just a publicity stunt. Github and many others in the Tech community were actively discussing changing the default branch name of VCS repositories from master to something more relevant in empathy with those impacted by the term or found its inference to slavery offensive.

!['github announcement']({{ hlp.sharp.img(['github-master-main-announcement.jpg'])}})

The change did not connect with me at first, but out of curiosity, but I decided I would give it a try. I was pleasantly surprised. GitHub had really thought the this through, provided [a full guide on the process](https://github.com/github/renaming/).

It was not just repositories. The company did a full audit of the impact of the change on all supporting services and refactored to ensure minimal downtime for repository owners that would make the change. It was a huge undertaking, and that made a difference for me. I appreciated the effort!

After making the change to most of my repositories it dawned on me that renaming to main made little sense in relation to my workflow. I prefer to work with a `feature/branch` model that I push and into a develop for testing. That branch is then merged into the main (previously master) branch before release into `production` .  You see what I'm getting at here the name would make more sense to my workflow if I changed it to production, something I would never have thought about prior.

> I was now empowered to choose and that means a whole lot! A thank you is in order to the folks at GitHub who worked so hard on something that many (including myself) brushed off as another token gesture by Corporate America.

THANK YOU GITHUB!

----------

##### Resources and Links

 {{ hlp.11ty.openUrl('https://github.blog/changelog/2020-07-22-github-actions-better-support-for-alternative-default-branch-names/', 'GitHub Actions: Better support for alternative default branch names | GitHub Changelog' ) | safe }}

{{ hlp.11ty.openUrl('https://www.zdnet.com/article/github-to-replace-master-with-alternative-term-to-avoid-slavery-references/', 'GitHub to replace "master" with alternative term to avoid slavery references' ) | safe }}

{{ hlp.11ty.openUrl('https://github.community/t/a-protest-on-changing-master-to-main/141098', 'A protest on changing master to main - GitHub Support Community' ) | safe }}

{{ hlp.11ty.openUrl('https://www.drupal.org/node/2275877', 'Replace "master/slave" terminology with "primary/replica" [#2275877] | Drupal.org' ) | safe }}
