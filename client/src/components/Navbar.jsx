import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
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
import { NavLink } from "react-router-dom";
import { toggleTheme } from "../store/themeSlice/themeSlice";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Home", to: "/" },
  { name: "Podcast", to: "/podcast" },
  { name: "Blog", to: "/blog/all" },
];
const userNavigation = [
  { name: "Dashboard", to: "/dashboard" },
  { name: "Your Profile", to: "/profile" },
  { name: "Sign out", t0: "/sign-out" },
];

export default function Navbar() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
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
                  <Menu as="div" className="relative ml-3">
                    <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm   ring-2 ring-offset-2 ring-offset-gray-800">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={user.imageUrl}
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
                      <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.to}
                            className={
                              "block text-gray-900 hover:bg-indigo-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                            }
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </MenuItems>
                    </Transition>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-indigo-400 hover:text-white ">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={
                    "block text-gray-900 hover:bg-indigo-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  }
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user.imageUrl}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-black">
                    {user.name}
                  </div>
                  <div className="text-sm font-medium leading-none text-black">
                    {user.email}
                  </div>
                </div>
                <button
                  type="button"
                  className="relative ml-auto flex-shrink-0 rounded-full  p-1  text-gray-900 dark:bg-gray-900 ring-2 dark:text-white ring-gray-900 dark:ring-white dark:ring-offset-gray-100 ring-offset-gray-800"
                  onClick={() => dispatch(toggleTheme(!darkMode))}
                >
                  {darkMode ? (
                    <MoonIcon className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <SunIcon className="h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
              <div className="mt-3 space-y-1 px-2">
                {userNavigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className={
                      "block text-gray-900 hover:bg-indigo-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    }
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
