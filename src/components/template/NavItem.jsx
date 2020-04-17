import React from 'react'

export default props =>
  <React.Fragment>
        <i className={`fa fa-${props.icon}`}></i> {props.label}
  </React.Fragment>