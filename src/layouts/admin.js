import React from "react";
import { Link, useHistory } from "react-router-dom";

import { signOut } from "../auth";

const LayoutAdmin = ({ children }) => {
  const history = useHistory();
  return (
    <div>
      <nav className='bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <img
                  className='h-8 w-8'
                  src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
                  alt='Workflow'
                />
              </div>
              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline space-x-4'>
                  <Link
                    to='/admin/dashboard'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                    Dashboard
                  </Link>
                  <Link
                    to='/admin/products'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                    Product
                  </Link>
                  <Link
                    to='/admin/categories'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                    Category
                  </Link>
                  <Link
                    to='/admin/contacts'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                    Contact
                  </Link>
                </div>
              </div>
              <div className="float-right">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to='/'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                    home
                  </Link>
                  <a
                    className='  text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                    href=''
                    onClick={() =>
                      signOut(() => {
                        history.push("/");
                      })
                    }>
                    Sign Out
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className=' max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'></div>
      </main>
      <div className='grid grid-cols-[250px,1fr]'>
        <div>
          <ul>
            <li className='m-3 list-none'>
              <Link className=' no-underline' to='/admin/dashboard'>
                Dashbord
              </Link>
            </li>
            <li className='m-3 list-none'>
              <Link className=' no-underline' to='/admin/categories'>
                Danh sách Danh mục
              </Link>
            </li>
            <li className=' m-3 list-none'>
              <Link className=' no-underline' to='/admin/products'>
                {""}
                Danh sách Sản Phẩm
              </Link>
            </li>
            <li className=' m-3 list-none'>
              <Link className=' no-underline' to='/admin/contacts'>
                {""}
                Danh sách Contact
              </Link>
            </li>
            <li className=' m-3 list-none'>
              <Link className=' no-underline' to='/'>
                {""}
                Về Trang chủ
              </Link>
            </li>
            <li className=' m-3 list-none'>
              <a
                className=' no-underline'
                href=''
                onClick={() =>
                  signOut(() => {
                    history.push("/");
                  })
                }>
                Sign Out
              </a>
            </li>
          </ul>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
