import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">.  </a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 ">
      <li><a href='#aboutme' className='hover:bg-secondary'>About Me</a></li>
      <li><a className='hover:bg-secondary'>Projects</a></li>
      <li><a className='hover:bg-secondary'>Blog</a></li>
      <li><a className='hover:bg-secondary'>Contact Me</a></li>
      <a className="btn btn-outline btn-secondary">Resume</a>
    </ul>
  </div>
</div>
  )
}

export default Navbar
