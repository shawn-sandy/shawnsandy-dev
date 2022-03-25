---
to: _templates/create/<%= name %>/<%= fileName %>
---

---
to: app/hello.js
---
## name <%= name %>
## fileName <%= fileName %>
## options <%= options %>

const hello = ```
Hello!
This is your first hygen template.

Learn what it can do here:

https://github.com/jondot/hygen
```

console.log(hello)
