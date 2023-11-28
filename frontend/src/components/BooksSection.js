import Books from "../pages/Books"
import React from 'react';
import axios from 'axios';

const BooksSection = ({ data,onDelete  }) => {
    const handleDelete = async (id) => {
        try {
          const response = await axios.delete(`http://localhost:5600/api/v1/delete/${id}`);
          if (response.status === 200) {
            console.log('Book deleted successfully:', response.data.message);
            onDelete(id); // Notify the parent component about the deleted book
          } else {
            console.error('Error deleting book:', response.data.message);
          }
        } catch (error) {
          console.error('Network error:', error.message);
        }
      };
    return (
        <div className='d-flex text-white justify-content-around align-items-center flex-wrap my-3'>
            {data && data.map((item, index) =>
                <div className='' style={{ width: "200px", height: "350px" }} >
                    <div><img src={item.image} style={{ width: "200px", height: "210px" }} className='img-fluid'></img></div>
                    <div>{item.bookname}</div>

                    <p style={{ fontSize: "20px", color: 'greenyellow' }}>Rs.{item.price}</p>
                    <div className='d-flex'>

                        {/* <button className='btn btn-primary mx-1'>Update</button> */}

                        <button
                            className='btn btn-danger mx-1'
                            onClick={() => handleDelete(item._id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>

            )}

        </div>
    )
}

export default BooksSection