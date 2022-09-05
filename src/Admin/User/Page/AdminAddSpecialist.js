import React from 'react'
import { useHistory } from 'react-router-dom';
import { useState } from "react"
import AdminHeader from '../../Comman/AdminHeader';
import AdminSidebar from '../../Comman/AdminSidebar';
import api from '../../../Comman_Admin/axios';
export default function AdminAddSpecialist() {

    const [full_name, setfull_name] = useState('');
    const [unique_id, setunique_id] = useState('');
    const [password, setpassword] = useState('');
    // const [digit_gamerate, setdigit_gamerate] = useState('');
    // const [pana_gamerate, setpana_gamerate] = useState('');

    const [error, setError] = useState(null)
    const errorDiv = error
        ? <div className="text-center alert alert-danger">
            {error}
        </div>
        : '';


    const history = useHistory();

    function handleSubmit(event) {
        event.preventDefault();
        setError(null);


        if (full_name.toString().trim().length < 0 || full_name.toString().trim().length < 3) {
            setError('Full Name Must Be at least 3 character Long');
        }
        else if (unique_id.toString().trim().length < 0 || unique_id.toString().trim().length < 6) {
            setError('Unique ID Must Be at least 3 character Long');
        }
        else if (password.toString().trim().length < 0 || password.toString().trim().length < 6) {
            setError('Password must be at least 6 character long');
        }

        else {

            let item = {
                full_name: full_name,
                unique_id: unique_id,
                password: password,
                // digit_gamerate: digit_gamerate,
                // pana_gamerate: pana_gamerate
            }
            let customToken = sessionStorage.getItem('customToken');
            if (customToken) {
                let headers = {
                    Authorization:
                        "Bearer " + customToken,
                    "Content-Type": "application/json",
                };
                api.post(`/admin/client/add_client`, item, { headers })
                    .then(res => {
                        console.log("hey ji")
                        console.log(res.data);
                        if (res.data.success === false) {
                            setError(res.data.message)
                        } else {
                            history.push('/admin/client')
                            setTimeout(() => {
                                window.location.reload(true)
                            }, 1000);
                        }
                    }).catch(err => {
                        if (err.response) {
                            setError(err.response.data.message)
                        }
                        else if (err.request) {
                            setError(err.request);
                        }
                        else {
                            setError(err.message);
                        }
                    })
                // }
                // history.push('/client/client')
                // setTimeout(() => {
                //     window.location.reload(true)
                // }, 1000);
                console.log('hey', item)
                // window.location.reload(true)

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
                                            <h4><strong>Specialist Add</strong></h4>
                                        </div>
                                        <form onSubmit={handleSubmit} >
                                            <div className="form-group mb-4">
                                                <label><strong>Dr name</strong></label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="full_name"
                                                    placeholder="full_name"
                                                    value={full_name}
                                                    required
                                                    onChange={(e) => setfull_name(e.target.value)}

                                                />
                                            </div>
                                            <div className="form-group mb-4">
                                                <label><strong>Clinic name</strong></label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="unique_id"
                                                    placeholder="unique_id"
                                                    value={unique_id}
                                                    required
                                                    onChange={(e) => setunique_id(e.target.value)}
                                                />
                                            </div>

                                            <div className="form-group mb-4">
                                                <label><strong>Contact number</strong></label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="password"
                                                    placeholder="password"
                                                    value={password}
                                                    required
                                                    onChange={(e) => setpassword(e.target.value)}

                                                />
                                            </div>

                                            <div className="form-group mb-4">
                                                <label><strong>Contact number for appointment</strong></label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="full_name"
                                                    placeholder="full_name"
                                                    value={full_name}
                                                    required
                                                    onChange={(e) => setfull_name(e.target.value)}

                                                />
                                            </div>
                                            <div className="form-group mb-4">
                                                <label><strong>Add Specialty</strong></label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="unique_id"
                                                    placeholder="unique_id"
                                                    value={unique_id}
                                                    required
                                                    onChange={(e) => setunique_id(e.target.value)}
                                                />
                                            </div>

                                            <div className="form-group mb-4">
                                                <label><strong>Address manual</strong></label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="unique_id"
                                                    placeholder="unique_id"
                                                    value={unique_id}
                                                    required
                                                    onChange={(e) => setunique_id(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group mb-4">
                                                <label><strong>Address geo-tagging</strong></label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="unique_id"
                                                    placeholder="unique_id"
                                                    value={unique_id}
                                                    required
                                                    onChange={(e) => setunique_id(e.target.value)}
                                                />
                                            </div>

                                            {/* <div className="form-group mb-4">
                                                <label htmlFor="exampleFormControlSelect1">Digit Game Rate</label>
                                                <select className="form-control show-tick"
                                                    onChange={(e) => setdigit_gamerate(e.target.value)}
                                                    name="gamerate" id="category" required >
                                                    <option value='' selected disabled required>digit game rate</option>
                                                    <option value="90" id="90">90</option>
                                                    <option value="95" id="95">95</option>
                                                    <option value="100" id="100">100</option>
                                                </select>
                                            </div>
                                            <div className="form-group mb-4">
                                                <label htmlFor="exampleFormControlSelect1">Pana Game Rate</label>
                                                <select className="form-control show-tick"
                                                    onChange={(e) => setpana_gamerate(e.target.value)}
                                                    name="gamerate" id="category" required >
                                                    <option value='' selected disabled required >pana game rate</option>
                                                    <option value="90" id="90">90</option>
                                                    <option value="95" id="95">95</option>
                                                    <option value="100" id="100">100</option>
                                                </select>
                                            </div> */}

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
