import React from 'react'


export default function NavBarWar() {
    return (
        <React.Fragment>
            <header>
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-white">
                        <a className="navbar-brand" href="#">
                            <img src="assets/images/logo.png" style={{ marginTop: "20px" }} />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapsibleNavbar"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav  ml-auto">
                                <li>
                                    <a href="#aboutbph">
                                        <span className="deskdisplay">
                                            Know more
                                            <br />
                                            about BPH
                                        </span>
                                        <span className="mobdisplay">Know more about BPH</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#testbph" >

                                        <span className="deskdisplay">
                                            Test your BPH
                                            <br />
                                            Severity
                                        </span>
                                        <span className="mobdisplay">Test your BPH Severity </span>
                                    </a>
                                </li>
                                <li>
                                    <a data-toggle="collapse" data-target=".navbar-collapse.show">
                                        <span className="deskdisplay">
                                            Chemist
                                            <br />
                                            Locator
                                        </span>
                                        <span className="mobdisplay">Chemist Locator</span>
                                    </a>
                                </li>
                                <li>
                                    <a data-toggle="collapse" data-target=".navbar-collapse.show">
                                        <span className="deskdisplay">
                                            Specialist
                                            <br />
                                            Locator
                                        </span>
                                        <span className="mobdisplay">Specialist Locator</span>
                                    </a>
                                </li>
                                <li>
                                    <a data-toggle="collapse" data-target=".navbar-collapse.show">
                                        <span className="deskdisplay">

                                            Washroom
                                            <br />
                                            Locator
                                        </span>
                                        <span className="mobdisplay"> Washroom Locator</span>
                                    </a>
                                </li>
                                <li>
                                    <a data-toggle="modal" data-target="#myModal">
                                        <span className="deskdisplay">
                                            Dose
                                            <br />
                                            Reminder
                                        </span>
                                        <span className="mobdisplay">Dose Reminder</span>
                                    </a>
                                </li>
                                <li>
                                    <a data-toggle="collapse" data-target=".navbar-collapse.show">
                                        <span className="deskdisplay">
                                            Book an
                                            <br />
                                            Appointment
                                        </span>
                                        <span className="mobdisplay">Book an Appointment</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        data-toggle="collapse"
                                        data-target=".navbar-collapse.show"
                                        style={{ cursor: "pointer" }}
                                    >
                                        <span className="deskdisplay">
                                            Your Relief
                                            <br />
                                            Hub
                                        </span>
                                        <span className="mobdisplay">Your Relief Hub</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>

        </React.Fragment>
    )
}
