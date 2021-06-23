import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
const ContactPage = ({ addContact }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onHandleSubmit = (data) => {
    addContact(data);
    alert("Bạn đã gửi thành công");
  };
  return (
    <div className=''>
      <div className=' container m-6'>
        <h2> Contact Us</h2>
        <div className=' m-5 row'>
          <div className=' col-6'>
            <div className=' flex'>
              <div className=' w-full h-40 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
                <iframe
                  width='100%'
                  height='100%'
                  className=' absolute inset-0'
                  frameBorder={0}
                  title='map'
                  marginHeight={0}
                  marginWidth={0}
                  scrolling='no'
                  src='https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed'
                  style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
                />
              </div>
            </div>
            <div className=' flex my-2'>
              <div className='flex-1 px-2'>
                <h4> Ha Noi</h4>
                <p className=' text-gray-500'>Don Nguyen 3 Ham Nghi My Dinh Ha Noi</p>
                <p className='text-gray-500'>Email: myntmph12101@fpt.edu.vn</p>
                <p className='text-gray-500'>Phone: 0345 666 666</p>
              </div>
              <div className=' flex-1 px-3 '>
                <h4 className=''> Thai Binh</h4>
                <p className=' text-gray-500'>
                  Thai Trung Le Loi Kien Xuong Thai Binh
                </p>
                <p className='text-gray-500'>Email: myntmph12101@fpt.edu.vn</p>
                <p className='text-gray-500'>Phone: 0345 666 666</p>
              </div>
            </div>
          </div>
          <div className=' col-6'>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
              <textarea
                cols='60'
                rows='10'
                placeholder='Message'
                id='message'
                {...register("message", { required: true })}></textarea>
              <br />
              {errors.message && (
                <span className=' text-danger mt-2'>
                  Nội dung không được bỏ trống !!!
                </span>
              )}

              <div className='flex'>
                <div className='flex-1'>
                  <input
                    type='text'
                    placeholder='Your Name'
                    id='name'
                    {...register("name", { required: true })}
                  />
                  <br />
                  {errors.name && (
                    <span className=' text-danger mt-2'>
                      Tên không được bỏ trống !!!
                    </span>
                  )}
                </div>
                <div className=' flex-1'>
                  <input
                    type='email'
                    placeholder='Your Email'
                    id='email'
                    {...register("email", { required: true })}
                  />
                  <br />
                  {errors.email && (
                    <span className=' text-danger mt-2'>
                      Email không được bỏ trống !!!
                    </span>
                  )}
                </div>
              </div>
              <button type='submit' className='btn btn-outline-dark mt-2'>
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
