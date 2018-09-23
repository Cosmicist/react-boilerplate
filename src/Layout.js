import React from 'react'

export default class Layout extends React.PureComponent {
  render () {
    return (
      <React.Fragment>
        <h1>Navigation</h1>
        <div>
          {this.props.children}
        </div>
      </React.Fragment>
    )
  }
}
