import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'
import ensureReady from './utils/ensureReady'

ensureReady().then(initialProps => {
  hydrate(
    <App {...initialProps} />,
    document.getElementById('app')
  )
})
