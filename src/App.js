import React from 'react'
import { globalHistory, Router } from '@reach/router'
import { pick } from '@reach/router/lib/utils'
import routes from './routes'
import Layout from './Layout'
import getInitialProps from './utils/getInitialProps'

export default class App extends React.PureComponent {
  state = {
    currentInitialProps: {}
  }

  initialPropsByRoute = {}

  componentDidMount () {
    this.runGetInitialProps()
    globalHistory.listen(this.runGetInitialProps)
  }

  runGetInitialProps = () => {
    this.getInitialProps().then(currentInitialProps => this.setState({ currentInitialProps }))
  }

  async getInitialProps () {
    const path = window.location.pathname
    const matched = pick(routes, path)

    if (matched && matched.route) {
      const initialPropsForPath = this.initialPropsByRoute[path]
      return initialPropsForPath || await getInitialProps(matched) || {}
    }
  }

  render () {
    const { currentInitialProps } = this.state
    return (
      <Router>
        <Layout path={'/'}>
          {routes.map(({ path, component: C }) => <C key={path} path={path} {...this.props} {...currentInitialProps} />)}
        </Layout>
      </Router>
    )
  }
}
