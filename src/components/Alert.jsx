import React from 'react'

function Alert(props) {
  return (
    <div style={{height:'50px'}}>
      {props.alert &&
    <div class={`alert alert-${props.alert.type} fade show`} role="alert">
        {props.alert.message}
    </div>}
    </div>
    
  )
}

export default Alert
