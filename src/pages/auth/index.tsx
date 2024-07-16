import { Outlet } from 'react-router-dom'
import { AuthStyles } from './auth.styles'

export default function AuthLayout() {
  return (
    <AuthStyles>
      <aside className="aside" />
      <div className="content">
        <img src="/images/logo.svg" className="logo" alt="simform logo" width={686} height={126} />
        <div className="form">
          <Outlet />
        </div>
      </div>
    </AuthStyles>
  )
}
