import React from 'react'
import { useHistory } from 'react-router-dom';
import { useState } from "react"
import AdminHeader from '../../Comman/AdminHeader';
import AdminSidebar from '../../Comman/AdminSidebar';
import api from '../../../Comman_Admin/axios';

export default function AdminAddMR() {
    const [name, setname] = useState('');
    const [phone, setphone] = useState('');
    const [email, setemail] = useState('');
    const [zone, setzone] = useState('');
    const [state, setstate] = useState('');
    const [employeecode, setemployeecode] = useState('');
    const [designation, setdesignation] = useState('');
    const [headquarter, setheadquarter] = useState('');
    const [image, setimage] = useState('');
    const [password, setpassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('');
    const [status, setstatus] = useState('');




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


        // if (full_name.toString().trim().length < 0 || full_name.toString().trim().length < 3) {
        //     setError('Full Name Must Be at least 3 character Long');
        // }
        // else if (unique_id.toString().trim().length < 0 || unique_id.toString().trim().length < 6) {
        //     setError('Unique ID Must Be at least 3 character Long');
        // }
        // else if (password.toString().trim().length < 0 || password.toString().trim().length < 6) {
        //     setError('Password must be at least 6 character long');
        // }

        // else {

        let item = {
            // full_name: full_name,
            // unique_id: unique_id,
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
        // }
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
                                            <h4><strong>MR Add</strong></h4>
                                        </div>
                                        <form onSubmit={handleSubmit} >
                                            <div className="form-group mb-4">
                                                <label><strong>Name</strong></label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="name"
                                                    // value={name}
                                                    required
                                                // onChange={(e) => setname(e.target.value)}

                                                />
                                            </div>
                                            <div className="form-group mb-4">
                                                <label><strong>Phone</strong></label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="phone"
                                                    placeholder="phone"
                                                    // value={phone}
                                                    required
                                                // onChange={(e) => setphone(e.target.value)}

                                                />
                                            </div>
                                            <div className="form-group mb-4">
                                                <label><strong>Email</strong></label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="email"
                                                    // value={email}
                                                    required
                                                // onChange={(e) => setemail(e.target.value)}

                                                />
                                            </div>
                                            <div className="form-group mb-4">
                                                <label><strong>Zone</strong></label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="zone"
                                                    placeholder="zone"
                                                    // value={zone}
                                                    required
                                                // onChange={(e) => setzone(e.target.value)}

                                                />
                                            </div><div className="form-group mb-4">
                                                <label><strong>State</strong></label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="state"
                                                    placeholder="state"
                                                    // value={state}
                                                    required
                                                // onChange={(e) => setstate(e.target.value)}

                                                />
                                            </div>
                                            <div className="form-group mb-4">
                                                <label><strong>Employee Code</strong></label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="employeecode"
                                                    placeholder="employeecode"
                                                    // value={employeecode}
                                                    required
                                                // onChange={(e) => setemployeecode(e.target.value)}

                                                />
                                            </div>
                                            <div className="form-group mb-4">
                                                <label><strong>Headquarter</strong></label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="headquarter"
                                                    placeholder="headquarter"
                                                    // value={headquarter}
                                                    required
                                                // onChange={(e) => setheadquarter(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group mb-4">
                                                <label><strong>Upload Profile Image </strong></label>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    id="image"
                                                    placeholder="image"
                                                    // value={image}
                                                    required
                                                // onChange={(e) => setimage(e.target.value)}
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
                                                    required
                                                    onChange={(e) => setpassword(e.target.value)}

                                                />
                                            </div>
                                            <div className="form-group mb-4">
                                                <label><strong>Comfirm Password</strong></label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="comfirmpassword"
                                                    placeholder="comfirmpassword"
                                                    // value={comfirmpassword}
                                                    required
                                                // onChange={(e) => setomfirm(e.target.value)}

                                                />
                                            </div>

                                            <div className="form-group mb-4">
                                                <label><strong>Status</strong></label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="status"
                                                    placeholder="status"
                                                    // value={status}
                                                    required
                                                // onChange={(e) => setstatus(e.target.value)}

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
