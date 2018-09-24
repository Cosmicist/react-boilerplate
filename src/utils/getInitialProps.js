export default async function getInitialProps ({ route, params, uri }) {
  return route.component.getInitialProps && route.component.getInitialProps({
    path: route.path,
    params,
    uri
  })
}
