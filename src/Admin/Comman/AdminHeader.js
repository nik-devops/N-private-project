import React from 'react'
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';



export default function AdminHeader() {

    let history = useHistory()

    function handleSubmit(event) {
        event.preventDefault();
        sessionStorage.clear();
        history.push('/')
        window.location.reload(true)
    }


    return (
        <React.Fragment>
            {/* <div className="header-container fixed-top" style={{ borderBottom: "none" }}> */}
            <div className="header-container fixed-top">
                <header className="header navbar navbar-expand-sm" style={{ background: "#fafafa" }}>
                    <ul className="navbar-item theme-brand flex-row  text-center">
                        <div className='col-md-12'>
                            <div className='row'>
                                <li className="nav-item theme-logo">
                                    <a href="">
                                        <img src="/assets/images/logo.png" className="navbar-logo" alt="logo" />
                                    </a>
                                </li>
                            </div>
                        </div>
                    </ul>
                    <ul className="navbar-item flex-row ml-md-auto">
                        <li className="nav-item dropdown user-profile-dropdown">
                            <a
                                href="javascript:void(0);"
                                className="nav-link dropdown-toggle user"
                                id="userProfileDropdown"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                            >
                                <img src="/assets2/logo/user.png" alt="avatar" />
                            </a>
                            <div
                                className="dropdown-menu position-absolute"
                                aria-labelledby="userProfileDropdown">
                                <div className="">
                                    <div className="dropdown-item">
                                        <a className="" href="/admin/profile">
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
                                            My Profile
                                        </a>
                                    </div>


                                    <div className="dropdown-item">
                                        <a className="" onClick={handleSubmit}>
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
                                                className="feather feather-log-out"
                                            >
                                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                                <polyline points="16 17 21 12 16 7" />
                                                <line x1={21} y1={12} x2={9} y2={12} />
                                            </svg>
                                            Sign Out
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </header>
            </div>


            <div className="sub-header-container">
                <header className="header navbar navbar-expand-sm">
                    <a
                        href="javascript:void(0);"
                        className="sidebarCollapse"
                        data-placement="bottom"
                    >
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
                            className="feather feather-menu"
                        >
                            <line x1={3} y1={12} x2={21} y2={12} />
                            <line x1={3} y1={6} x2={21} y2={6} />
                            <line x1={3} y1={18} x2={21} y2={18} />
                        </svg>
                    </a>
                    <ul className="navbar-nav flex-row">
                        <li style={{ background: "none" }}>
                            <div className="page-header">
                                <nav className="breadcrumb-one" aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item" >
                                            <a href='javascript:void(0);'
                                            ><b style={{ color: "black" }} >Dashboard</b></a>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </li>
                    </ul>
                </header>
            </div>

        </React.Fragment>

    )
}
