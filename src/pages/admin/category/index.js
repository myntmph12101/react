import React from "react";
import { Link } from "react-router-dom";

const CategoryManagerPage = (props) => {
  const onHandLeRemove = (id) => {
    props.onDeleteCategory(id);
  };
  return (
    <div>
      <h3> admin Category</h3>
      <div className=''>
        <Link
          to='/admin/categories/add'
          className=' btn btn-primary float-right m-2'>
          Thêm danh mục
        </Link>
      </div>
      <div className=''>
        <table className='table table-bordered'>
          <thead>
            <tr className=' text-center'>
              <th>#</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {props.categories.map((category, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{category.name}</td>
                <td className='text-center'>
                  <Link
                    to={`/admin/category/${category._id}`}
                    className='btn btn-primary m-2'>
                    Edit
                  </Link>
                  <button
                    onClick={() => onHandLeRemove(category._id)}
                    className='btn bg-red-500 text-white m-2'>
                    Xoá
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryManagerPage;
