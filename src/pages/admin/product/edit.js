import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import ProductAPI from "../../../api/productAPI";
import { uploadFile } from "../../../helpers/firebaseClient";
const EditProduct = ({ editPro, categories }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const [product, setProduct] = useState({}); //b1
    const { id } = useParams();
    //Gọi api
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data: products } = await ProductAPI.get(id);
                setProduct(products);
                console.log(products);
                reset(products);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProduct();
    }, []);
    const history = useHistory();
    const onHandleSubmit = async (item) => {
        if (document.querySelector("#update-image").value == "") {
            const product = {
                ...item,
                photo: document.querySelector("#update-hidden-image").value,
            };
            await editPro(product, id);
            history.push("/admin/products");
        } else {
            const image = item.image[0];
            const url = await uploadFile(image.name, image);
            console.log(url);
            const product = {
                ...item,
                _id: id,
                photo: url,
            };
            await editPro(product, id);
            history.push("/admin/products");
        }
    };
    return (
        <div>
            <h3>Edit Product</h3>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className='form-floating mb-3'>
                    <input
                        type='text'
                        defaultValue={product.name}
                        className='form-control'
                        id='update-name'
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
                        id='update-image'
                        placeholder='ảnh sản phẩm'
                        {...register("image")}
                    />
                    <input
                        type='hidden'
                        name=''
                        id='update-hidden-image'
                        defaultValue={product.photo}
                    />
                    <img src={product.photo} className="w-[200px]" alt='' />
                    <label htmlFor='product-name'>Ảnh sản phẩm</label>
                </div>
                <div className='form-floating mb-3'>
                    <input
                        type='number'
                        className='form-control'
                        id='product-price'
                        defaultValue={product.price}
                        placeholder='Giá sản phẩm'
                        {...register("price", { required: true, min: 0 })}
                    />
                    <label htmlFor='product-price'>Giá sản phẩm</label>
                    {errors.price && (
                        <span className='text-danger mt-2'>
                            giá sản phẩm phải lớn hơn 0
                        </span>
                    )}
                </div>
                <div className='form-floating mb-3'>
                    <input
                        type='number'
                        className='form-control'
                        id='product-quantity'
                        defaultValue={product.quantity}
                        placeholder='Số lượng sản phẩm'
                        {...register("quantity", { required: true, min: 0 })}
                    />
                    <label htmlFor='product-price'>Số lượng sản phẩm</label>
                    {errors.price && (
                        <span className='text-danger mt-2'>
                            số lượng sản phẩm phải lớn hơn 0
                        </span>
                    )}
                </div>
                <div className='mb-3'>
                    <label htmlFor='product-intro'>Mô tả sản phẩm</label>
                    <textarea
                        type='text'
                        className='form-control'
                        id='product-intro'
                        defaultValue={product.intro}
                        {...register("intro", { required: true })}></textarea>
                    {errors.intro && (
                        <span className='text-danger mt-2'>
                            Không được bỏ phần mô tả sản phẩm
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

export default EditProduct;
