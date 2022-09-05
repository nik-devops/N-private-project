import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import api from '../../Comman_Admin/axios';
import "./AdminLogin.css"

export default function AdminLogin() {


    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [error, setError] = useState(null)
    const errorDiv = error
        ? <div className="text-center alert alert-danger">
            {error}
        </div>
        : '';

    const validateEmail = (email) => {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    let history = useHistory();
    let browserHistory = useHistory();

    useEffect(() => {
        localStorage.removeItem("customToken");
    }, [])


    async function handleSubmit(event) {
        event.preventDefault();
        setError(null);

        if (!validateEmail(email)) {
            setError('Invalid Email');
        }
        else if (password.toString().trim().length < 0 || password.toString().trim().length < 6) {
            setError('Password must be at least 6 character long');
        }

        else {
            let item = {
                email: email,
                password: password,
            }

            api.post(`/admin/auth/login`, item).then((res) => {
                console.log("response - " + JSON.stringify(res.data.data));
                console.log(res.data)
                if (res.data.success === false) {
                    setError(res.data.message)
                } else {
                    sessionStorage.setItem('customToken', res.data.data.customToken);

                    let customToken = sessionStorage.getItem('customToken');

                    if (customToken) {
                        history.push('/admin/dashboard')
                        window.location.reload(true)
                    }
                    // else {
                    //     history.push('/admin/login')
                    //     window.location.reload(true)
                    // }
                    // window.location.reload(true)
                }
            }).catch(err => {
                if (err.response) {
                    setError(err.response.data)

                }
                else if (err.request) {
                    setError(err.request);
                }
                else {
                    setError(err.message);

                }
            })

            setTimeout(() => {
                let customToken = sessionStorage.getItem('customToken');
                if (!customToken) {
                    history.push('/admin/login')
                }
                window.location.reload(true)
            }, 2000);

        }
    }

    const toggleIsPasswordShowValue = () => {
        setIsPasswordShow(!isPasswordShow);
    };
    const [isPasswordShow, setIsPasswordShow] = useState(false);

    return (
        <React.Fragment>
            <div className="form-container outer" style={{ backgroundColor: "#321213" }}>
                <div className="form-form">
                    <div className="form-form-wrap">
                        <div className="form-container">
                            <div className="form-content">
                                <h1 className="">Sign In With Admin</h1>
                                <p className="">Log in to your account to continue.</p>
                                <form className="text-left" onSubmit={handleSubmit}>
                                    <div className="form">
                                        <div id="username-field" className="field-wrapper input">
                                            <label htmlFor="email">Email</label>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-user"
                                            >
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                <circle cx={12} cy={7} r={4} />
                                            </svg>
                                            <input
                                                id="email"
                                                name="email"
                                                type="text"
                                                className="form-control"
                                                placeholder="e.g abc@gmail.com"
                                                required value={email} onChange={(e) => setemail(e.target.value)}

                                            />
                                        </div>
                                        <div id="password-field" className="field-wrapper input mb-2">
                                            <div className="d-flex justify-content-between">
                                                <label htmlFor="password">PASSWORD</label>

                                            </div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-lock"
                                            >
                                                <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
                                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                            </svg>
                                            <input
                                                id="password"
                                                name="password"
                                                type={isPasswordShow ? 'text' : 'password'} value={password}
                                                className="form-control"
                                                placeholder="Password"
                                                required
                                                onChange={(e) => setpassword(e.target.value)}

                                            />
                                            {password && (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    id="toggle-password"
                                                    className="feather feather-eye"

                                                    onClick={toggleIsPasswordShowValue}
                                                >
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                    <circle cx={12} cy={12} r={3} />
                                                </svg>
                                            )}
                                        </div>
                                        <div className='col-md-12'> {errorDiv} </div>

                                        <div className="d-sm-flex justify-content-between">
                                            <div className="field-wrapper">
                                                <button type="submit" className="btn" style={{ backgroundColor: "#e75052" }} value="">
                                                    Login
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment >
    )
}

