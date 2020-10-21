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

test(\`${funcName}() return \`, () => {
  expect(${funcName}()).toBe();
});

`;

let funcName;
inquirer.prompt([{ 
  type: 'input', 
  name: 'funcName', 
  message: '函数的名字是？(what\'s function name?)', 
  default: 'func' 
}, { 
  type: 'input', 
  name: 'ref', 
  message: '来源？(where\'s question from?)', 
  default: '未知来源' 
}]).then(answers => {
  funcName = answers.funcName;
  ref = answers.ref;
  const func = funcTpl(funcName, ref);
  const test = testTpl(funcName);
  const dirname = path.join(__dirname, `../src/${funcName}`);
  fs.mkdirSync(dirname); // make dir
  fs.writeFileSync(path.join(dirname, `index.js`), func);
  fs.writeFileSync(path.join(dirname, `index.spec.js`), test);
  const packageJSON = require(path.join(__dirname, '../package.json'))
  packageJSON.scripts.test = `jest src/${funcName}/*.spec.js --coverage`;
  fs.writeFileSync(path.join(__dirname, '../package.json'), JSON.stringify(packageJSON, null, 2))
});
