import React from 'react'
import ReactDOMServer from 'react-dom/server'
import express from 'express'
import { ServerLocation } from '@reach/router'
import Document from '../src/Document'
import App from '../src/App'

const router = express.Router()
router.get('*', (req, res) => {
  const html = ReactDOMServer.renderToString(
    <ServerLocation url={req.url}>
      <Document>
        <App />
      </Document>
    </ServerLocation>
  )
  res.send(html)
})

export default router
