import React from 'react'
import { Router } from '@reach/router'
import { pick } from '@reach/router/lib/utils'
import Home from './pages/Home'
import Corset from './pages/Corset'
import routes from './routes'
import Layout from './Layout'

export default class App extends React.PureComponent {
  state = {
    currentInitialProps: {}
  }

  initialPropsByRoute = {}

  componentDidMount () {
    const path = window.location.pathname
    const matched = pick(routes, path)

    if (matched && matched.route) {
      const { route } = matched
      const initialPropsForPath = this.initialPropsByRoute[path]
      if (initialPropsForPath) {
        this.setState({ currentInitialProps: initialPropsForPath })
      } else if (route.component.getInitialProps) {
        route.component.getInitialProps({ path }).then(currentInitialProps => {
          this.setState({ currentInitialProps })
        })
      }
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
