import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import ProductAPI from "../../../api/productAPI";
const AddProduct = ({ addPro, categories }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const onHandleSubmit = async (data) => {
    await addPro(data);
    history.push("/admin/products");
  };
  return (
    <div>
      <h3>Add Product</h3>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <div className='form-floating mb-3'>
          <input
            type='text'
            className='form-control'
            id='product-name'
            placeholder='Tên sản phẩm'
            {...register("name", { required: true })}
          />
          <label htmlFor='product-name'>Tên sản phẩm</label>
          {errors.name && (
            <span className='text-danger mt-2'>
              Tên Sản phẩm không được bỏ trống
            </span>
          )}
        </div>

        <div className='mb-3'>
          <label className='form-label'>Categories</label>
          <select
            id='categories'
            {...register("category", { required: true })}
            className='form-control'>
            {categories.map((category) => {
              return <option value={category._id}>{category.name}</option>;
            })}
          </select>
        </div>

        <div className='form-floating mb-3'>
          <input
            type='file'
            className='form-control'
            id='product-image'
            placeholder='ảnh sản phẩm'
            {...register("photo", { required: true })}
          />
          <label htmlFor='product-name'> Ảnh sản phẩm</label>
          {errors.name && (
            <span className=' text-danger mt-2'>
              ảnh Sản phẩm không được bỏ trống
            </span>
          )}
        </div>
        <div className=' form-floating mb-3'>
          <input
            type='number'
            className='form-control'
            id='product-price'
            placeholder='Giá sản phẩm'
            {...register("price", { required: true, min: 0 })}
          />
          <label htmlFor='product-price'> Giá sản phẩm</label>
          {errors.price && (
            <span className=' text-danger mt-2'>
              giá sản phẩm phải lớn hơn 0
            </span>
          )}
        </div>
        <div className=' form-floating mb-3'>
          <input
            type='number'
            className='form-control'
            id='product-quantity'
            placeholder='Số lượng sản phẩm'
            {...register("quantity", { required: true, min: 0 })}
          />
          <label htmlFor='product-price'> Số lượng sản phẩm</label>
          {errors.price && (
            <span className=' text-danger mt-2'>
              số lượng sản phẩm phải lớn hơn 0
            </span>
          )}
        </div>
        <div className=' mb-3'>
          <label htmlFor='product-intro'> Mô tả sản phẩm</label>
          <textarea
            type='text'
            className=' form-control'
            id='product-intro'
            {...register("intro", { required: true })}></textarea>
          {errors.intro && (
            <span className=' text-danger mt-2'>
              Không được bỏ phần mô tả sản phẩm
            </span>
          )}
        </div>

        <button type='submit' className=' btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
