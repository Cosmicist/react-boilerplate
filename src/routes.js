import React from 'react'
import Loading from './components/loading/Loading'
import asyncComponent from './utils/asyncComponent'

export default [
  {
    path: '/',
    component: asyncComponent({
      loader: () => import('./pages/Home'),
      Loading
    })
  },
  {
    path: '/profile/:profileSlug',
    component: asyncComponent({
      loader: () => import('./pages/Profile'),
      Loading
    })
  }
]
