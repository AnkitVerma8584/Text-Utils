import React from 'react'

function Alert(props) {
  return (
    props.alert &&
    <div class={`alert alert-${props.alert.type} fade show`} role="alert">
        {props.alert.message}
    </div>
  )
}

export default Alert
