import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItems,
  Transition,
} from "@headlessui/react";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigation } from "react-router-dom";
import { toggleTheme } from "../store/themeSlice/themeSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import usebaseUrl from "../hooks/usebaseUrl";
import { removeUserInfo, setUserInfo } from "../store/userSlice/userSlice";
import { toast } from "react-toastify";
import Profile from "../pages/profile";

export default function Navbar() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const userInfo = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigation();

  const [profileModal, toggleProfileModal] = useState(false);

  // console.log("userInfoo", userInfo)
  const logoutHandler = async () => {
    const response = await axios.request({
      method: "GET",
      url: `${usebaseUrl()}/api/auth/logout`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("validationToken")}`,
      },
    });
    localStorage.removeItem("validationToken");
    dispatch(removeUserInfo());
    toast.success(response.data.message);
    navigate("/");
  };

  const navigation = [
    { name: "Home", to: "/" },
    { name: "Podcast", to: "/podcast" },
    { name: "Blog", to: "/blog/all" },
  ];


  useEffect(() => {
    const getUserData = async () => {
      const response = await axios.request({
        method: "GET",
        url: `${usebaseUrl()}/api/user/get-user-data`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("validationToken")}`,
        },
      });
      if (response.data.success) {
        dispatch(setUserInfo(response.data.data));
      }
    };
    localStorage.getItem("validationToken") && getUserData();
  }, []);

  return (
    <Disclosure as="nav" className="dark:bg-slate-900 bg-white sticky w-full">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 lg:px-8 ">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="">
                  <img
                    className="h-8 w-8"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden md:block ml-10 items-baseline space-x-4">
                  {/* <div className=""> */}
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.to}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-indigo-800 text-white rounded-md px-3 py-2 text-sm font-medium"
                          : "text-gray-900 dark:text-white hover:bg-indigo-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      }
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                  {/* </div> */}
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="rounded-full p-1 text-gray-900 dark:bg-gray-900 dark:text-white ring-2 ring-gray-900  dark:ring-white dark:ring-offset-gray-100 ring-offset-gray-800"
                    onClick={() => dispatch(toggleTheme(!darkMode))}
                  >
                    {darkMode ? (
                      <MoonIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <SunIcon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </button>

                  {/* Profile dropdown */}
                  {userInfo._id ? (
                    <>
                      <Menu as="div" className="relative ml-3">
                        <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm   ring-2 ring-offset-2 ring-offset-gray-800">
                          <img
                            className="h-8 w-8 rounded-full"
                            src={
                              userInfo.imageUrl ||
                              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSheI9UkWllIpSNbs2UdE18KLLswgDON9qzXg&s"
                            }
                            alt=""
                          />
                        </MenuButton>

                        <Transition
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <MenuItems className="absolute right-0 z-30 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <NavLink
                                key="Dashboard"
                                to={"/dashboard"}
                                className={
                                  "block text-gray-900 w-full hover:bg-indigo-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                }
                              >
                                Dashboard
                              </NavLink>
                              <button
                                key="Profile"
                                className={
                                  "block text-gray-900 w-full text-left hover:bg-indigo-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                }
                                onClick={() => toggleProfileModal(true)}
                              >
                                Profile
                              </button>
                            <button
                              className={
                                "block text-gray-900 w-full text-left hover:bg-indigo-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                              }
                              onClick={logoutHandler}
                            >
                              Logout
                            </button>

                          </MenuItems>
                        </Transition>
                      </Menu>
                    </>
                  ) : (
                    <NavLink
                      className={
                        "bg-indigo-800 mx-3 text-white rounded-md px-3 py-2 text-sm font-medium"
                      }
                      to ="/login"
                    >
                      Login
                    </NavLink>
                  )}
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 dark:text-gray-100 hover:bg-indigo-400 hover:text-white ">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden  text-right">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={
                    "block text-gray-900 dark:text-white hover:bg-indigo-400 dark:hover:bg-indigo-100 hover:text-white dark:hover:text-gray-900 rounded-md px-3 py-2 text-sm font-medium"
                  }
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
            {userInfo._id ? (
                    <>
                      <Menu as="div" className="relative mr-3">
                        <MenuButton className="relative max-w-xs items-center rounded-full bg-gray-800 text-sm   ring-2 ring-offset-2 ring-offset-gray-800">
                          <img
                            className="h-8 w-8 rounded-full"
                            src={
                              userInfo.imageUrl ||
                              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSheI9UkWllIpSNbs2UdE18KLLswgDON9qzXg&s"
                            }
                            alt=""
                          />
                        </MenuButton>

                        <Transition
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <MenuItems className="absolute right-0 z-30 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <NavLink
                                key="Dashboard"
                                to={"/dashboard"}
                                className={
                                  "block text-gray-900 w-full hover:bg-indigo-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                }
                              >
                                Dashboard
                              </NavLink>
                              <button
                                key="Profile"
                                className={
                                  "block text-gray-900 w-full text-right hover:bg-indigo-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                }
                                onClick={() => toggleProfileModal(true)}
                              >
                                Profile
                              </button>
                            <button
                              className={
                                "block text-gray-900 w-full text-right hover:bg-indigo-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                              }
                              onClick={logoutHandler}
                            >
                              Logout
                            </button>
                          </MenuItems>
                        </Transition>
                      </Menu>
                    </>
                  ) : (
                    <NavLink
                      className={
                        "bg-indigo-800 mx-3 text-white rounded-md px-3 py-2 text-sm font-medium"
                      }
                      to ="/login"
                    >
                      Login
                    </NavLink>
                  )}

          </DisclosurePanel>

          < Profile profileModal={profileModal} toggleProfileModal={toggleProfileModal} />
        </>
      )}
    </Disclosure>
  );
}
