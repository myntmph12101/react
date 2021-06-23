import React, { useState } from "react";
import { signIn, authenticate, isAuthenticate } from "../auth/index";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");
  const [redirectToRef, setRedrirectToRef] = useState(false)
  const { user } = isAuthenticate();


  const onSubmit = (data) => {
    signIn(data)
    .then((dataUser) => {
      if (dataUser.error) {
        setError(dataUser.error);
      } else {
        setError("");
        authenticate(dataUser, () => {
          setRedrirectToRef(true)
        });
      }
    });
  };

  const showError = () => {
    return (
      <div
        className=' alert alert-danger'
        style={{ display: error ? "block" : "none" }}>
        {error}
      </div>
    );
  };

  const redirectUser = () => {
    if (redirectToRef) {
      if (user.role == 1) {
        return <Redirect to="/admin/dashboard" />
      }
      else {
        return <Redirect to="/user/dashboard"/>
      }
    }
  }

  const signInForm = () => {
    return (
      <div className=' flex items-center justify-center bg-gray-50 py-3   '>
        <div className='max-w-md  '>
          <div>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
              Sign In to your account
            </h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>
                Email
              </label>
              <input
                type='email'
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                id='email'
                {...register("email")}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='pass' className='form-label'>
                Password
              </label>
              <input
                type='password'
                className='form-control'
                id='password'
                {...register("password")}
              />
            </div>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                <svg
                  className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'>
                  <path
                    fillRule='evenodd'
                    d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </span>
              Sign In
            </button>
            <Link to='/signup'>Đăng kí</Link>
          </form>
        </div>
      </div>
    );
  };
  return (
    <div>
      {redirectUser()}
      {showError()}
      {signInForm()}
    </div>
  );
};

export default SignIn;
