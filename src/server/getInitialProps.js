export default async function getInitialProps (matched) {
  return matched.route.component.getInitialProps && matched.route.component.getInitialProps({
    params: matched.params,
    path: matched.route.path,
    uri: matched.uri
  })
}
