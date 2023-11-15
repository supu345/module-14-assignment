import React, { useState } from "react";
import { FcHome } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };
  return (
    <div className=" fixed w-full z-[999]">
      <div>
        <div className=" flex flex-row justify-between p-1 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className=" flex flex-row items-center cursor-pointer">
            <NavLink to="/">
              <span>
                <FcHome
                  size={32}
                  className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                />
              </span>
            </NavLink>
            <NavLink to="/">
              <h1 className=" text-xl font-semibold p-3 text-blue-900 ">
                Design <span className="text-orange-500">Agency </span>
              </h1>
            </NavLink>
          </div>

          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-red-700" : "text-green-700"
              }
              to="/"
              spy={true}
              smooth={true}
              duration={500}
            >
              Home
            </NavLink>
            <NavLink
              to="project"
              spy={true}
              smooth={true}
              duration={500}
              className={({ isActive }) =>
                isActive ? "text-red-700" : "text-green-700"
              }
            >
              Project
            </NavLink>
            <NavLink
              to="service"
              spy={true}
              smooth={true}
              duration={500}
              className={({ isActive }) =>
                isActive ? "text-red-700" : "text-green-700"
              }
            >
              Service
            </NavLink>
            <NavLink
              to="team"
              spy={true}
              smooth={true}
              duration={500}
              className={({ isActive }) =>
                isActive ? "text-red-700" : "text-green-700"
              }
            >
              Team
            </NavLink>
            <NavLink
              to="testimonial"
              spy={true}
              smooth={true}
              duration={500}
              className={({ isActive }) =>
                isActive ? "text-red-700" : "text-green-700"
              }
            >
              Testimonial
            </NavLink>

            <div className=" flex justify-center lg:justify-start">
              <div className=" flex justify-center lg:justify-start ">
                <Button title="Login" />
              </div>
            </div>
            <div className=" flex justify-center lg:justify-start">
              <div className=" flex justify-center lg:justify-start ">
                <Button title="Register" />
              </div>
            </div>
          </nav>
          <div className="flex md:hidden" onClick={handleChange}>
            <div className=" p-2">
              {menu ? (
                <AiOutlineClose size={25} onClick={handleChange} />
              ) : (
                <AiOutlineMenuUnfold size={25} onClick={handleChange} />
              )}
            </div>
          </div>
        </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } md:hidden flex flex-col absolute bg-[#ffffff] left-0 top-20 font-medium text-2xl text-center pt-15 -mt-6   pb-14 gap-8 w-full h-fit transition-transform duration-300 `}
        >
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-red-700" : "text-green-700"
            }
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="project"
            spy={true}
            smooth={true}
            duration={500}
            className={({ isActive }) =>
              isActive ? "text-red-700" : "text-green-700"
            }
            onClick={closeMenu}
          >
            Project
          </NavLink>
          <NavLink
            to="service"
            spy={true}
            smooth={true}
            duration={500}
            className={({ isActive }) =>
              isActive ? "text-red-700" : "text-green-700"
            }
            onClick={closeMenu}
          >
            Service
          </NavLink>
          <NavLink
            to="team"
            spy={true}
            smooth={true}
            duration={500}
            className={({ isActive }) =>
              isActive ? "text-red-700" : "text-green-700"
            }
            onClick={closeMenu}
          >
            Team
          </NavLink>
          <NavLink
            to="testimonial"
            spy={true}
            smooth={true}
            duration={500}
            className={({ isActive }) =>
              isActive ? "text-red-700" : "text-green-700"
            }
            onClick={closeMenu}
          >
            Testimonial
          </NavLink>
          <div className=" flex justify-center lg:justify-start">
            <div className=" flex justify-center lg:justify-start ">
              <Button title="Login" onClick={closeMenu} />
            </div>
          </div>
          <div className=" flex justify-center lg:justify-start">
            <div className=" flex justify-center lg:justify-start ">
              <Button title="Register" onClick={closeMenu} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
