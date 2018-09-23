import React from 'react'

export default class Corset extends React.PureComponent {
  static async getInitialProps () {
    return {
      foo: 'bar'
    }
  }

  render () {
    const { foo } = this.props
    return (
      <div className="page--corset">
        <h1>Corset {foo}!</h1>
      </div>
    )
  }
}
