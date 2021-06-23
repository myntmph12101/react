import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import CategoryAPI from "../../../api/categoryAPI";
const EditCategory = ({ editCate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [category, setCategory] = useState({}); //b1
  const { id } = useParams();
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const { data: category } = await CategoryAPI.get(id);
        await setCategory(category);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategory();
  }, []);
  const history = useHistory();
  const onHandleSubmit = async (item) => {
    if (item != "") {
      const category = {
        ...item,
        _id: id,
      };
      editCate(category, id);
      history.push("/admin/categories");
    }
  };
  return (
    <div>
      <h3>Edit Category</h3>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <div className='form-floating mb-3'>
          <input
            type='text'
            defaultValue={category.name}
            className='form-control'
            id='category-name'
            placeholder='Tên sản phẩm'
            {...register("name", { required: true })}
          />
          <label htmlFor='category-name'>Tên danh mục</label>
          {errors.name && (
            <span className='text-danger mt-2'>
              Tên danh mục không được bỏ trống
            </span>
          )}
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditCategory;
