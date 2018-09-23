import Home from './pages/Home'
import Profile from './pages/Profile'

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/profile/:profileSlug',
    component: Profile
  }
]
