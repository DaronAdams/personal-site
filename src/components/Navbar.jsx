import React from 'react'

const Navbar = () => {
  return (
    <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
    Content
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 w-80 bg-base-100 text-base-content">
      <li><a href='#a'>About Me</a></li>
      <li><a href='#a'>Projects</a></li>
      <li><a href='#a'>Resume</a></li>
      <li><a href='#a'>Item 4</a></li>
    </ul>
  
  </div>
</div>
  )
}

export default Navbar