import { Link, NavLink } from "react-router-dom";
import logo from "../assets/feature.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import "./header.css"

const Header = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () =>{
        signOutUser()
        .then(()=>{
            toast.success("SignOut successful");
        })
        .catch((err)=>{
            toast.error(err.message);
        })
    }

  return (
    <div className=" bg-blue-950 text-white">
        {
          user && <div className="flex text-center font-semibold text-xl lg:text-2xl flex-col">
            <p>Welcome</p>
            <p>{user.displayName}</p>
          </div>
        }
      <div className="navbar">
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
            className="menu menu-sm z-10 text-black dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
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
            user ? <div className="flex items-center gap-3">
                <img className="w-12 h-12 rounded-full object-cover" src={user?.photoURL ? user.photoURL : ""} alt="image" />
                <Link onClick={handleSignOut} className="bg-white text-black px-4 py-2 rounded-md">LogOut</Link>
            </div>
            : <Link className="bg-white text-black px-4 py-2 rounded-md" to={"/login"}>Login</Link>
        }
      </div>
      </div>
    </div>
  );
};

export default Header;
