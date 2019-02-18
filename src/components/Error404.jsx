import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


function Error404(props){
  return(
    <div>
      <h2>This page you are looking for "{props.location.pathname}" is not available</h2>
      <h3>Would you like to return <Link to='/'>Home</Link></h3>
    </div>
  )
}

Error404.propTypes={
  location: PropTypes.object
}

export default Error404