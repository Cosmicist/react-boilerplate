import React from 'react'
import Navigation from './components/navigation/Navigation'

export default class Layout extends React.PureComponent {
  render () {
    return (
      <React.Fragment>
        <Navigation />
        <div>
          {this.props.children}
        </div>
      </React.Fragment>
    )
  }
}
