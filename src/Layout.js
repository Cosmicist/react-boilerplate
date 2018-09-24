import React from 'react'
import Navigation from './components/navigation/Navigation'
import { Helmet } from 'react-helmet'

export default class Layout extends React.PureComponent {
  render () {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet='UTF-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
          <meta name='description' content='React app' />
          <title>React App</title>
        </Helmet>
        <Navigation />
        <div>
          {this.props.children}
        </div>
      </React.Fragment>
    )
  }
}
