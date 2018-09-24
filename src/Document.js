import React from 'react'

export default class Document extends React.PureComponent {
  render () {
    const { children } = this.props
    return (
      <html>
        <head>
          <meta charSet='UTF-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
          <title>React App</title>
          <script>window.__initialProps__ = @@INITIAL_PROPS@@</script>
        </head>
        <body>
          <div id='app'>{children}</div>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <script src='../main.bundle.js' />
        </body>
      </html>
    )
  }
}
