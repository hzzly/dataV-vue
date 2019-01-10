const path = require('path');
const repos = require('./mock/repos.json')
const user = require('./mock/user.json')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
      .set('layout', resolve('src/layout'))
      .set('views', resolve('src/views'))
      .set('api', resolve('src/api'))
  },
  devServer: {
    before(app) {
      app.get('/api/users/hzzly', (req, res) => {
        res.json({
          error: 0,
          data: user
        })
      })
      app.get('/api/users/hzzly/repos', (req, res) => {
        res.json({
          error: 0,
          data: repos
        })
      })
    }
  }
}
