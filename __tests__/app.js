'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-cement:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ componentName: 'Tester' });
  });

  it('creates files', () => {
    assert.file([
      'src/app/Components/Tester/index.js',
      'src/app/Components/Tester/styles.js'
    ]);
  });
});
