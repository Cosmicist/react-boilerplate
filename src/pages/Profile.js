import React from 'react'
import { Helmet } from 'react-helmet'

export default class Profile extends React.PureComponent {
  static async getInitialProps ({ path, params, uri }) {
    return {
      profile: params.profileSlug,
      context: { path, params, uri }
    }
  }

  render () {
    const { profile, context } = this.props
    return (
      <div>
        <Helmet title={'Profile — React App'} />

        <h1>Profile {profile}!</h1>

        <h2>This is the <code>context</code> object that is passed to <code>getInitialProps</code>:</h2>
        <pre>{
          context && JSON.stringify(context, null, '  ')
        }</pre>
      </div>
    )
  }
}
