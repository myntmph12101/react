import React from "react";
import { Link } from "react-router-dom";
const BlogPage = () => {
  return (
    <div className=''>
      <div className='my - 3'>
        <img
          className='w-full'
          src='https://es.aveeno.com/sites/aveeno_us_2/files/styles/jjbos_adaptive_images_generic_large-desktop_slides/public/slide-images/senstive_skin_solution_topic_hero_2018.jpg?timestamp=1544098211'
          alt=''
        />
      </div>
      <div className=''>
        <div className='flex m-4'>
          <div className='flex-1 py-5'>
            <div className='py-3 mx-6'>
              <h2 className='text-left font-sans text-yellow-900 text-5xl '>
                {" "}
                HERBAL BODY LOTION
              </h2>
              <p className='leading-7 text-xl block text-left py-3 text-yellow-800'>
                All are Herbal Cosmetics and it is formulated, using various
                permissible herbal cosmetic ingredients which are 100% safe &
                pure Herbal products.it is formulated
              </p>
              <Link
                to='/blogs/6074fb60833a95079c934f43'
                className=' border-1  btn btn-outline-danger'>
                Lean More
              </Link>
            </div>
          </div>
          <div className=' flex-1'>
            <img
              className=' img-fluid'
              src='https://www.aveeno.com/sites/aveeno_us_2/files/styles/jjbos_adaptive_images_generic-mobile/public/taco-images/homepage_wink_talent2_0.jpg?timestamp=1541406594'
              alt=''
            />
          </div>
        </div>
        <div className=' flex m-4'>
          <div className='flex-1'>
            <img
              className='img-fluid'
              src='https://www.aveeno.com/sites/aveeno_us_2/files/styles/jjbos_adaptive_images_generic-large_desktop/public/taco-images/microbiome-taco.png?timestamp=1582814097'
              alt=''
            />
          </div>
          <div className=' flex-1 py-5'>
            <div className='py-3 mx-6'>
              <h2 className='text-left font-sans text-yellow-900 text-5xl '>
                {" "}
                ORGANIC SERIUM
              </h2>
              <p className='leading-7 text-xl block text-left py-3 text-yellow-800'>
                All are Herbal Cosmetics and it is formulated, using various
                permissible herbal cosmetic ingredients which are 100% safe &
                pure Herbal products.it is formulated
              </p>
              <Link
                to='/blogs/6074fba4833a95079c934f44'
                className='border-1  btn btn-outline-danger'>
                Lean More
              </Link>
            </div>
          </div>
        </div>
        <div className=' flex m-4'>
          <div className='flex-1 py - 5'>
            <div className='py-3 mx-6'>
              <h2 className='text-left font-sans text-yellow-900 text-5xl '>
                {" "}
                HERBAL BODY LOTION
              </h2>
              <p className='leading-7 text-xl block text-left py-3 text-yellow-800'>
                All are Herbal Cosmetics and it is formulated, using various
                permissible herbal cosmetic ingredients which are 100% safe &
                pure Herbal products.it is formulated
              </p>
              <Link
                to='/blogs/6074fbcc833a95079c934f45'
                className='border-1  btn btn-outline-danger'>
                Lean More
              </Link>
            </div>
          </div>
          <div className=' flex-1'>
            <img
              className=' img-fluid'
              src='https://www.aveeno.com/sites/aveeno_us_2/files/styles/jjbos_adaptive_images_generic-large_desktop/public/taco-images/sunscreen_which_is_better.jpg?timestamp=1566403190'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
