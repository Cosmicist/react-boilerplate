import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { ServerLocation } from '@reach/router'
import serialize from 'serialize-javascript'
import Document from '../src/Document'
import App from '../src/App'

export default function renderApp (req, res) {
  return initialProps => {
    const html = ReactDOMServer.renderToString(
      <ServerLocation url={req.url}>
        <Document>
          <App {...initialProps} />
        </Document>
      </ServerLocation>
    )
    res.send(html.replace('@@INITIAL_PROPS@@', serialize(initialProps)))
  }
}
