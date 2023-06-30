import type { ComponentType } from 'react'
import { Navigate } from 'react-router-dom'
import { getToken } from '@/utils/token'

const withAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
  function Auth(props: P) {
    const token = getToken()
    if (!token) {
      return <Navigate to="/login" />
    }
    return <WrappedComponent {...props} />
  }
  return Auth
}

export default withAuth
