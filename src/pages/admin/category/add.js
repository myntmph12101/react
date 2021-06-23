import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
const AddCategory = ({ addCate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const onHandleSubmit = (data) => {
    addCate(data);
    history.push("/admin/categories");
  };
  return (
    <div>
      <h4>Vào đc thêm cate</h4>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <label htmlFor='category-name'>Tên Danh mục</label>
        <div className='form-floating mb-3'>
          <input
            type='text'
            name=''
            className='form-control'
            id='category-name'
            placeholder='tên danh mục'
            {...register("name", { required: true })}
          />
        </div>
        {errors.name && (
          <span className=' text-danger mt-2'>
            Tên Danh mục không được bỏ trống
          </span>
        )}
        <div className=''>
          <button type='submit' className=' btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCategory;
