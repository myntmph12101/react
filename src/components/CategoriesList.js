import React from "react";
import { Link } from "react-router-dom";
const CategoriesList = (props) => {
  return (
    <div>
      <ul>
        {props.categories.map((item, index) => {
          return (
            <Link to={`/detailcategory/${item._id}`} className=' no-underline'>
              <li
                className='list-none m-2 text-lg text-gray-900 hover:text-red-700'
                key={index}>
                {item.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoriesList;
