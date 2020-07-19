import React from 'react'
import { navigate } from '@reach/router'
import { isLoggedIn } from '../services/auth'
const PrivateRoute = ({
  component: Component,
  location,
  ...rest
}) => {
  if (!isLoggedIn() && location.pathname !== `/app/login`) {
    navigate('/app/login')
    return null
  }
  return <Component {...rest} />
}
export default PrivateRoute
