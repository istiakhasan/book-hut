/* eslint-disable @typescript-eslint/no-floating-promises */
import { signOut } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { auth } from "../../lib/firebase";
import { setUser } from "../../redux/features/user/userSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user,isLoading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    signOut(auth).then(() => dispatch(setUser(null)));
  };
  if(isLoading){
    return
  }
  const routeLink = (
    <>
      <li>
        <Link
          style={{ color: "white" }}
          to={"/all-books"}
          className="hover:text-white"
        >
          All Books
        </Link>
      </li>
      {!user?.email ? (
        <>
          <li>
            <Link to={"/login"} className="hover:text-white">
              Sign In
            </Link>
          </li>
          <li>
            <Link to={"/signup"} className="hover:text-white">
              Sign Up
            </Link>
          </li>
        </>
      ) : (
        <>
         <li>
            <Link style={{ color: "white" }} to={"/add-new"} className="hover:text-white">
              Add New
            </Link>
          </li>
         <li>
            <Link style={{ color: "white" }} to={"/add-new"} className="hover:text-white">
              Wish List
            </Link>
          </li>
          <li onClick={handleLogOut}>
            <a className="hover:text-white">Logout</a>
          </li>
         
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-[#27296d] text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm hover:text-white dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
          >
            {routeLink}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">Car Fair</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{routeLink}</ul>
      </div>
      <div className="navbar-end">{/* <a className="btn">Button</a> */}</div>
    </div>
  );
};

export default Navbar;
