import React from 'react'

export default function (props) {
  if (props.error) {
    return <div>Error! <button onClick={props.retry}>Retry</button></div>
  } else if (props.pastDelay) {
    return <div>Loading...</div>
  }

  return null
}
