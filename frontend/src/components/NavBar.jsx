import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        {/* Utiliza el componente Link para enlazar a las rutas internas */}
        <li>
          <Link to='/'>Login</Link>
        </li>
        <li>
          <Link to='/Services'>Services</Link>
        </li>
        <li>
          <Link to='/Contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
