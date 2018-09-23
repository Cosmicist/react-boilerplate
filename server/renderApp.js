import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { isRedirect, ServerLocation } from '@reach/router'
import serialize from 'serialize-javascript'
import Document from '../src/Document'
import App from '../src/App'

export default function renderApp (req, res) {
  return initialProps => {
    try {
      const html = ReactDOMServer.renderToString(
        <ServerLocation url={req.url}>
          <Document>
            <App {...initialProps} />
          </Document>
        </ServerLocation>
      )
      res.send(html.replace('@@INITIAL_PROPS@@', serialize(initialProps)))
    } catch (error) {
      if (isRedirect(error)) {
        return res.redirect(error.uri)
      }
      throw error
    }
  }
}
