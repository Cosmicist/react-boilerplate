import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Helmet from 'react-helmet'
import { isRedirect, ServerLocation } from '@reach/router'
import serialize from 'serialize-javascript'
import Document from '../Document'
import App from '../App'

export default function renderApp (req, res) {
  return initialProps => {
    try {
      const html = ReactDOMServer.renderToString(
        <ServerLocation url={req.url}>
          <App {...initialProps} />
        </ServerLocation>
      )

      const document = ReactDOMServer.renderToString(<Document helmet={Helmet.renderStatic()} />)
        .replace('$$INITIAL_PROPS$$', serialize(initialProps))
        .replace('$$APP_CONTENT$$', html)

      res.send(`<!doctype html>${document}`)
    } catch (error) {
      if (isRedirect(error)) {
        return res.redirect(error.uri)
      }
      throw error
    }
  }
}
