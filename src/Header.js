import React from 'react'
import Users, { user } from './Users'

function Header() {
  return (
    <div className="header">
      <div className="menu"> Menu </div>
      <div className="title">
        <h1>My Library</h1>
        <h3>Below I present my list of read books.</h3>
      </div>
      <div className="user">
        <Users></Users>
      </div>
    </div>
  )
}

export default Header
