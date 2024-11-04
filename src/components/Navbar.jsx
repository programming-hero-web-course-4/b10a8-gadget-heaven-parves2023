import { NavLink, Link, useLocation } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

  const isProductDetailsPage =
  location.pathname.startsWith("/product-details/") || location.pathname === '/Dashboard'|| location.pathname === '/Statistics';

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/Statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/Dashboard">Dashboard</NavLink>
      </li>
    </>
  );

  return (
    <div className="container mx-auto">
      <div
        className={`navbar ${
          isProductDetailsPage
            ? "bg-white text-black rounded-xl"
            : "bg-[#9538E2] text-white"
        } rounded-t-xl`}
      >
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
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end gap-4 mr-2">
          <div
            className={`rounded-full size-8 flex justify-center items-center border ${
              isProductDetailsPage
                ? "bg-gray-200 text-black"
                : "bg-white text-gray-950"
            }`}
          >
            <Link to="/Dashboard">
              <BsCart3 />
            </Link>
          </div>
          <div
            className={`rounded-full size-8 flex justify-center items-center border ${
              isProductDetailsPage
                ? "bg-gray-200 text-black"
                : "bg-white text-gray-950"
            }`}
          >
            <Link to="/Dashboard">
              <FaRegHeart />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
