import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
        <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center shadow-2xl">
    <div class="bg-neutral w-full h-full">
      <Outlet />
    </div>
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 w-80 bg-base-100 text-base-content">
      <li><a href='/'></a></li>
      <li><a href='/about-me'>About Me</a></li>
      <li><a href='/projects'>Projects</a></li> 
      <li><a href='/resume'>Resume</a></li>
      <li><a href='/blog'>Blog</a></li>
    </ul>
  
  </div>
</div>
    </>
  );
}