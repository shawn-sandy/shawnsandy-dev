/* eslint-disable camelcase */
module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [

      {
        type: 'input',
        name: 'name',
        message: 'What is the generator name?'
      },
      {
        type: 'input',
        name: 'fileName',
        message: 'What is file name name (blog)?'
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
        const { name, fileName, options } = answers
        return { ...answers, name, fileName, options}
      })
  }
}
