import { NavLink, Outlet } from "react-router-dom";

export default function Root() {
  return(
    <div>
      <div>
        <Outlet/>
      </div>
      <div>{/*不用整个页面刷新 */}
        <NavLink to="/">talk</NavLink>{/*NavLink给className添加类名,就算不传递函数也会自动添加 */}
        -
        <NavLink to="/discover">discover</NavLink>
        -
        <NavLink to="/me">me</NavLink>
      </div>
    </div>
  )
}