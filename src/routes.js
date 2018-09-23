import Home from './pages/Home'
import Corset from './pages/Corset'

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/corset/:corsetSlug',
    component: Corset
  }
]
