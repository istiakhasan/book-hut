import { signOut } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { auth } from "../../lib/firebase";
import { setUser } from "../../redux/features/user/userSlice";

const Navbar = () => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    signOut(auth).then(() => {
      dispatch(setUser(null));
    });
  };
  const routeLink = (
    <>
      <li>
        <a>All Books</a>
      </li>
      {!user?.email ? (
        <>
          <li>
            <a>Sign In</a>
          </li>
          <li>
            <a>Sign Up</a>
          </li>
        </>
      ) : (
        <li onClick={handleLogOut}>
          <a>Logout</a>
        </li>
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
          >
            {routeLink}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Car Fair</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{routeLink}</ul>
      </div>
      <div className="navbar-end">{/* <a className="btn">Button</a> */}</div>
    </div>
  );
};

export default Navbar;
