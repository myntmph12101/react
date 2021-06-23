import React from "react";
import BannerSlider from "../components/BannerSlider";
import ProductsList from "../components/ProductsList";
import CardProduct from "../components/CardProduct";
import { Link } from "react-router-dom";
const HomePage = (props) => {
  return (
    <div className=''>
      <BannerSlider />
      {/* <CardProduct /> */}





      <div className='flex my-5'>
        <div className='flex-1 py-5'>
          <div className='py-3 mx-6'>
            <h2 className='text-left font-sans text-yellow-900 text-5xl'>
              {" "}
              HERBAL BODY LOTION
            </h2>
            <p className='leading-7 text-xl block text-left py-3 text-yellow-800'>
              All are Herbal Cosmetics and it is formulated, using various
              permissible herbal cosmetic ingredients which are 100% safe & pure
              Herbal products.it is formulated
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
            src='https://www.aveeno.com/sites/aveeno_us_2/files/styles/jjbos_adaptive_images_generic-large_desktop/public/01-sensitiveskin.jpg?timestamp=1605117241'
            alt=''
          />
        </div>
      </div>
      <div className='flex my-5'>
        <div className='flex-1'>
          <img
            className='img-fluid'
            src='https://www.aveeno.com/sites/aveeno_us_2/files/styles/jjbos_adaptive_images_generic-large_desktop/public/taco-images/rt4082_face_anais_skin_bliss_026_v2_1.jpg?timestamp=1567085097'
            alt=''
          />
        </div>
        <div className='flex-1 py-5'>
          <div className='py-3 mx-6'>
            <h2 className='text-left font-sans text-yellow-900 text-5xl '>
              ORGANIC SERIUM
            </h2>
            <p className='leading-7 text-xl block text-left py-3 text-yellow-800'>
              All are Herbal Cosmetics and it is formulated, using various
              permissible herbal cosmetic ingredients which are 100% safe & pure
              Herbal products.it is formulated
            </p>
            <Link
              to='/blogs/6074fbcc833a95079c934f45'
              className='border-1  btn btn-outline-danger'>
              Lean More
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className='section bg-white-200 my-3'>
          <div className='section-title text-3xl text-center IBM Plex Sans'>
            SẢN PHẨM NỔI BẬT
          </div>
          <div className='flex  flex-wrap my-4'>
            {props.products.map((item, index) => {
              return (
                <div className=' w-1/4 p-4 '>
                  <Link
                    to={`/products/${item._id}`}
                    className='block relative h-48 rounded overflow-hidden'>
                    <img
                      className='object-cover object-center w-full h-full block'
                      src={item.photo}
                    />
                  </Link>
                  <div className=''>
                    <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          {" "}
                          {props.categories
                            .filter((category) => category._id == item.category)
                            .map((cate) => {
                              return cate.name;
                            })}
                        </font>
                      </font>
                    </h3>
                    <h2 className='text-gray-900 title-font text-lg font-medium'>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          {item.name}
                        </font>
                      </font>
                    </h2>
                    <p className=' mt-1'>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          {item.price} $
                        </font>
                      </font>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5  mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Raw Denim Heirloom Man Braid</h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                <a className="mt-3 text-indigo-500 inline-flex items-center" href="/blogs/6074fba4833a95079c934f44">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10" viewBox="0 0 24 24">
                  <circle cx={6} cy={6} r={3} />
                  <circle cx={6} cy={18} r={3} />
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">The Catalyzer</h2>
                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                <a className="mt-3 text-indigo-500 inline-flex items-center" href="/blogs/6074fb60833a95079c934f43">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Neptune</h2>
                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                <a className="mt-3 text-indigo-500 inline-flex items-center" href="/blogs/6074fbcc833a95079c934f45">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HomePage;





