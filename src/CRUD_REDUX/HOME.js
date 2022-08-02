import React from 'react';
import { Link } from 'react-router-dom';



const HOME = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col d-flex justify-content-end">
          <Link to='/add' className='btn btn-primary shadow px-5 my-5 '>Add Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default HOME;