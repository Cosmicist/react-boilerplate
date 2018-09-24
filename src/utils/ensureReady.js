import routes from '../routes'
import { pick } from '@reach/router/lib/utils'

export default async function ensureReady () {
  const { route } = pick(routes, window.location.pathname)
  route && route.component && route.component.load && await route.component.load()
  return Promise.resolve(window.__initialProps__)
}
