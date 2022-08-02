import React from 'react';
import { Link } from 'react-router-dom';

const Add = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 text-center">
                       <h1 className='my-3 '>Add Contact Page</h1>
                </div>
                <form className='col-md-6 mx-auto shadow p-5 text-center '>
                    <input type="text" name='name' placeholder='name' className='form-control'  />
                    <input type="email" name='email' placeholder='email' className='form-control my-3' />
                    <input type="number" name='number' placeholder='number' className='form-control' />
                    <button type='submit' className='btn btn-primary px-5 mx-3 my-3 shadow'>Submit</button>
                    <Link to='/' className='btn btn-danger px-5 shadow ' >Close</Link>
                </form>
            </div>
        </div>
    );
};

export default Add;