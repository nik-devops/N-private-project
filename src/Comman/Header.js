import React from 'react'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


export default function Header() {
    return (
        <React.Fragment>
            <header>
                <div className="container">
                    <Navbar className="navbar navbar-expand-md navbar-dark fixed-top bg-white">
                        <a className="navbar-brand" href="#">
                            <img src="assets/images/logo.png" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav  ml-auto">
                                <li className="active">
                                    <Nav.Link href="/aboutbph">
                                        <span className="deskdisplay">Know more<br />about BPH
                                        </span>
                                        <span className="mobdisplay">Know more about BPH
                                        </span>
                                    </Nav.Link >
                                </li>
                                <li>
                                    <a data-toggle="collapse" href='#'
                                        data-target=".navbar-collapse.show">
                                        <span className="deskdisplay">Test your BPH<br />Severity </span>
                                        <span className="mobdisplay">Test your BPH Severity </span>
                                    </a>
                                </li>
                                <li>
                                    <Nav.Link href='/chemistlocator'
                                        data-target=".navbar-collapse.show">
                                        <span className="deskdisplay">Chemist<br />Locator</span> <span
                                            className="mobdisplay">Chemist Locator</span>
                                    </Nav.Link >
                                </li>
                                <li>
                                    <a href='/specialistlocator'
                                        data-target=".navbar-collapse.show">
                                        <span className="deskdisplay">Specialist<br />Locator</span><span
                                            className="mobdisplay">Specialist Locator</span>
                                    </a>
                                </li>
                                <li><a data-toggle="collapse" href='#'
                                    data-target=".navbar-collapse.show">
                                    <span className="deskdisplay"> Washroom<br />Locator</span><span
                                        className="mobdisplay"> Washroom Locator</span>
                                </a>
                                </li>
                                <li>
                                    <a data-toggle="modal" href='#' data-target="#myModal">
                                        <span className="deskdisplay">Dose<br />Reminder</span>
                                        <span className="mobdisplay">Dose Reminder</span>
                                    </a>
                                </li>
                                <li><a href='/bookappointment'
                                    data-target=".navbar-collapse.show">
                                    <span className="deskdisplay">Book an<br />Appointment</span>
                                    <span
                                        className="mobdisplay">Book an Appointment</span>
                                </a>
                                </li>
                                <li><a data-toggle="collapse" href='#'
                                    data-target=".navbar-collapse.show">
                                    <span className="deskdisplay">Your Relief<br />Hub</span>
                                    <span className="mobdisplay">Your Relief Hub</span>
                                </a>
                                </li>
                            </ul>
                        </div>
                    </Navbar>
                </div>
            </header>
        </React.Fragment>
    )
}
