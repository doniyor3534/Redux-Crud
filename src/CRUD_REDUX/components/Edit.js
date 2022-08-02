import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { Types } from './REdux/Type';
import { EditFun } from './REdux/Action';
import { useNavigate } from 'react-router';

const Edit = () => {

    const { data } = useSelector(state => state)
    const dispatch = useDispatch()

    const [objInput, setObjInput] = useState({
        name: '',
        id: null,
        email: '',
        number: ''
    })
    // const editobg= data.find((val)=>val.id===+params.id)

    const send = (e) => {
        e.preventDefault()
        dispatch(EditFun({ ...objInput, id: new Date().getTime() }))
        setObjInput({
            name: '',
            id: null,
            email: '',
            number: ''
        })
    }

    const changeFun = (e) => {
        setObjInput({ ...objInput, [e.target.name]: e.target.value })
    }



    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1 className='my-3 '>Edit Contact Page</h1>
                </div>
                <form className='col-md-6 mx-auto shadow p-5 text-center ' onSubmit={send}>
                    <input type="text" name='name' placeholder='name' className='form-control' value={objInput.name} onChange={changeFun} />
                    <input type="email" name='email' placeholder='email' className='form-control my-3' value={objInput.email} onChange={changeFun} />
                    <input type="number" name='number' placeholder='number' className='form-control' value={objInput.number} onChange={changeFun} />
                    <button type='submit' className='btn btn-primary px-5 mx-3 my-3 shadow' >Submit</button>
                    <Link to='/' className='btn btn-danger px-5 shadow ' >Close</Link>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Edit;