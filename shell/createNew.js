const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');

const funcTpl = funcName => `
/**
 * @ref: 
 */

const ${funcName} = function () {}

module.exports = ${funcName};
`;

const testTpl = funcName => `
const ${funcName} = require('./index');

test('${funcName}() return ', () => {
  expect(${funcName}()).toBe();
});

`;

const dirs = fs.readdirSync(path.join(__dirname, '../src'));

const index = dirs.slice(-1)[0].match(/demo(\d+)/)[1];
const COMMON_DIR_PREFIX = 'demo';
let funcName;
inquirer.prompt([ { 
  type: 'input', 
  name: 'funcName', 
  message: '函数的名字是？', 
  default: 'func' 
}]).then(answers => {
  funcName = answers.funcName;
  const func = funcTpl(funcName);
  const test = testTpl(funcName);
  const dirname = path.join(__dirname, `../src/${COMMON_DIR_PREFIX}${parseInt(index) + 1}`);
  fs.mkdirSync(dirname); // make dir
  fs.writeFileSync(path.join(dirname, `index.js`), func);
  fs.writeFileSync(path.join(dirname, `index.spec.js`), test);
});


