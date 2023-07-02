import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';
import './Profile.css';

function Login({ handleLogin }) {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [backendError, setBackendError] = useState('');

    const handleInput = (event) => {
        setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
    };

    useEffect(() => {
        if (errors.email === '' && errors.password === '') {
            axios
                .post('http://localhost:8081/login', values)
                .then((res) => {
                    if (res.data.errors) {
                        setBackendError(res.data.errors);
                    } else {
                        setBackendError('');
                        if (res.data.success === true) {
                            console.log(res.data);
                            handleLogin(res.data.user);
                            navigate('/profile', { state: { user: res.data.user } });
                        } else {
                            alert('No record existed');
                        }
                    }
                })
                .catch((err) => console.log(err));
        }
    }, [errors, handleLogin, navigate, values]);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 gradient-custom">
            <div className="bg-white p-3 rounded w-25">
                <h2>Login</h2>
                <hr />
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter Email"
                            className="form-control rounded-0"
                            onChange={handleInput}
                        />
                        <span>{errors.email && <span className="text-danger">{errors.email}</span>}</span>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter password"
                            className="form-control rounded-0"
                            onChange={handleInput}
                        />
                        <span>{errors.password && <span className="text-danger">{errors.password}</span>}</span>
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        <strong>Login</strong>
                    </button>{' '}
                    <p></p>
                    <Link
                        to="/signup"
                        className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
                    >
                        Create Account
                    </Link>
                    {backendError && <p className="text-danger mt-3">{backendError}</p>}
                </form>
            </div>
        </div>
    );
}

export default Login;
