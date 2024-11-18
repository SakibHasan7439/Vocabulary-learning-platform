import { Link, NavLink } from "react-router-dom";
import logo from "../assets/feature.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {
    const { user } = useContext(AuthContext);

  return (
    <div className="navbar bg-blue-950 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/learn"}>Start Learning</NavLink>
            <NavLink to={"/tutorial"}>Tutorials</NavLink>
            <NavLink to={"/aboutUs"}>About us</NavLink>
            {
                user && <NavLink to={"/profile"}>My Profile</NavLink>
            }
          </ul>
        </div>
        <img className="w-10 md:w-20" src={logo} alt="website logo" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal flex gap-6 text-lg px-1">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/learn"}>Start Learning</NavLink>
            <NavLink to={"/tutorial"}>Tutorials</NavLink>
            <NavLink to={"/aboutUs"}>About us</NavLink>
            {
                user && <NavLink to={"/profile"}>My Profile</NavLink>
            }
        </ul>
      </div>
      <div className="navbar-end text-lg">
        {
            user ? <Link >LogOut</Link>
            : <Link to={"/login"}>Login</Link>
        }
      </div>
    </div>
  );
};

export default Header;
