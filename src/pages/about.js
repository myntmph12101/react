import React from "react";
import CategoriesList from "../components/CategoriesList";
import { Link } from "react-router-dom";
import BlogPage from "./blog";
const AboutPage = (props) => {
  return (
    <div className='container'>
      <div className='flex'>
        <div className='flex-1'>
          <div className='m-4'>
            <img
              src='http://html.physcode.com/uray/imager/blog/item-blog2.jpg'
              className='w-[780px] mx-8 '
              alt=''
            />
            <div className='m-4'>
              <h3> Temporibus autem quib</h3>
              <p className='px-2'>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
            </div>
            <div className='m-4 px-5'>
              <p className='font-mono text-gray-400'>
                " At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident."
              </p>
            </div>
          </div>
          <div className='m-4'>
            <div className='flex'>
              <div className='flex-1'>
                <img
                  src='http://html.physcode.com/uray/imager/blog/blog-single-item.jpg'
                  alt=''
                />
              </div>
              <div className='flex-1 font-serif '>
                <h4>Nam libero tempore cum soluta</h4>
                <p className=' text-gray-500'>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire. That they
                  cannot foresee the pain. These cases are perfectly. Trouble
                  that are bound to ensue; and equal blame belongs to those who
                  fail in their duty through weakness.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-1'>
          <div className='my-2'>
            <h3 className='mx-3 my-3'>About Us</h3>
            <div className='border flex-initial text-center h-[300px] w-[270px]'>
              <div className='mx-3.5 my-3'>
                <img
                  src='http://html.physcode.com/uray/imager/blog/author-blog.jpg'
                  alt=''
                />
                <h3 className=' font-serif my-2'>Denise Murray</h3>
                <span className='font-sans my-3'>denise_83@example.com</span>
                <p className='font-sans my-3'>
                  Sed ut perspiciatis unde omnis iste natus error sit volupta.
                </p>
              </div>
            </div>
          </div>
          <div className='my-4'>
            <h3 className='py-3'>Categories</h3>

            <CategoriesList {...props} />
          </div>
          <div className='my-4'>
            <h3> Latest Posts</h3>
            <div className='my-3'>
              <div className='grid grid-cols-3 my-4'>
                <div className='my-3'>
                  <img
                    className='w-28'
                    src='https://www.aveeno.com/sites/aveeno_us_2/files/styles/jjbos_adaptive_images_generic-large_desktop/public/taco-images/body_landing_talent_seated_holding_legs_looking_right_2.jpg?timestamp=1541066042'
                    alt=''
                  />
                </div>
                <div className='py-4 px-4'>
                  <div className='text-sm'>
                    <Link
                      to='/blogs/6074fb60833a95079c934f43'
                      className='font-sans text-yellow-900'>
                      HERBAL BODY LOTION
                    </Link>
                  </div>
                </div>
                <br />
                <div className='my-3'>
                  <img
                    className='w-28'
                    src='https://www.aveeno.com/sites/aveeno_us_2/files/styles/jjbos_adaptive_images_generic-large_desktop/public/taco-images/body_landing_talent_with_bun_looking_left.jpg?timestamp=1544089546'
                    alt=''
                  />
                </div>
                <div className='py-4 px-4 '>
                  <div className='text-sm'>
                    <Link
                      to='/blogs/6074fba4833a95079c934f44'
                      className='font-sans text-yellow-900'>
                      ORGANIC SERIUM
                    </Link>
                  </div>
                </div>
                <br />
                <div className='my-3'>
                  <img
                    className='w-28'
                    src='https://es.aveeno.com/sites/aveeno_us_2/files/styles/jjbos_adaptive_images_generic-large_desktop/public/taco-images/face_landing_talent_facing_camera_hand_to_face.jpg?timestamp=1541076347'
                    alt=''
                  />
                </div>
                <div className='py-4 px-4 '>
                  <div className='text-sm'>
                    <Link
                      to='/blogs/6074fbcc833a95079c934f45'
                      className='font-sans text-yellow-900  '>
                      HERBAL BODY LOTION
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
{
  /* <h4>About</h4>
            <div className="gr">
                <div className="flex-initial">
                    <div className="">
                        <img src="http://html.physcode.com/uray/imager/blog/item-blog2.jpg" className="w-[780px] mx-8 " alt="" />
                    </div>

                </div>
                <div className=" border flex-initial text-center h-[300px] w-[270px]">
                    <div className="mx-3.5 my-3">
                        <img src="http://html.physcode.com/uray/imager/blog/author-blog.jpg" alt="" />
                        <h3 className="font-serif mt-3">Denise Murray</h3>
                        <span className="font-sans">denise_83@example.com</span>
                        <p className="font-sans">Sed ut perspiciatis unde omnis iste natus error sit volupta.</p>
                    </div>

                </div>
            </div>
            <div className="">
                <div className="m-4">
                    <h3>Temporibus autem quib</h3>
                    <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                </div>
            </div> */
}
