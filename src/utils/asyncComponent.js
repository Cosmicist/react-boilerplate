import React from 'react'

export default function asyncComponent ({ loader, Loading, delay }) {
  let Component = null
  let error = null

  return class AsyncComponent extends React.PureComponent {
    state = {
      pastDelay: false,
      Component,
      error
    }

    constructor () {
      super()
      this.state.Component || AsyncComponent.load().then(this.updateState)
    }

    componentDidMount () {
      this.timeout = window.setTimeout(() => this.setState({ pastDelay: true }), delay || 300)
    }

    componentWillUnmount () {
      window.clearTimeout(this.timeout)
    }

    updateState = () => {
      if (this.state.Component !== Component) {
        this.setState({ Component })
      }
    }

    static async load () {
      return loader().then(ResolvedComponent => {
        Component = ResolvedComponent.default || ResolvedComponent
      }).catch(err => {
        error = err
      })
    }

    static async getInitialProps (ctx) {
      if (Component !== null) {
        return Component.getInitialProps ? Component.getInitialProps(ctx) : Promise.resolve(null)
      }
    }

    retry () {
      window.location.reload()
    }

    render () {
      const { Component: ComponentFromState } = this.state

      if (ComponentFromState) {
        return <ComponentFromState {...this.props} />
      }

      if (Loading) {
        return <Loading {...this.props} pastDelay={this.state.pastDelay} error={this.state.error} retry={this.retry} />
      }

      return null
    }
  }
}
