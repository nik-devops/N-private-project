import React from 'react'
import AdminSidebar from '../../Comman/AdminSidebar';
import AdminHeader from '../../Comman/AdminHeader';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Switch from "react-switch";
import "./Switch.css"
import api from '../../../Comman_Admin/axios';

function EditMR() {
    const [full_name, setfull_name] = useState('');
    const [password, setpassword] = useState('');
    const [is_active, setState] = useState('');

    const [values, setValues] = useState({
        full_name: '',
        password: "",
        is_active: ""
    });
    const [error, setError] = useState(null)

    const errorDiv = error
        ? <div className="text-center alert alert-danger">
            {error}
        </div>
        : '';

    const history = useHistory();
    const baseURL = "http://localhost:5055";
    const { id } = useParams();

    useEffect(() => {
        clientdataget()
    }, [])

    function clientdataget(req, res) {
        try {
            let customToken = sessionStorage.getItem('customToken');
            if (customToken) {
                let headers = {
                    Authorization:
                        "Bearer " + customToken,
                    "Content-Type": "application/json",
                };
                api.get(`/admin/client/clientbyid/${id}`, { headers })
                    .then(res => {
                        const tableData = res.data.data;
                        console.log(tableData)
                        setValues({
                            full_name: tableData.full_name,
                            password: tableData.password,
                            is_active: tableData.is_active
                        })
                        setfull_name(tableData.full_name);
                        // setpassword(tableData.password);
                        setState(tableData.is_active);
                    })
            }
        } catch (err) {
            res.status(404).json({ success: false, message: err.message })
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        setError(null);


        if (full_name.toString().trim().length < 0 || full_name.toString().trim().length < 3) {
            setError('Full Name Must Be at least 3 character Long');
        }
        else {
            if (password !== '') {
                if (password.toString().trim().length < 0 || password.toString().trim().length < 6) {
                    setError('Password must be at least 6 character long');
                }
                else {
                    let item = {
                        full_name: full_name,
                        password: password,
                        is_active: is_active
                    }
                    let customToken = sessionStorage.getItem('customToken');
                    if (customToken) {
                        let headers = {
                            Authorization:
                                "Bearer " + customToken,
                            "Content-Type": "application/json",
                        };
                        api.patch(`/admin/client/edit_client/${id}`, item, { headers }).then((res) => {
                            console.log("happy", headers)
                        }).catch(err => {
                            if (err.response) {
                                console.log(err.response.data)
                            }
                            else if (err.request) {
                                console.log(err.request);
                            }
                            else {
                                console.log(err.message);
                            }
                        })
                    }
                    history.push('/admin/client')
                    window.location.reload(true)
                    // setTimeout(() => {
                    // }, 1000);
                }
            }
            else {
                let item = {
                    full_name: full_name,
                    password: password,
                    is_active: is_active
                }
                let customToken = sessionStorage.getItem('customToken');
                if (customToken) {
                    let headers = {
                        Authorization:
                            "Bearer " + customToken,
                        "Content-Type": "application/json",
                    };
                    api.patch(`/admin/client/edit_client/${id}`, item, { headers }).then((res) => {
                        console.log("happy", headers)
                    }).catch(err => {
                        if (err.response) {
                            console.log(err.response.data)
                        }
                        else if (err.request) {
                            console.log(err.request);
                        }
                        else {
                            console.log(err.message);
                        }
                    })
                }
                history.push('/admin/client')
                window.location.reload(true)
                // setTimeout(() => {
                // }, 1000);

            }
        }
    }
    return (
        <React.Fragment>
            <AdminHeader />
            <div className="main-container" id="container">
                <AdminSidebar />
                <div id="content" className="main-content">
                    <div className="container layout-spacing layout-top-spacing center">
                        <div className="row">
                            <div id="flRegistrationForm" className="col-lg-12 layout-spacing">
                                <div className="statbox widget box box-shadow">
                                    <div className="widget-content widget-content-area">
                                        <div className="col-xl-12 col-md-12 col-sm-12 col-12 text-center">
                                            <h4><strong>MR Details</strong></h4>
                                        </div>
                                        <form onSubmit={handleSubmit} >
                                            <div className="form-group mb-4">
                                                <label><strong>Full-Name</strong></label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="full_name"
                                                    placeholder="full-full_name"
                                                    value={full_name}
                                                    required
                                                    onChange={(e) => setfull_name(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group mb-4">
                                                <label><strong>Password</strong></label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="password"
                                                    placeholder="password"
                                                    value={password}

                                                    onChange={(e) => setpassword(e.target.value)}
                                                />
                                            </div>
                                            <label className="switch">
                                                <span>Status</span>
                                                <Switch onChange={() => setState(!is_active)} checked={is_active} />
                                            </label>

                                            <div className='col-md-12'> {errorDiv} </div>

                                            <div className="form-group form-check pl-0 mt-5 text-center">
                                                <button type="submit" className="btn btn-primary mx-2">
                                                    Submit
                                                </button>
                                                <button type="submit" className="btn btn-primary mx-2 " onClick={() => history.goBack()}>
                                                    Go Back
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EditMR