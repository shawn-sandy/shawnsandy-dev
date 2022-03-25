---
to: _templates/create/<%= name %>/prompt.js
---

// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//

module.exports = {
prompt: ({ inquirer }) => {
    const questions = [

      {
        type: 'input',
        name: 'name',
        message: 'What is the doc name?'
      },
      {
        type: 'input',
        name: 'actionName',
        message: 'What is action name (blog)?'
      },

    ]
    return inquirer
      .prompt(questions)
      .then(answers => {
        const { name, actionName } = answers
        return { ...answers, actionName}
      })
  }
}
