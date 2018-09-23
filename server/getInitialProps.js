export default async function getInitialProps (component, path) {
  return component.getInitialProps && component.getInitialProps({ path })
}
