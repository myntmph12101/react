import React, { useEffect, useState } from "react";
import { NavLink, Link, useHistory, useLocation } from "react-router-dom";
import { isAuthenticate, signOut } from "../auth";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Nav = ({ products }) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const [isLogged, setIsLogger] = useState(false);
  const [search, setSearch] = useState("")
  const { user } = isAuthenticate();
  useEffect(() => {
    isAuthenticate() && setIsLogger(true);
  }, [pathname, isLogged]);
  return (
    <div className=' bg-red-100 my-2 py-4 px-4'>
      <div className='flex'>
        <div className='flex-1'>
          <img
            src='https://es.aveeno.com/sites/aveeno_us_2/files/avn_logo_cristal_2017.png'
            className='w-[212px] '
            alt=''
          />
        </div>
        <div className=' flex-1 my-3'>
          <form>
            <input className=' w-[320px] h-[35px] rounded border border-gray-200 px-2 '
              placeholder="tìm kiếm..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className='h-[35px] bg-white border border-gray-200'>
              <i className='fas fa-search'></i>
            </button>
            {products.filter(val => {
              if (search == "") {
                return ""
              } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
                return val
              }
            }).map(item => {
              return (
                <div className="flex my-2 mx-4 ">
                  <a className="no-underline text-gray-900 " href={`/products/${item._id}`}>
                    <div className="flex justify-between">
                      <div className="py-2">{item.name}</div>
                      <div className="px-4">
                        <img src={item.photo} className="img-fluid w-[50px] h-[40px]"  />
                      </div>
                    </div>
                  </a>
                </div>
              )
            })}
          </form>

        </div>
        <div className=' flex-1 my-2 '>
          <Menu as='div' className=' relative inline-block text-left my-2'>
            {({ open }) => (
              <>
                <div>
                  <Menu.Button className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'>
                    ACCOUT
                    <ChevronDownIcon
                      className='-mr-1 ml-2 h-5 w-5'
                      aria-hidden='true'
                    />
                  </Menu.Button>
                </div>

                <Transition
                  show={open}
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'>
                  <Menu.Items
                    static
                    className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    <div className='py-1'>
                      {!isLogged && (
                        <>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to='/signup'
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}>
                                Đăng kí
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to='/signin'
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}>
                                Đăng nhập
                              </Link>
                            )}
                          </Menu.Item>
                        </>
                      )}
                      {isLogged && (
                        <>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                                href=''
                                onClick={() =>
                                  signOut(() => {
                                    history.push("/");
                                  })
                                }>
                                Sign Out
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to={user.role == 1 ? '/admin/dashboard' : '/user/dashboard'}
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}>
                                Dashboard
                              </Link>
                            )}
                          </Menu.Item>
                        </>
                      )}
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>

          <svg
            xmlns='http://www.w3.org/2000/svg'
            src=''
            className=' h-8 w-8 float-right'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
            />
          </svg>
        </div>
      </div>
      <div>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
            <li className='mr-5 list-none hover:text-gray-900'>
              <NavLink
                to='/'
                className=' px-4 no-underline text-black'
                activeclassName='font-bold'>
                Home page
              </NavLink>
            </li>
            <li className='mr-5 list-none hover:text-gray-900'>
              <NavLink
                to='/products'
                className=' px-4 no-underline text-black'
                activeclassName='font-bold'>
                Product Page
              </NavLink>
            </li>
            <li className='mr-5 list-none hover:text-gray-900'>
              <NavLink
                to='/about'
                className='px-4 no-underline text-black'
                activeclassName='font-bold'>
                About Page
              </NavLink>
            </li>
            <li className='mr-5 list-none hover:text-gray-900'>
              <NavLink
                to='/blogs'
                className='px-4 no-underline text-black'
                activeclassName='font-bold'>
                Blogs
              </NavLink>
            </li>
            <li className='mr-5 list-none hover:text-gray-900'>
              <NavLink
                to='/contacts'
                className='px-4 no-underline text-black'
                activeclassName='font-bold'>
                {" "}
                Contact Us
              </NavLink>
            </li>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Nav;
