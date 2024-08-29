import { Link, NavLink } from "react-router-dom";


const Navber = () => {
    const Navlinks=<>
    <li><NavLink to={"/"}>Home</NavLink></li>
    <li><NavLink to={"/services"}>Services</NavLink></li>
    <li><NavLink to={"/ourteam"}>Our Team</NavLink></li>
    <li><NavLink to={"/contuctus"}>Contuct Us</NavLink></li>
    <li><NavLink to={"/reviews"}>Reviews</NavLink></li>
   
    
    </>
    return (
        <div className="navbar bg-emerald-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu z-10 menu-sm dropdown-content bg-base-100 rounded-box  mt-3 w-80 p-2 shadow">
       {Navlinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><span className="text-5xl font-bold text-indigo-500">V</span>iralExpert</a>
  </div>
  <div className="navbar-center hidden space-x-2 lg:flex">
    <ul className="menu font-medium gap-1 menu-horizontal  px-1">
      {Navlinks}
    </ul>
  </div>
  <div className="navbar-end">
  <Link to={"/"}><button className="btn bg-green-600 text-white font-medium rounded-xl px-5 ">WhatsApp</button></Link>
  </div>
</div>
    );
};

export default Navber;