import LogoCupCake from "../../img/cupcake.png"
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full px-20 py-10" >
      <nav className="w-full flex justify-between" >
        <div>
          <Link to="/">
            <img src={ LogoCupCake } alt="logo cupcake" />
          </Link>
        </div>
        <div>
          <ul className="flex" >
            <li className="mx-10">
              <NavLink 
                style={({ isActive }) => {
                  return {
                    display: "block",
                    margin: "1rem 0",
                    color: isActive ? "red" : "",
                  };
                }} 
                to="/"
              >
                Inicio
              </NavLink>
            </li>
            <li className="mx-10">
              <NavLink 
                  style={({ isActive }) => {
                    return {
                      display: "block",
                      margin: "1rem 0",
                      color: isActive ? "red" : "",
                    };
                  }} 
                to="/cupcakes"
              >
                Cupcakes
              </NavLink>
            </li>
            <li className="mx-10">
              <NavLink 
                style={({ isActive }) => {
                  return {
                    display: "block",
                    margin: "1rem 0",
                    color: isActive ? "red" : "",
                  };
                }} 
                to="/nosotros"
              >
                Nosotros
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header;