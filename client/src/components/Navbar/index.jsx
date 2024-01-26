import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";

const MobileNav = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [user, setuser] = useState({});

  return (
    <div className="flex w-full items-center p-2 justify-between lg:hidden">
      <div className="w-28">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="logo"
          className="w-full h-full"
        />
      </div>
      <div className="flex items-center gap-3 relative">
        <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">
          Use App
        </button>
        {user?.fullname ? (
          <>
            <div
              onClick={() => setIsDropDownOpen((prev) => !prev)}
              className="border p-1 border-gray-300 text-zomato-400 w-12 h-12 rounded-full"
            >
              <img
                src="man.svg"
                alt=""
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {isDropDownOpen && (
              <div className="absolute py-3 -bottom-14 -right-4  z-20 flex flex-col gap-2">
                <button
                  type="button"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 me-4 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Sign Out
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <span
              onClick={() => setIsDropDownOpen((prev) => !prev)}
              className="border p-2 border-gray-300 text-zomato-400 rounded-full"
            >
              <FaUserAlt />
            </span>
            {isDropDownOpen && (
              <div className="absolute  py-3 -bottom-28 -right-5 z-20 flex flex-col gap-2">
                <button
                  type="button"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 me-5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Sign In
                </button>
                <button
                  type="button"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 me-5  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Sign Up
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const LargeNav = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [user, setuser] = useState({ fullname: "" });
  return (
    <>
      <div className="hidden lg:inline-block container py-5  px-20 mx-auto">
        <div className="gap-4 w-full  items-center justify-around flex">
          <div className="w-20">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt=""
            />
          </div>
          <div className="w-3/4 bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded ">
            <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
              <span className="text-zomato-400">
                <HiLocationMarker />
              </span>
              <input
                type="text"
                placeholder="Delhi NCR"
                className="w-full focus:outline-none"
              />
              <IoMdArrowDropdown />
            </div>
            <div className="flex w-full items-center gap-2">
              <RiSearch2Line />
              <input
                type="search"
                placeholder="Search for restaurant, cuisine or a dish"
                className="w-full focus:outline-none"
              />
            </div>
          </div>
          {user?.fullname ? (
            <div className="relative w-20">
              <div
                onClick={() => setIsDropDownOpen((prev) => !prev)}
                className="border border-gray-300 text-zomato-400 w-full h-20 rounded-full"
              >
                <img
                  src="man.svg"
                  alt=""
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {isDropDownOpen && (
                <div className="absolute  py-3 -bottom-16 -right-4  z-20 flex flex-col gap-2">
                  <button
                    type="button"
                    className=" w-full h-full focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 me-4 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className=" flex gap-4">
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 me-5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Login
              </button>
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 me-5  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <MobileNav />
      <LargeNav />
    </>
  );
};

export default Navbar;
