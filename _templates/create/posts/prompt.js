// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//

module.exports = {
prompt: ({ inquirer }) => {
    const questions = [

      {
        type: 'input',
        name: 'name',
        message: 'What is the post name/title?'
      },
      {
        type: 'input',
        name: 'fileName',
        message: 'What is file name (blog.md/html)?'
      },
      {
        type: 'select',
        name: 'options',
        message: 'Which sub_folder of the package dir you would like to place the component (src/components)?',
        choices: ['content', 'posts', 'pages', 'developers']
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
