// components/UpdateBook.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateBook = ({ bookId, onCancel, onUpdate }) => {
  const [formData, setFormData] = useState({
    bookname: '',
    description: '',
    author: '',
    image: '',
    price: '',
  });

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`https://bookstore-mernbe.onrender.com/api/v1/read/${bookId}`);
        const bookDetails = response.data.book;
        setFormData(bookDetails);
      } catch (error) {
        console.error('Error fetching book details:', error.message);
      }
    };

    if (bookId) {
      fetchBookDetails();
    }
  }, [bookId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:5600/api/v1/update/${bookId}`, formData);
      if (response.status === 200) {
        console.log('Book updated successfully:', response.data.message);
        onUpdate();
      } else {
        console.error('Error updating book:', response.data.message);
      }
    } catch (error) {
      console.error('Network error:', error.message);
    }
  };

  return (
    <div>
      <h2>Update Book</h2>
      {/* Render your update form fields, and use formData for values */}
      <input type="text" name="bookname" value={formData.bookname} onChange={handleChange} />
      {/* ... other form fields ... */}
      <button onClick={handleUpdate}>Update</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default UpdateBook;
