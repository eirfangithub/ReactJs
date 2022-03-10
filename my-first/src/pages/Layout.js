import { Outlet, Link } from "react-router-dom";


const myComponentStyle = {
  color: 'blue',
  lineHeight: 10,
  padding: '1.5em',
}

/* const ul = {
  list-style-type: none,
  margin: 0,
  padding: 0,
  overflow: hidden,
  background-color: #333333,
}

const li = {
  float: left,
}

const li a = {
  display: block;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
}

const li a:hover {
  background-color: #111111;
}
 */



const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/info">Info</Link>
          </li>
          <li>
            <Link to="/edu">Edu</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;