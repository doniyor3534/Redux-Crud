import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Del, Show } from './components/REdux/Action';


const HOME = () => {
  const { data } = useSelector(state => state)
  const dispatch = useDispatch()
  const path = useNavigate()

  const show = (val) => {
    path('/edit')
    dispatch(Show(val))
  }

const deleT=(val)=>{
  dispatch(Del(val))
}
  return (
    <div className='container'>
      <div className="row">
        <div className="col-12 d-flex justify-content-end">
          <Link to='/add' className='btn btn-primary shadow px-5 my-5 '>Add Contact</Link>
        </div>
        <div className="col-md-10 mx-auto ">
          <table className='table table-hover text-white table-hover '>
            <thead>
              <tr className='row text-center  bg-dark'>
                <th className='col'>#</th>
                <th className='col'>name</th>
                <th className='col'>email</th>
                <th className='col'>number</th>
                <th className='col'>Edit/Del</th>
              </tr>
            </thead>
            <tbody className='tetx-center' >
              {
                data.length > 0 ?
                  data.map((val) => (
                    <tr className="row text-center text-dark border" key={val.id}>
                      <td className="col">{val.id}</td>
                      <td className="col">{val.name}</td>
                      <td className="col">{val.email}</td>
                      <td className="col">{val.number}</td>
                      <td className="col">
                        <button className='btn btn-warning shadow me-3' onClick={() => show(val)}>Edit</button>
                        <button className='btn btn-danger  shadow' onClick={() => deleT(val)}>Delete</button>
                      </td>
                    </tr>
                  ))
                  :
                  <tr><td> <h1 className='text-danger'>Now Contact</h1></td></tr>

              }
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default HOME;