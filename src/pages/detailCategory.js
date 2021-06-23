import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CategoriesList from "../components/CategoriesList";

const DetailCategory = (props, products) => {
  const { id } = useParams();

  return <div className="row my-5">
    <div className="col-3 my-3 py-3 px-3 ">
      <h3 className="mx-4">Categories</h3>
      <CategoriesList {...props} />
    </div>
    <div className="col-9 ">
      <h3>detail cate</h3>
      <div className=' flex flex-wrap  -m-4 '>
        {props.products.filter(product => product.category == id).map(item => {
          return (
            <div className=' w-1/3 p-4 '>
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
          )
        })
        }
      </div>
    </div>

  </div>;
};

export default DetailCategory;
