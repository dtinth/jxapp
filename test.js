
var { alert, prompt, confirm } = require('./shims')
var assert = require('assert')

alert('Beginning Test', 'This test will automate itself when run from test.sh, so don\'t press anything!')

assert.strictEqual(prompt('Type in YES'), 'YES')
assert.strictEqual(prompt('Press enter', 'ABC'), 'ABC')
assert.strictEqual(prompt('Press cancel', 'ABC'), null)

assert.strictEqual(confirm('Press Ok'), true)
assert.strictEqual(confirm('Press Cancel'), false)

console.log("\033[1;32m素晴らしい！\033[0m")

