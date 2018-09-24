import express from 'express'
import { pick } from '@reach/router/lib/utils'
import routes from '../routes'
import getInitialProps from '../utils/getInitialProps'
import renderApp from './renderApp'

const router = express.Router()
router.get('*', (req, res, next) => {
  const matched = pick(routes, req.url)

  if (matched) {
    getInitialProps(matched)
      .then(renderApp(req, res))
      .catch(next)
  }
})

export default router
