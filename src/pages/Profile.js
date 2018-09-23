import React from 'react'

export default class Profile extends React.PureComponent {
  static async getInitialProps ({ params }) {
    return {
      profile: params.profileSlug
    }
  }

  render () {
    const { profile } = this.props
    return (
      <div>
        <h1>Profile {profile}!</h1>
      </div>
    )
  }
}
