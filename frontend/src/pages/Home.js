import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css" 
const Home = () => {
  return (
    <div className="Home-Page bg-dark text-white container-fluid">
      <div className="row container">
        <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column" style={{ height: "91.5vh" }}>
          <h2 style={{ fontSize: "70px" }}>BOOK STORE</h2>
          <h3>FOR YOU</h3>
          <Link className="viewBook" to={'/books'}>
                View Books
          </Link>
        </div>
        <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column" style={{ height: "91.5vh" }}>
          <img src='https://storage.googleapis.com/pai-images/3ccc705b85f24ec0819a28be4a48c022.jpeg' />
        </div>
      </div>
    </div>
  );
};

export default Home;
