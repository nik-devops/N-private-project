import React from 'react'
import AdminHeader from '../Comman/AdminHeader'
import AdminSidebar from '../Comman/AdminSidebar'
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from "react"
import api from '../../Comman_Admin/axios';
// import "./main.css";
import "./Admin.css";
import "./mok.css";
// import "./stu.css";
import "./googlefont.css"
// import "./dashboard2.css"







export default function AdminDashboard() {
    const [user, setuser] = useState([])

    let history = useHistory();

    useEffect(() => {
        adminmasterlist()
    }, [])




    function adminmasterlist(req, res) {


        try {
            let customToken = sessionStorage.getItem('customToken');
            if (customToken) {
                let headers = {
                    Authorization:
                        "Bearer " + customToken,
                    "Content-Type": "application/json",
                };

                api.get(`/admin/dashboard/count`, { headers })
                    .then(res => {
                        const tableData = res.data.data;
                        setuser(tableData)
                    })
            }
        } catch (err) {
            res.status(404).json({ success: false, message: err.message })
        }

    }

    return (
        <React.Fragment>
            <AdminHeader />
            <div className="main-container" id="container">
                <AdminSidebar />
                <div id="content" className="main-content">
                    <div className="layout-px-spacing">
                        <div className="row layout-top-spacing">
                            <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                                <div className="row widget-statistic">
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                        <div className="widget widget-one_hybrid widget-followers">
                                            <a
                                                href='/admin/mr'
                                                data-active="true"
                                                aria-expanded="true"
                                                className="dropdown-toggle"
                                            >
                                                <div className="widget-heading">
                                                    <div className="w-icon">
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
                                                            className="feather feather-users"
                                                        >
                                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                                            <circle cx={9} cy={7} r={4} />
                                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                                        </svg>
                                                    </div>

                                                    <p className="w-value">{user.clientcount}</p>
                                                    <h5 className="">Total MR</h5>
                                                </div>
                                            </a>
                                            <div className="widget-content">
                                                <div className="w-chart">
                                                    <div id="hybrid_followers" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                        <div className="widget widget-one_hybrid widget-referral">
                                            <a
                                                href='/admin/chemist'
                                                data-active="true"
                                                aria-expanded="true"
                                                className="dropdown-toggle"
                                            >
                                                <div className="widget-heading">
                                                    <div className="w-icon">
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
                                                            className="feather feather-link"
                                                        >
                                                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                                        </svg>
                                                    </div>
                                                    <p className="w-value">{user.mastercount}</p>
                                                    <h5 className="">Chemist</h5>
                                                </div>
                                            </a>
                                            <div className="widget-content">
                                                <div className="w-chart">
                                                    <div id="hybrid_followers1" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                        <div className="widget widget-one_hybrid widget-referral" style={{ background: "#FFD700" }}>
                                            <a
                                                href='/admin/specialist'
                                                data-active="true"
                                                aria-expanded="true"
                                                className="dropdown-toggle"
                                            >
                                                <div className="widget-heading">
                                                    <div className="w-icon">
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
                                                            className="feather feather-link"
                                                        >
                                                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                                        </svg>
                                                    </div>
                                                    <p className="w-value">{user.mastercount}</p>
                                                    <h5 className="">Specialist</h5>
                                                </div>
                                            </a>
                                            <div className="widget-content">
                                                <div className="w-chart">
                                                    <div id="hybrid_followers1" />
                                                </div>
                                            </div>
                                        </div>
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
