import React from "react";
import ProductsList from "../components/ProductsList";
import CategoriesList from "../components/CategoriesList";
import { NavLink } from "react-router-dom";

const ProductPage = (props) => {
  return (
    <div className='container'>
      <div className='row'>
      <div className='col-3 my-3 py-3 px-3'>
          <div className='my-5'>
            <h3 className='py-3'>Categories</h3>
            <CategoriesList {...props} />
          </div>
        </div>
        <div className=' col-9'>
          <ProductsList {...props} />
        </div>
        
      </div>
    </div>
  );
};
export default ProductPage;

// {props.categories.map((category, index) => (
//     < div >
//         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//             <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
//                 <li className="mr-5 list-none hover:text-gray-900"><NavLink to="#" className="px-5 no-underline text-black" activeclassName="font-bold">{category.name}</NavLink></li>
//             </nav>
//         </div>
//     </div>
// ))}
