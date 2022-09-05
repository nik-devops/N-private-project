import React from 'react'
import "./welcomepage.css"

export default function Welcomepage() {
    return (
        <React.Fragment>
            <body className='error404 text-center'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 mr-auto mt-5 text-md-left text-center">
                            <a href="" className="ml-md-5">
                                <img
                                    alt="image-404"
                                    src="/assets/logo/naseeb-logo.png"
                                    className="theme-logos"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container-fluid error-content">
                    <div className="">
                        <h1 className="error-number">Welcome</h1>
                        <p className="mini-text">Welcome To Naseeb</p>
                        {/* <p className="error-text mb-4 mt-1">
                            The is welcome page and most-welcome to all
                        </p> */}
                        <a href="/admin/login" className="btn btn-primary mt-5">
                            Admin
                        </a>
                        <a href="/master/login" className="btn btn-primary mt-5 mx-3">
                            Master
                        </a>
                    </div>
                </div>
            </body>
        </React.Fragment>
    )
}
