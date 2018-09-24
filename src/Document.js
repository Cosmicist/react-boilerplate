import React from 'react'

export default class Document extends React.PureComponent {
  render () {
    const { helmet } = this.props
    const htmlAttrs = helmet.htmlAttributes.toComponent()
    const bodyAttrs = helmet.bodyAttributes.toComponent()

    console.log(helmet.title.toString())

    return (
      <html>
        <head {...htmlAttrs}>
          {helmet.meta.toComponent()}
          {helmet.title.toComponent()}
          {helmet.link.toComponent()}
          <script>window.__initialProps__ = $$INITIAL_PROPS$$</script>
        </head>
        <body {...bodyAttrs}>
          <div id='app'>$$APP_CONTENT$$</div>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <script src='../main.bundle.js' />
        </body>
      </html>
    )
  }
}
