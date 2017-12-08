'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay('Welcome to ' + chalk.red('CEMENT') + '!'));

    const prompts = [
      {
        type: 'input',
        name: 'componentName',
        message: 'Name your component?'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
      console.log(this.props);
    });
  }

  _output(file) {
    const path = `src/app/Components/${this.props.componentName}`;
    return this.destinationPath(`${path}/${file}`);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('component.js'),
      this.destinationPath(this._output('index.js')),
      { componentName: this.props.componentName }
    );
    this.fs.copy(
      this.templatePath('styles.js'),
      this.destinationPath(this._output('styles.js'))
    );
  }

  install() {
    this.installDependencies();
  }
};
