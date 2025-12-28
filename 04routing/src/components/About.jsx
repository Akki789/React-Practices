import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function About() {
  return (
    <div>
        <h2>About Page</h2>
        <nav>
            <Link to="team">Team</Link>
            <Link to="company">Company</Link>
        </nav>
        <br />

        <Outlet />
    </div>
  )
}
