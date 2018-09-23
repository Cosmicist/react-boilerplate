import React from 'react'
import { Link } from '@reach/router'

export default class Navigation extends React.PureComponent {
  render () {
    return (
      <ul>
        <li><Link to={''}>Home</Link></li>
        <li><Link to={'profile/some-profile'}>Profile</Link></li>
      </ul>
    )
  }
}
