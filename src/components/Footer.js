import React from "react";
const Footer = () => {
  return (
    <div className=''>
      <div className=''></div>
      <div className='flex bg-red-50'>
        <div className='flex-1 mx-3 my-2'>
          <img
            src='https://es.aveeno.com/sites/aveeno_us_2/files/avn_logo_cristal_2017.png'
            className='w-[100px] m-3'
            alt=''
          />
          <br />
          <div className=''>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 mx-3'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={3}
                d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
              />
            </svg>
            <span>1203 Town Center </span>
            <br />
            <span className='mx-5'>Drive FL 33458 USA</span>
          </div>
          <div className='my-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 mx-3'
              viewBox='0 0 20 20'
              fill='currentColor'>
              <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
            </svg>
            <span>+1800 1234 5678</span>
          </div>
          <div className='my-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 mx-3'
              viewBox='0 0 20 20'
              fill='currentColor'>
              <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
              <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
            </svg>
            <span>Myntmph12101@Fpt.edu.vn</span>
          </div>
        </div>
        <div className='flex-1 mx-3 my-2'>
          <h3 className='text-red-400 m-2 '>Help</h3>
          <ul className='p-2'>
            <li className='list-none py-1'>
              <a href='' className=' no-underline text-black'>
                {" "}
                Search
              </a>
            </li>
            <li className='list-none py-1'>
              {" "}
              <a href='' className=' no-underline text-black'>
                {" "}
                Help
              </a>
            </li>
            <li className='list-none py-1'>
              <a href='' className=' no-underline text-black'>
                {" "}
                Information
              </a>
            </li>
            <li className='list-none py-1'>
              <a href='' className=' no-underline text-black'>
                {" "}
                Primacy Polyci
              </a>
            </li>
          </ul>
        </div>
        <div className='flex-1 mx-3 my-2'>
          <h3 className='text-red-400 m-2'>Support</h3>
          <ul className='p-2 '>
            <li className='list-none py-1'>
              <a href='' className=' no-underline text-black'>
                {" "}
                Contact Us
              </a>
            </li>
            <li className='list-none py-1'>
              {" "}
              <a href='' className='no-underline text-black'>
                {" "}
                About Us
              </a>
            </li>
            <li className='list-none py-1'>
              <a href='' className='no-underline text-black'>
                {" "}
                Careers
              </a>
            </li>
            <li className='list-none py-1'>
              <a href='' className='no-underline text-black'>
                {" "}
                Refund & Return
              </a>
            </li>
          </ul>
        </div>
        <div className='flex-1 mx-3 my-2'>
          <h3 className='text-red-400 m-2'>Information</h3>
          <ul className='p-2 '>
            <li className='list-none py-1'>
              <a href='' className=' no-underline text-black'>
                {" "}
                Search Terms
              </a>
            </li>
            <li className='list-none py-1'>
              {" "}
              <a href='' className=' no-underline text-black'>
                {" "}
                Advanced Search
              </a>
            </li>
            <li className='list-none py-1'>
              <a href='' className=' no-underline text-black'>
                {" "}
                Help & Faq's
              </a>
            </li>
            <li className='list-none py-1'>
              <a href='' className=' no-underline text-black'>
                {" "}
                Store & Location
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
