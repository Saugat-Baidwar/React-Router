import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" flex justify-center  h-[70px] bg-[#100F44]">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-pink-800 px-4   " : "text-white  px-4"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive ? "text-red-500 px-4 " : "text-white px-4"
        }
      >
        Services
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive ? "text-red-500 px-4 " : "text-white px-4"
        }
      >
        Projects
      </NavLink>
      <NavLink
        to="/contactus"
        className={({ isActive }) =>
          isActive ? "text-red-500 px-4 " : "text-white px-4"
        }
      >
        Contact Us
      </NavLink>
      <NavLink
        to="/Aboutus"
        className={({ isActive }) =>
          isActive ? "text-red-500 px-4 " : "text-white px-4"
        }
      >
        About Us
      </NavLink>
    </nav>
  );
};

export default Navbar;
