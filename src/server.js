import path from 'path'
import express from 'express'
import router from './server/ssr'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import config from '../webpack.config'
import cors from 'cors'
import morgan from 'morgan'

const isDev = process.env.NODE_ENV === 'development'
const port = process.env.PORT || 3000
const app = express()

app.use(cors())
isDev && app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, '../public')));

if (process.env.NODE_ENV === 'development') {
  app.use(webpackDevMiddleware(webpack(config), {
    publicPath: config.output.publicPath
  }))
}

app.use(router)

app.listen(port, err => {
  if (err) {
    return console.log(err)
  }

  console.log(`Listening on port [${port}]...`)
})
