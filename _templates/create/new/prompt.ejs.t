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
      {
        type: 'select',
        name: 'options',
        message: 'Which sub_folder of the package dir you would like to place the component (src/components)?',
        choices: ['components', 'elements', 'modules', 'page', 'services']
      }

    ]
    return inquirer
      .prompt(questions)
      .then(answers => {
        const { name, actionName, options } = answers
        return { ...answers, actionName, options}
      })
  }
}
