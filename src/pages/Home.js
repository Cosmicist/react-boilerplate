import React from 'react'

export default class Home extends React.PureComponent {
  static async getInitialProps () {
    return {
      foo: 'bar'
    }
  }

  constructor (props) {
    super(props)
    // console.log(props)
  }

  render () {
    const { foo } = this.props
    return (
      <div className="page--home">
        <h1>Home, {foo}!</h1>
      </div>
    )
  }
}
