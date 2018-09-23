import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'

const initialProps = window.__initialProps__

hydrate(
  <App {...initialProps} />,
  document.getElementById('app')
)
