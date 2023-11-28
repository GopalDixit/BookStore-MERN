import React, { useState } from 'react';

import axios from 'axios';

const Addbooks = () => {
  const [data, setData] = useState({
    bookname: '',
    author: '',
    description: '',
    image: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5600/api/v1/add', data);

      if (response) {
        console.log('Book added successfully:', response.data.message);
        // Optionally, you can reset the form or perform any other actions upon success
        setData({
          // bookname: '',
          author: '',
          description: '',
          image: '',
          price: '',
        });
      } else {
        console.error('Error adding book:', response.data.error);
      }
    } catch (error) {
      console.error('Network error:', error.message);
    }
  };

  return (
    <div className="bg-dark d-flex justify-content-center align-items-center" style={{ minHeight: '91.5vh' }}>
      <div className="container p-4">
        <form>
          <div className="mb-3">
            <label htmlFor="bookname" className="form-label text-white">
              Book Name
            </label>
            <input
              type="text"
              className="form-control"
              id="bookname"
              placeholder="Enter New Book"
              name="bookname"
              value={data.bookname}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="author" className="form-label text-white">
              Author Name
            </label>
            <input
              type="text"
              className="form-control"
              id="author"
              placeholder="Enter Author name"
              name="author"
              value={data.author}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label text-white">
              Add Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder="Write Book Description"
              name="description"
              value={data.description}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="image" className="form-label text-white">
              Image
            </label>
            <input
              type="text"
              className="form-control"
              id="image"
              placeholder="Enter URL"
              name="image"
              value={data.image}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="price" className="form-label text-white">
              Add Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              placeholder="Enter Price"
              name="price"
              value={data.price}
              onChange={handleChange}
            />
          </div>

          <button className="btn btn-success" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addbooks;