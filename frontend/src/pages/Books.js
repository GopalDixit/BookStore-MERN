import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BooksSection from '../components/BooksSection';

const Books = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5600/api/v1/read');
        console.log(response.data.books); // Log the data to the console
        setData(response.data.books);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);
  const handleDelete = (deletedBookId) => {
    // Update the state to remove the deleted book
    setData((prevData) => prevData.filter((book) => book._id !== deletedBookId));
  };
  return (
    <div className='bg-dark' style={{ minHeight: "91.5vh" }}>
      <div className='d-flex text-white justify-content-center align-items-center py-3'>
        <h4>Books Section</h4>
      </div>
      {data.length > 0 ? (
        <div className='text-white'>
          <BooksSection data={data} onDelete={handleDelete} />
        </div>
      ) : (
        <div>No books available</div>
      )}
    </div>
  );
};

export default Books;
