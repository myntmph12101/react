import React from "react";
import { Link } from "react-router-dom";

const ProductsList = (props) => {
  return (
    <div className=''>
      <section className=' text-gray-600 body-font'>
        <div className=' px-5 py-20 mx-auto'>
          <h3> Product Page</h3>
          <div className=' flex flex-wrap  -m-4 '>
            {props.products.map((item, index) => {
              return (
                <div className=' w-1/3 p-4 '>
                  <Link
                    to={`/products/${item._id}`}
                    className='block relative h-48  overflow-hidden'>
                    <img
                      className='object-cover object-center w-full h-full block'
                      src={item.photo}
                    />
                  </Link>
                  <div className='m-1'>
                    <h3 className='text-gray-600 text-xs tracking-widest title-font  -py-1'>
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
      </section>
    </div>
  );
};

export default ProductsList;

{
  /* <button onClick={() => onHandLeRemove(item._id)}>Delete</button> */
}

{
  /* <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link to="/products/detailProduct/{item.id}" className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.photo} />
                </Link>
                <div className="mt-4">
                    <h2 className="text-gray-900 title-font text-lg font-medium">{item.name}</h2>
                    <p className="mt-1">{item.price}</p>
                </div>
            </div>
        </div>
    </div>
</section> */
}

// <div>
//     <div className="text-3xl section-title">SẢN PHẨM CỎ MỀM</div>
//     <div className="section-subtitle">Explore our rich and diverse portfolio.</div>

//     <section className="text-gray-600 body-font">
//         <div className="container px-5 py-24 mx-auto">
//             <div className="flex flex-wrap -m-4">
//                 <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
//                     <a className="block relative h-48 rounded overflow-hidden">
//                         <img alt="thương mại điện tử" className="object-cover object-center w-full h-full block" src={item.photo} />
//                     </a>
//                     <div className="mt-4">
//                         <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
//                             <font style={{ verticalAlign: 'inherit' }}>
//                                 <font style={{ verticalAlign: 'inherit' }}>THỂ LOẠI</font>
//                             </font>
//                         </h3>
//                         <h2 className="text-gray-900 title-font text-lg font-medium">
//                             <font style={{ verticalAlign: 'inherit' }}>
//                                 <font style={{ verticalAlign: 'inherit' }}>{item.name}</font>
//                             </font>
//                         </h2>
//                         <p className="mt-1">
//                             <font style={{ verticalAlign: 'inherit' }}>
//                                 <font style={{ verticalAlign: 'inherit' }}>{item.price}</font>
//                             </font>
//                         </p>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     </section>

// </div>

{
  /* <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 ">
                        <div className="flex  -m-4">
                            <div className="p-4 ">
                                <div className=" border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="w-[150px] h-[70px] object-cover object-center" src={item.photo} />
                                    <div className="p-6">
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{item.name}</h1>
                                        <p className="leading-relaxed mb-3">{item.price}$</p>
                                        <div className="flex items-center flex-wrap ">
                                            <Link to={`/products/${item._id}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */
}
