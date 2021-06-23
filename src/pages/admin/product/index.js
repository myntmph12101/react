import React from "react";
import ProductsList from "../../../components/ProductsList";
import { Link } from "react-router-dom";

const ProductManagerPage = (props) => {
  const onHandLeRemove = (_id) => {
    props.onDeleteProduct(_id);
  };
  return (
    <div>
      <h3> admin product</h3>
      <div className=''>
        <Link
          to='/admin/products/add'
          className=' btn btn-primary float-right m-2'>
          Thêm sản phẩm
        </Link>
      </div>
      <table className=' table table-bordered'>
        <thead>
          <tr className=' text-center'>
            <th>#</th>
            <th>Name</th>
            <th>Category</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Introdution</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>
                {props.categories
                  .filter((category) => category._id == product.category)
                  .map((cate) => {
                    return cate.name;
                  })}
              </td>
              <td>
                <img className='h-16' src={product.photo} alt />
              </td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.intro}</td>
              <td className='text-center'>
                <Link
                  to={`/admin/product/${product._id}`}
                  className='btn btn-primary m-2 px-2'>
                  Edit
                </Link>
                <Link
                  onClick={() => onHandLeRemove(product._id)}
                  className='btn bg-red-500 text-white m-2'>
                  Xoá
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManagerPage;
