export default async function getInitialProps ({ route, params, uri }) {
  route.component.load && await route.component.load()
  return route.component.getInitialProps && route.component.getInitialProps({
    path: route.path,
    params,
    uri
  })
}
