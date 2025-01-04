import React, { useState } from 'react';
import axios from "axios"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const API_URL = import.meta.env.VITE_API_URL;

const CreatePostForm = () => {
  const navigate = useNavigate();
  const [newPost, setNewPost] = useState({ title: '', description: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddPost = (e) => { 
    e.preventDefault();
    axios.post(`${API_URL}/tutor/createPost`, newPost).then((resp) => {
      //console.log(resp.data.message)
      toast.success(resp.data.message)
      navigate('/post');
    }).catch((err) => {
      toast.error(err.response.data.msg)
      //console.log(err.response.data.msg)
      navigate('/tutor/login');
    })

    setNewPost({ title: '', description: '' });
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg w-[40%]  mt-10 mx-[30%] items-center">
      <h2 className="text-2xl font-bold mb-4">Add New Post</h2>
      <form onSubmit={handleAddPost} className="space-y-4">
        <div>
          <label className="block text-gray-700">Title:</label>
          <input
            type="text"
            name="title"
            value={newPost.title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Content:</label>
          <textarea
            name="description"
            placeholder='Write your post'
            value={newPost.description}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default CreatePostForm;