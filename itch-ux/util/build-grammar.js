const y = require('yaml')
const glob = require('glob')
const fs = require('fs-extra')

glob('./grammar/**/*.yml', async (err, matches) => {
  const set = []
  for (const match of matches) {
    set.push(fs.readFile(match, 'utf8').then(v => y.parse(v)))
  }
  const grammar = await Promise.all(set)
  const js = 'module.exports = ' + JSON.stringify(grammar)
  fs.writeFileSync('./src/grammar.dist.js', js)
})