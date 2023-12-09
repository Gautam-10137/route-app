import {Outlet,Link} from 'react-router-dom'

function Layout() {
  return (
    <> 
    <nav >
      <div className='header'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/about">About_us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>

      </ul>
      </div>
    </nav>  
    <Outlet />
  </>
  )
}
export default Layout
