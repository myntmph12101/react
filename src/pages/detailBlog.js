import BlogAPI from "../api/blogAPI";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailBlog = () => {
  const [blogs, setBlogs] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: blogs } = await BlogAPI.get(id);
        console.log(blogs);
        setBlogs(blogs);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className=' my-4'>
      <div className='flex'>
        <div className='flex-1'>
          <img
            className='img-fluid'
            src={`http://localhost:4000/api/blog/photo/${blogs._id}`}
            alt=''
          />
        </div>
        <div className=' flex-1'>
          <h6 className='text-yellow-900'>{blogs.topic}</h6>
          <h4 className='text-left font-sans text-yellow-900 text - 3xl'>
            <a
              className='text-left font-sans text-yellow-900 text - 3xl'
              href=' /#/detailblog/${blog._id}'>
              {" "}
              {blogs.title}
            </a>
          </h4>
          <p className=' text-xl py-3 text-yellow-800'> {blogs.content}</p>
          <h5 className='text-xl text-yellow-900'>
            START FROM ${blogs.price}
          </h5>
        </div>
      </div>
      <div className='m-3 text-md'>
        <h5> {blogs.detail}</h5>
      </div>
    </div>
  );
};

export default DetailBlog;
