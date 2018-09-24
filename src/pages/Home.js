import React from 'react'
import { Helmet } from 'react-helmet'

export default class Home extends React.PureComponent {
  render () {
    return (
      <div>
        <Helmet title={'Home — React App'} />
        <h1>Hello!</h1>
      </div>
    )
  }
}
