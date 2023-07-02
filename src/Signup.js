import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation'
import axios from 'axios'

function Signup() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
    };
    
    useEffect(() => {
        if (errors.name === "" && errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/signup', values)
                .then(res => {
                    navigate('/');
                })
                .catch(err => console.log(err));
        }
    }, [errors, navigate, values]);
    
    return (
        <div className='d-flex justify-content-center align-item-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign Up</h2> <hr></hr>
                <form action='' onSubmit={handleSubmit}>

                    <div className='mb-3'>
                        <label htmlFor='name'><strong>Name</strong></label>
                        <input
                            name='name'
                            type='name'
                            placeholder='Enter Name'
                            className='form-control rounded-0'
                            onChange={handleInput} />
                        <span>{errors.name && <span className='text-danger'>{errors.name}</span>}</span>

                    </div>

                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input
                            name='email'
                            type='email'
                            placeholder='Enter Email'
                            className='form-control rounded-0'
                            onChange={handleInput} />
                        <span>{errors.email && <span className='text-danger'>{errors.email}</span>}</span>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input
                            name='password'
                            type='password'
                            placeholder='Enter password'
                            className='form-control rounded-0'
                            onChange={handleInput} />
                        <span>{errors.password && <span className='text-danger'>{errors.password}</span>}</span>
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Sign up</strong></button> <p></p>
                    <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Already have Account</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup
