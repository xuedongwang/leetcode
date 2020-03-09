const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');

const funcTpl = (funcName, ref) => `
/**
 * @ref: ${ref}
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

const lastIndex = dirs.slice(-1)[0].match(/question(\d+)/)[1];
const COMMON_DIR_PREFIX = 'question';
let funcName;
inquirer.prompt([{ 
  type: 'input', 
  name: 'funcName', 
  message: '函数的名字是？', 
  default: 'func' 
}, { 
  type: 'input', 
  name: 'ref', 
  message: '来源', 
  default: '' 
}]).then(answers => {
  funcName = answers.funcName;
  ref = answers.ref;
  const func = funcTpl(funcName, ref);
  const test = testTpl(funcName);
  const dirname = path.join(__dirname, `../src/${COMMON_DIR_PREFIX}${parseInt(lastIndex) + 1}`);
  fs.mkdirSync(dirname); // make dir
  fs.writeFileSync(path.join(dirname, `index.js`), func);
  fs.writeFileSync(path.join(dirname, `index.spec.js`), test);
  fs.readFileSync(path.join(__dirname, '../package.join'), 'utf8').replace(`${COMMON_DIR_PREFIX}${parseInt(lastIndex)}`, `${COMMON_DIR_PREFIX}${parseInt(lastIndex) + 1}`)
});
