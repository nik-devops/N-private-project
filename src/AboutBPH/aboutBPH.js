import React from 'react'
import "./About.css"

export default function AboutBPH() {
    return (
        <React.Fragment>
            <section id="addbph">
                <figure>
                    <img
                        // routerlink="/"
                        src="/assets/images/handnew.jpg"
                        style={{ cursor: "pointer" }}
                        className="img-fluid"
                    />
                </figure>
                <div className="container">
                    <div className="sectiontitle text-center mb-4 mt-5">
                        <h2 className="m-0"> DOCTOR CONSENT FORM</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-group">
                                <input
                                    name="txtname"
                                    type="text"
                                    id="txtname"
                                    className="form-control lh-25 mb-10"
                                    tabIndex={1}
                                    aria-required="true"
                                    aria-invalid="false"
                                    placeholder="Doctor Name"
                                    required=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-group">
                                <input
                                    name="txtqualification"
                                    type="text"
                                    id="txtqualification"
                                    className="form-control lh-25 mb-10"
                                    tabIndex={2}
                                    aria-required="true"
                                    aria-invalid="false"
                                    placeholder="Qualification"
                                    required=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="form-group">
                                <input
                                    name="txtspec"
                                    type="text"
                                    id="txtspec"
                                    className="form-control lh-25 mb-10"
                                    tabIndex={3}
                                    aria-required="true"
                                    aria-invalid="false"
                                    placeholder="Speciality"
                                    required=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="form-group">
                                <input
                                    name="txtclinicname"
                                    type="text"
                                    id="txtclinicname"
                                    className="form-control lh-25 mb-10"
                                    tabIndex={4}
                                    aria-required="true"
                                    aria-invalid="false"
                                    placeholder="Clinic Name"
                                    required=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-group">
                                <input
                                    name="txtphone"
                                    type="text"
                                    id="txtphone"
                                    className="form-control lh-25 mb-10"
                                    tabIndex={5}
                                    aria-required="true"
                                    aria-invalid="false"
                                    placeholder="Primary Phone"
                                    required=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-group">
                                <input
                                    name="txtsecondary"
                                    type="text"
                                    id="txtsecondary"
                                    className="form-control lh-25 mb-10"
                                    tabIndex={6}
                                    aria-required="true"
                                    aria-invalid="false"
                                    placeholder="Secondary Phone"
                                />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="form-group">
                                <input
                                    name="txtemail"
                                    type="text"
                                    id="txtemail"
                                    className="form-control lh-25 mb-30"
                                    tabIndex={7}
                                    aria-required="true"
                                    aria-invalid="false"
                                    placeholder="Email"
                                    required=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 upset">
                            <div className=" mb-4">
                                <div className="col-sm-12">
                                    <div className="row ">
                                        <h5>AVAILABILITY</h5>
                                    </div>
                                </div>
                                <a id="" className=" btn btn-info ">
                                    From Mon to Fri
                                </a>
                                &nbsp;
                                <a id="" className=" btn btn-primary">
                                    From Mon to Sat
                                </a>
                            </div>
                        </div>
                        <div id="uptest" className="">
                            <div>
                                <input
                                    type="hidden"
                                    name="hfcount"
                                    id="hfcount"
                                    defaultValue={2}
                                    className="form-control"
                                />
                                <input
                                    type="hidden"
                                    name=""
                                    id=""
                                    defaultValue="Days"
                                    className="form-control"
                                />
                                <input
                                    type="hidden"
                                    name=""
                                    id=""
                                    defaultValue="From"
                                    className="form-control"
                                />
                                <input
                                    type="hidden"
                                    name=""
                                    id=""
                                    defaultValue="To"
                                    className="form-control"
                                />
                                <input
                                    type="hidden"
                                    name=""
                                    id=""
                                    defaultValue={1}
                                    className="form-control"
                                />
                                <div className="row btnbox">
                                    <div className="col-lg-4 col-sm-4">
                                        <div className="form-group col-sm-12">
                                            <select name="" id="" className="form-control">
                                                <option selected="selected" value="Days">
                                                    Days
                                                </option>
                                                <option value="Monday">Monday</option>
                                                <option value="Tuesday">Tuesday</option>
                                                <option value="Wednesday">Wednesday</option>
                                                <option value="Thusday">Thusday</option>
                                                <option value="Friday">Friday</option>
                                                <option value="Saturday">Saturday</option>
                                                <option value="Sunday">Sunday</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-3">
                                        <div className="form-group col-sm-12">
                                            <select name="" id="" className="form-control">
                                                <option selected="selected" value="From">
                                                    From
                                                </option>
                                                <option value="1:00 am">1:00 am</option>
                                                <option value="2:00 am">2:00 am</option>
                                                <option value="3:00 am">3:00 am</option>
                                                <option value="4:00 am">4:00 am</option>
                                                <option value="5:00 am">5:00 am</option>
                                                <option value="6:00 am">6:00 am</option>
                                                <option value="7:00 am">7:00 am</option>
                                                <option value="8:00 am">8:00 am</option>
                                                <option value="9:00 am">9:00 am</option>
                                                <option value="10:00 am">10:00 am</option>
                                                <option value="11:00 am">11:00 am</option>
                                                <option value="12:00 am">12:00 am</option>
                                                <option value="1:00 pm">1:00 pm</option>
                                                <option value="2:00 pm">2:00 pm</option>
                                                <option value="3:00 pm">3:00 pm</option>
                                                <option value="4:00 pm">4:00 pm</option>
                                                <option value="5:00 pm">5:00 pm</option>
                                                <option value="6:00 pm">6:00 pm</option>
                                                <option value="7:00 pm">7:00 pm</option>
                                                <option value="8:00 pm">8:00 pm</option>
                                                <option value="9:00 pm">9:00 pm</option>
                                                <option value="10:00 pm">10:00 pm</option>
                                                <option value="11:00 pm">11:00 pm</option>
                                                <option value="12:00 pm">12:00 pm</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-3">
                                        <div className="form-group col-sm-12">
                                            <select name="" id="" className="form-control">
                                                <option selected="selected" value="To">
                                                    To
                                                </option>
                                                <option value="1:00 am">1:00 am</option>
                                                <option value="2:00 am">2:00 am</option>
                                                <option value="3:00 am">3:00 am</option>
                                                <option value="4:00 am">4:00 am</option>
                                                <option value="5:00 am">5:00 am</option>
                                                <option value="6:00 am">6:00 am</option>
                                                <option value="7:00 am">7:00 am</option>
                                                <option value="8:00 am">8:00 am</option>
                                                <option value="9:00 am">9:00 am</option>
                                                <option value="10:00 am">10:00 am</option>
                                                <option value="11:00 am">11:00 am</option>
                                                <option value="12:00 am">12:00 am</option>
                                                <option value="1:00 pm">1:00 pm</option>
                                                <option value="2:00 pm">2:00 pm</option>
                                                <option value="3:00 pm">3:00 pm</option>
                                                <option value="4:00 pm">4:00 pm</option>
                                                <option value="5:00 pm">5:00 pm</option>
                                                <option value="6:00 pm">6:00 pm</option>
                                                <option value="7:00 pm">7:00 pm</option>
                                                <option value="8:00 pm">8:00 pm</option>
                                                <option value="9:00 pm">9:00 pm</option>
                                                <option value="10:00 pm">10:00 pm</option>
                                                <option value="11:00 pm">11:00 pm</option>
                                                <option value="12:00 pm">12:00 pm</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-2">
                                        <a>
                                            <img src="https://img.icons8.com/dusk/45/000000/delete-sign.png" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <input type="hidden" name="" id="" />
                                <input type="hidden" name="" id="" />
                                <input type="hidden" name="" id="" />
                                <input type="hidden" name="" id="" defaultValue={2} />
                                <div className="row btnbox">
                                    <div className="col-lg-4 col-sm-4">
                                        <div className="form-group col-sm-12">
                                            <select name="" id="" className="form-control">
                                                <option value="Days">Days</option>
                                                <option value="Monday">Monday</option>
                                                <option value="Tuesday">Tuesday</option>
                                                <option value="Wednesday">Wednesday</option>
                                                <option value="Thusday">Thusday</option>
                                                <option value="Friday">Friday</option>
                                                <option value="Saturday">Saturday</option>
                                                <option value="Sunday">Sunday</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-3">
                                        <div className="form-group col-sm-12">
                                            <select
                                                name="rptest$ctl02$ddstarttime"
                                                id="rptest_ddstarttime_1"
                                                className="form-control"
                                            >
                                                <option value="From">From</option>
                                                <option value="1:00 am">1:00 am</option>
                                                <option value="2:00 am">2:00 am</option>
                                                <option value="3:00 am">3:00 am</option>
                                                <option value="4:00 am">4:00 am</option>
                                                <option value="5:00 am">5:00 am</option>
                                                <option value="6:00 am">6:00 am</option>
                                                <option value="7:00 am">7:00 am</option>
                                                <option value="8:00 am">8:00 am</option>
                                                <option value="9:00 am">9:00 am</option>
                                                <option value="10:00 am">10:00 am</option>
                                                <option value="11:00 am">11:00 am</option>
                                                <option value="12:00 am">12:00 am</option>
                                                <option value="1:00 pm">1:00 pm</option>
                                                <option value="2:00 pm">2:00 pm</option>
                                                <option value="3:00 pm">3:00 pm</option>
                                                <option value="4:00 pm">4:00 pm</option>
                                                <option value="5:00 pm">5:00 pm</option>
                                                <option value="6:00 pm">6:00 pm</option>
                                                <option value="7:00 pm">7:00 pm</option>
                                                <option value="8:00 pm">8:00 pm</option>
                                                <option value="9:00 pm">9:00 pm</option>
                                                <option value="10:00 pm">10:00 pm</option>
                                                <option value="11:00 pm">11:00 pm</option>
                                                <option value="12:00 pm">12:00 pm</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-3">
                                        <div className="form-group col-sm-12">
                                            <select
                                                name="rptest$ctl02$ddentime"
                                                id="rptest_ddentime_1"
                                                className="form-control"
                                            >
                                                <option value="To">To</option>
                                                <option value="1:00 am">1:00 am</option>
                                                <option value="2:00 am">2:00 am</option>
                                                <option value="3:00 am">3:00 am</option>
                                                <option value="4:00 am">4:00 am</option>
                                                <option value="5:00 am">5:00 am</option>
                                                <option value="6:00 am">6:00 am</option>
                                                <option value="7:00 am">7:00 am</option>
                                                <option value="8:00 am">8:00 am</option>
                                                <option value="9:00 am">9:00 am</option>
                                                <option value="10:00 am">10:00 am</option>
                                                <option value="11:00 am">11:00 am</option>
                                                <option value="12:00 am">12:00 am</option>
                                                <option value="1:00 pm">1:00 pm</option>
                                                <option value="2:00 pm">2:00 pm</option>
                                                <option value="3:00 pm">3:00 pm</option>
                                                <option value="4:00 pm">4:00 pm</option>
                                                <option value="5:00 pm">5:00 pm</option>
                                                <option value="6:00 pm">6:00 pm</option>
                                                <option value="7:00 pm">7:00 pm</option>
                                                <option value="8:00 pm">8:00 pm</option>
                                                <option value="9:00 pm">9:00 pm</option>
                                                <option value="10:00 pm">10:00 pm</option>
                                                <option value="11:00 pm">11:00 pm</option>
                                                <option value="12:00 pm">12:00 pm</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-2">
                                        <a
                                            id="rptest_ctl02_lkshippingselect"
                                            title="Add details for the week by clicking here"
                                        >
                                            <img src="https://img.icons8.com/nolan/50/add.png" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="col-sm-12">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div
                                            id="dvMap"
                                            style={{
                                                height: 300,
                                                marginBottom: 20,
                                                position: "relative",
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    height: "100%",
                                                    width: "100%",
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    backgroundColor: "rgb(229, 227, 223)"
                                                }}
                                            >
                                                <div
                                                    className="gm-style"
                                                    style={{
                                                        position: "absolute",
                                                        zIndex: 0,
                                                        left: 0,
                                                        top: 0,
                                                        height: "100%",
                                                        width: "100%",
                                                        padding: 0,
                                                        borderWidth: 0,
                                                        margin: 0
                                                    }}
                                                >
                                                    <div
                                                        tabIndex={0}
                                                        style={{
                                                            position: "absolute",
                                                            zIndex: 0,
                                                            left: 0,
                                                            top: 0,
                                                            height: "100%",
                                                            width: "100%",
                                                            padding: 0,
                                                            borderWidth: 0,
                                                            margin: 0,
                                                            cursor:
                                                                'url("https://maps.gstatic.com/mapfiles/openhand_8_8.cur"), default',
                                                            touchAction: "pan-x pan-y"
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                zIndex: 1,
                                                                position: "absolute",
                                                                left: "50%",
                                                                top: "50%",
                                                                width: "100%",
                                                                transform: "translate(0px, 0px)"
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    position: "absolute",
                                                                    left: 0,
                                                                    top: 0,
                                                                    zIndex: 100,
                                                                    width: "100%"
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        position: "absolute",
                                                                        left: 0,
                                                                        top: 0,
                                                                        zIndex: 0
                                                                    }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            position: "absolute",
                                                                            zIndex: 982,
                                                                            transform: "matrix(1, 0, 0, 1, 0, -246)"
                                                                        }}
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                position: "absolute",
                                                                                left: 0,
                                                                                top: 256,
                                                                                width: 256,
                                                                                height: 256
                                                                            }}
                                                                        >
                                                                            <div style={{ width: 256, height: 256 }} />
                                                                        </div>
                                                                        <div
                                                                            style={{
                                                                                position: "absolute",
                                                                                left: "-256px",
                                                                                top: 256,
                                                                                width: 256,
                                                                                height: 256
                                                                            }}
                                                                        >
                                                                            <div style={{ width: 256, height: 256 }} />
                                                                        </div>
                                                                        <div
                                                                            style={{
                                                                                position: "absolute",
                                                                                left: "-256px",
                                                                                top: 0,
                                                                                width: 256,
                                                                                height: 256
                                                                            }}
                                                                        >
                                                                            <div style={{ width: 256, height: 256 }} />
                                                                        </div>
                                                                        <div
                                                                            style={{
                                                                                position: "absolute",
                                                                                left: 0,
                                                                                top: 0,
                                                                                width: 256,
                                                                                height: 256
                                                                            }}
                                                                        >
                                                                            <div style={{ width: 256, height: 256 }} />
                                                                        </div>
                                                                        <div
                                                                            style={{
                                                                                position: "absolute",
                                                                                left: 256,
                                                                                top: 0,
                                                                                width: 256,
                                                                                height: 256
                                                                            }}
                                                                        >
                                                                            <div style={{ width: 256, height: 256 }} />
                                                                        </div>
                                                                        <div
                                                                            style={{
                                                                                position: "absolute",
                                                                                left: 256,
                                                                                top: 256,
                                                                                width: 256,
                                                                                height: 256
                                                                            }}
                                                                        >
                                                                            <div style={{ width: 256, height: 256 }} />
                                                                        </div>
                                                                        <div
                                                                            style={{
                                                                                position: "absolute",
                                                                                left: "-512px",
                                                                                top: 256,
                                                                                width: 256,
                                                                                height: 256
                                                                            }}
                                                                        >
                                                                            <div style={{ width: 256, height: 256 }} />
                                                                        </div>
                                                                        <div
                                                                            style={{
                                                                                position: "absolute",
                                                                                left: "-512px",
                                                                                top: 0,
                                                                                width: 256,
                                                                                height: 256
                                                                            }}
                                                                        >
                                                                            <div style={{ width: 256, height: 256 }} />
                                                                        </div>
                                                                        <div
                                                                            style={{
                                                                                position: "absolute",
                                                                                left: 512,
                                                                                top: 0,
                                                                                width: 256,
                                                                                height: 256
                                                                            }}
                                                                        >
                                                                            <div style={{ width: 256, height: 256 }} />
                                                                        </div>
                                                                        <div
                                                                            style={{
                                                                                position: "absolute",
                                                                                left: 512,
                                                                                top: 256,
                                                                                width: 256,
                                                                                height: 256
                                                                            }}
                                                                        >
                                                                            <div style={{ width: 256, height: 256 }} />
                                                                        </div>
                                                                        <div
                                                                            style={{
                                                                                position: "absolute",
                                                                                left: "-768px",
                                                                                top: 256,
                                                                                width: 256,
                                                                                height: 256
                                                                            }}
                                                                        >
                                                                            <div style={{ width: 256, height: 256 }} />
                                                                        </div>
                                                                        <div
                                                                            style={{
                                                                                position: "absolute",
                                                                                left: "-768px",
                                                                                top: 0,
                                                                                width: 256,
                                                                                height: 256
                                                                            }}
                                                                        >
                                                                            <div style={{ width: 256, height: 256 }} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                style={{
                                                                    position: "absolute",
                                                                    left: 0,
                                                                    top: 0,
                                                                    zIndex: 101,
                                                                    width: "100%"
                                                                }}
                                                            ></div>
                                                            <div
                                                                style={{
                                                                    position: "absolute",
                                                                    left: 0,
                                                                    top: 0,
                                                                    zIndex: 102,
                                                                    width: "100%"
                                                                }}
                                                            ></div>
                                                            <div
                                                                style={{
                                                                    position: "absolute",
                                                                    left: 0,
                                                                    top: 0,
                                                                    zIndex: 103,
                                                                    width: "100%"
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        width: 27,
                                                                        height: 43,
                                                                        overflow: "hidden",
                                                                        position: "absolute",
                                                                        left: "-14px",
                                                                        top: "-33px",
                                                                        zIndex: 10
                                                                    }}
                                                                >
                                                                    <img
                                                                        alt=""
                                                                        src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2_hdpi.png"
                                                                        draggable="false"
                                                                        style={{
                                                                            position: "absolute",
                                                                            left: 0,
                                                                            top: 0,
                                                                            width: 27,
                                                                            height: 43,
                                                                            userSelect: "none",
                                                                            border: 0,
                                                                            padding: 0,
                                                                            margin: 0,
                                                                            maxWidth: "none",
                                                                            opacity: 1
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div
                                                                    style={{
                                                                        position: "absolute",
                                                                        left: 0,
                                                                        top: 0,
                                                                        zIndex: -1
                                                                    }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            position: "absolute",
                                                                            zIndex: 982,
                                                                            transform: "matrix(1, 0, 0, 1, 0, -246)"
                                                                        }}
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                width: 256,
                                                                                height: 256,
                                                                                overflow: "hidden",
                                                                                position: "absolute",
                                                                                left: 0,
                                                                                top: 256
                                                                            }}
                                                                        ></div>
                                                                        <div
                                                                            style={{
                                                                                width: 256,
                                                                                height: 256,
                                                                                overflow: "hidden",
                                                                                position: "absolute",
                                                                                left: "-256px",
                                                                                top: 256
                                                                            }}
                                                                        ></div>
                                                                        <div
                                                                            style={{
                                                                                width: 256,
                                                                                height: 256,
                                                                                overflow: "hidden",
                                                                                position: "absolute",
                                                                                left: "-256px",
                                                                                top: 0
                                                                            }}
                                                                        ></div>
                                                                        <div
                                                                            style={{
                                                                                width: 256,
                                                                                height: 256,
                                                                                overflow: "hidden",
                                                                                position: "absolute",
                                                                                left: 0,
                                                                                top: 0
                                                                            }}
                                                                        ></div>
                                                                        <div
                                                                            style={{
                                                                                width: 256,
                                                                                height: 256,
                                                                                overflow: "hidden",
                                                                                position: "absolute",
                                                                                left: 256,
                                                                                top: 0
                                                                            }}
                                                                        ></div>
                                                                        <div
                                                                            style={{
                                                                                width: 256,
                                                                                height: 256,
                                                                                overflow: "hidden",
                                                                                position: "absolute",
                                                                                left: 256,
                                                                                top: 256
                                                                            }}
                                                                        ></div>
                                                                        <div
                                                                            style={{
                                                                                width: 256,
                                                                                height: 256,
                                                                                overflow: "hidden",
                                                                                position: "absolute",
                                                                                left: "-512px",
                                                                                top: 256
                                                                            }}
                                                                        ></div>
                                                                        <div
                                                                            style={{
                                                                                width: 256,
                                                                                height: 256,
                                                                                overflow: "hidden",
                                                                                position: "absolute",
                                                                                left: "-512px",
                                                                                top: 0
                                                                            }}
                                                                        ></div>
                                                                        <div
                                                                            style={{
                                                                                width: 256,
                                                                                height: 256,
                                                                                overflow: "hidden",
                                                                                position: "absolute",
                                                                                left: 512,
                                                                                top: 0
                                                                            }}
                                                                        ></div>
                                                                        <div
                                                                            style={{
                                                                                width: 256,
                                                                                height: 256,
                                                                                overflow: "hidden",
                                                                                position: "absolute",
                                                                                left: 512,
                                                                                top: 256
                                                                            }}
                                                                        ></div>
                                                                        <div
                                                                            style={{
                                                                                width: 256,
                                                                                height: 256,
                                                                                overflow: "hidden",
                                                                                position: "absolute",
                                                                                left: "-768px",
                                                                                top: 256
                                                                            }}
                                                                        ></div>
                                                                        <div
                                                                            style={{
                                                                                width: 256,
                                                                                height: 256,
                                                                                overflow: "hidden",
                                                                                position: "absolute",
                                                                                left: "-768px",
                                                                                top: 0
                                                                            }}
                                                                        ></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                style={{
                                                                    position: "absolute",
                                                                    left: 0,
                                                                    top: 0,
                                                                    zIndex: 0
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        position: "absolute",
                                                                        zIndex: 982,
                                                                        transform: "matrix(1, 0, 0, 1, 0, -246)"
                                                                    }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            position: "absolute",
                                                                            left: 0,
                                                                            top: 256,
                                                                            width: 256,
                                                                            height: 256,
                                                                            transition: "opacity 200ms linear 0s"
                                                                        }}
                                                                    >
                                                                        <img
                                                                            draggable="false"
                                                                            alt=""
                                                                            role="presentation"
                                                                            src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i18!2i131072!3i131072!4i256!2m3!1e0!2sm!3i527246092!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&key=AIzaSyByJrFV8OQHYmW4kM0krHQtRuOeLuPrZ5o&token=42379"
                                                                            style={{
                                                                                width: 256,
                                                                                height: 256,
                                                                                userSelect: "none",
                                                                                border: 0,
                                                                                padding: 0,
                                                                                margin: 0,
                                                                                maxWidth: "none"
                                                                            }}
                                                                        />
                                                                    </div>
                                                                    <div
                                                                        style={{
                                                                            position: "absolute",
                                                                            left: "-256px",
                                                                            top: 256,
                                                                            width: 256,
                                                                            height: 256,
                                                                            transition: "opacity 200ms linear 0s"
                                                                        }}
                                                                    >
                                                                        <img
                                                                            draggable="false"
                                                                            alt=""
                                                                            role="presentation"
                                                                            src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i18!2i131071!3i131072!4i256!2m3!1e0!2sm!3i527246092!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&key=AIzaSyByJrFV8OQHYmW4kM0krHQtRuOeLuPrZ5o&token=72622"
                                                                            style={{
                                                                                width: 256,
                                                                                height: 256,
                                                                                userSelect: "none",
                                                                                border: 0,
                                                                                padding: 0,
                                                                                margin: 0,
                                                                                maxWidth: "none"
                                                                            }}
                                                                        />
                                                                    </div>
                                                                    <div
                                                                        style={{
                                                                            position: "absolute",
                                                                            left: "-256px",
                                                                            top: 0,
                                                                            width: 256,
                                                                            height: 256,
                                                                            transition: "opacity 200ms linear 0s"
                                                                        }}
                                                                    >
                                                                        <img
                                                                            draggable="false"
                                                                            alt=""
                                                                            role="presentation"
                                                                            src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i18!2i131071!3i131071!4i256!2m3!1e0!2sm!3i527246092!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&key=AIzaSyByJrFV8OQHYmW4kM0krHQtRuOeLuPrZ5o&token=60532"
                                                                            style={{
                                                                                width: 256,
                                                                                height: 256,
                                                                                userSelect: "none",
                                                                                border: 0,
                                                                                padding: 0,
                                                                                margin: 0,
                                                                                maxWidth: "none"
                                                                            }}
                                                                        />
                                                                    </div>
                                                                    <div
                                                                        style={{
                                                                            position: "absolute",
                                                                            left: 0,
                                                                            top: 0,
                                                                            width: 256,
                                                                            height: 256,
                                                                            transition: "opacity 200ms linear 0s"
                                                                        }}
                                                                    >
                                                                        <img
                                                                            draggable="false"
                                                                            alt=""
                                                                            role="presentation"
                                                                            src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i18!2i131072!3i131071!4i256!2m3!1e0!2sm!3i527246092!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&key=AIzaSyByJrFV8OQHYmW4kM0krHQtRuOeLuPrZ5o&token=30289"
                                                                            style={{
                                                                                width: 256,
                                                                                height: 256,
                                                                                userSelect: "none",
                                                                                border: 0,
                                                                                padding: 0,
                                                                                margin: 0,
                                                                                maxWidth: "none"
                                                                            }}
                                                                        />
                                                                    </div>
                                                                    <div
                                                                        style={{
                                                                            position: "absolute",
                                                                            left: 256,
                                                                            top: 0,
                                                                            width: 256,
                                                                            height: 256,
                                                                            transition: "opacity 200ms linear 0s"
                                                                        }}
                                                                    >
                                                                        <img
                                                                            draggable="false"
                                                                            alt=""
                                                                            role="presentation"
                                                                            src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i18!2i131073!3i131071!4i256!2m3!1e0!2sm!3i527241856!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&key=AIzaSyByJrFV8OQHYmW4kM0krHQtRuOeLuPrZ5o&token=32651"
                                                                            style={{
                                                                                width: 256,
                                                                                height: 256,
                                                                                userSelect: "none",
                                                                                border: 0,
                                                                                padding: 0,
                                                                                margin: 0,
                                                                                maxWidth: "none"
                                                                            }}
                                                                        />
                                                                    </div>
                                                                    <div
                                                                        style={{
                                                                            position: "absolute",
                                                                            left: 256,
                                                                            top: 256,
                                                                            width: 256,
                                                                            height: 256,
                                                                            transition: "opacity 200ms linear 0s"
                                                                        }}
                                                                    >
                                                                        <img
                                                                            draggable="false"
                                                                            alt=""
                                                                            role="presentation"
                                                                            src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i18!2i131073!3i131072!4i256!2m3!1e0!2sm!3i527241856!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&key=AIzaSyByJrFV8OQHYmW4kM0krHQtRuOeLuPrZ5o&token=44741"
                                                                            style={{
                                                                                width: 256,
                                                                                height: 256,
                                                                                userSelect: "none",
                                                                                border: 0,
                                                                                padding: 0,
                                                                                margin: 0,
                                                                                maxWidth: "none"
                                                                            }}
                                                                        />
                                                                    </div>
                                                                    <div
                                                                        style={{
                                                                            position: "absolute",
                                                                            left: "-512px",
                                                                            top: 256,
                                                                            width: 256,
                                                                            height: 256,
                                                                            transition: "opacity 200ms linear 0s"
                                                                        }}
                                                                    >
                                                                        <img
                                                                            draggable="false"
                                                                            alt=""
                                                                            role="presentation"
                                                                            src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i18!2i131070!3i131072!4i256!2m3!1e0!2sm!3i527246092!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&key=AIzaSyByJrFV8OQHYmW4kM0krHQtRuOeLuPrZ5o&token=102865"
                                                                            style={{
                                                                                width: 256,
                                                                                height: 256,
                                                                                userSelect: "none",
                                                                                border: 0,
                                                                                padding: 0,
                                                                                margin: 0,
                                                                                maxWidth: "none"
                                                                            }}
                                                                        />
                                                                    </div>
                                                                    <div
                                                                        style={{
                                                                            position: "absolute",
                                                                            left: "-512px",
                                                                            top: 0,
                                                                            width: 256,
                                                                            height: 256,
                                                                            transition: "opacity 200ms linear 0s"
                                                                        }}
                                                                    >
                                                                        <img
                                                                            draggable="false"
                                                                            alt=""
                                                                            role="presentation"
                                                                            src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i18!2i131070!3i131071!4i256!2m3!1e0!2sm!3i527246092!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&key=AIzaSyByJrFV8OQHYmW4kM0krHQtRuOeLuPrZ5o&token=90775"
                                                                            style={{
                                                                                width: 256,
                                                                                height: 256,
                                                                                userSelect: "none",
                                                                                border: 0,
                                                                                padding: 0,
                                                                                margin: 0,
                                                                                maxWidth: "none"
                                                                            }}
                                                                        />
                                                                    </div>
                                                                    <div
                                                                        style={{
                                                                            position: "absolute",
                                                                            left: 512,
                                                                            top: 0,
                                                                            width: 256,
                                                                            height: 256,
                                                                            transition: "opacity 200ms linear 0s"
                                                                        }}
                                                                    >
                                                                        <img
                                                                            draggable="false"
                                                                            alt=""
                                                                            role="presentation"
                                                                            src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i18!2i131074!3i131071!4i256!2m3!1e0!2sm!3i527241856!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&key=AIzaSyByJrFV8OQHYmW4kM0krHQtRuOeLuPrZ5o&token=2408"
                                                                            style={{
                                                                                width: 256,
                                                                                height: 256,
                                                                                userSelect: "none",
                                                                                border: 0,
                                                                                padding: 0,
                                                                                margin: 0,
                                                                                maxWidth: "none"
                                                                            }}
                                                                        />
                                                                    </div>
                                                                    <div
                                                                        style={{
                                                                            position: "absolute",
                                                                            left: 512,
                                                                            top: 256,
                                                                            width: 256,
                                                                            height: 256,
                                                                            transition: "opacity 200ms linear 0s"
                                                                        }}
                                                                    >
                                                                        <img
                                                                            draggable="false"
                                                                            alt=""
                                                                            role="presentation"
                                                                            src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i18!2i131074!3i131072!4i256!2m3!1e0!2sm!3i527241856!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&key=AIzaSyByJrFV8OQHYmW4kM0krHQtRuOeLuPrZ5o&token=14498"
                                                                            style={{
                                                                                width: 256,
                                                                                height: 256,
                                                                                userSelect: "none",
                                                                                border: 0,
                                                                                padding: 0,
                                                                                margin: 0,
                                                                                maxWidth: "none"
                                                                            }}
                                                                        />
                                                                    </div>
                                                                    <div
                                                                        style={{
                                                                            position: "absolute",
                                                                            left: "-768px",
                                                                            top: 256,
                                                                            width: 256,
                                                                            height: 256,
                                                                            transition: "opacity 200ms linear 0s"
                                                                        }}
                                                                    >
                                                                        <img
                                                                            draggable="false"
                                                                            alt=""
                                                                            role="presentation"
                                                                            src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i18!2i131069!3i131072!4i256!2m3!1e0!2sm!3i527246092!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&key=AIzaSyByJrFV8OQHYmW4kM0krHQtRuOeLuPrZ5o&token=85638"
                                                                            style={{
                                                                                width: 256,
                                                                                height: 256,
                                                                                userSelect: "none",
                                                                                border: 0,
                                                                                padding: 0,
                                                                                margin: 0,
                                                                                maxWidth: "none"
                                                                            }}
                                                                        />
                                                                    </div>
                                                                    <div
                                                                        style={{
                                                                            position: "absolute",
                                                                            left: "-768px",
                                                                            top: 0,
                                                                            width: 256,
                                                                            height: 256,
                                                                            transition: "opacity 200ms linear 0s"
                                                                        }}
                                                                    >
                                                                        <img
                                                                            draggable="false"
                                                                            alt=""
                                                                            role="presentation"
                                                                            src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i18!2i131069!3i131071!4i256!2m3!1e0!2sm!3i527246092!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&key=AIzaSyByJrFV8OQHYmW4kM0krHQtRuOeLuPrZ5o&token=73548"
                                                                            style={{
                                                                                width: 256,
                                                                                height: 256,
                                                                                userSelect: "none",
                                                                                border: 0,
                                                                                padding: 0,
                                                                                margin: 0,
                                                                                maxWidth: "none"
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="gm-style-pbc"
                                                            style={{
                                                                zIndex: 2,
                                                                position: "absolute",
                                                                height: "100%",
                                                                width: "100%",
                                                                padding: 0,
                                                                borderWidth: 0,
                                                                margin: 0,
                                                                left: 0,
                                                                top: 0,
                                                                opacity: 0,
                                                                transitionDuration: "0.8s"
                                                            }}
                                                        >
                                                            <p className="gm-style-pbt">
                                                                Use ctrl + scroll to zoom the map
                                                            </p>
                                                        </div>
                                                        <div
                                                            style={{
                                                                zIndex: 3,
                                                                position: "absolute",
                                                                height: "100%",
                                                                width: "100%",
                                                                padding: 0,
                                                                borderWidth: 0,
                                                                margin: 0,
                                                                left: 0,
                                                                top: 0,
                                                                touchAction: "pan-x pan-y"
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    zIndex: 4,
                                                                    position: "absolute",
                                                                    left: "50%",
                                                                    top: "50%",
                                                                    width: "100%",
                                                                    transform: "translate(0px, 0px)"
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        position: "absolute",
                                                                        left: 0,
                                                                        top: 0,
                                                                        zIndex: 104,
                                                                        width: "100%"
                                                                    }}
                                                                ></div>
                                                                <div
                                                                    style={{
                                                                        position: "absolute",
                                                                        left: 0,
                                                                        top: 0,
                                                                        zIndex: 105,
                                                                        width: "100%"
                                                                    }}
                                                                ></div>
                                                                <div
                                                                    style={{
                                                                        position: "absolute",
                                                                        left: 0,
                                                                        top: 0,
                                                                        zIndex: 106,
                                                                        width: "100%"
                                                                    }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            width: 27,
                                                                            height: 43,
                                                                            overflow: "hidden",
                                                                            position: "absolute",
                                                                            opacity: 0,
                                                                            left: "-14px",
                                                                            top: "-33px",
                                                                            zIndex: 10
                                                                        }}
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2_hdpi.png"
                                                                            draggable="false"
                                                                            useMap="#gmimap0"
                                                                            style={{
                                                                                position: "absolute",
                                                                                left: 0,
                                                                                top: 0,
                                                                                width: 27,
                                                                                height: 43,
                                                                                userSelect: "none",
                                                                                border: 0,
                                                                                padding: 0,
                                                                                margin: 0,
                                                                                maxWidth: "none",
                                                                                opacity: 1
                                                                            }}
                                                                        />
                                                                        <map name="gmimap0" id="gmimap0">
                                                                            <area
                                                                                log="miw"
                                                                                coords="13.5,0,4,3.75,0,13.5,13.5,43,27,13.5,23,3.75"
                                                                                shape="poly"
                                                                                title=""
                                                                                style={{
                                                                                    cursor: "pointer",
                                                                                    touchAction: "none"
                                                                                }}
                                                                            />
                                                                        </map>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    style={{
                                                                        position: "absolute",
                                                                        left: 0,
                                                                        top: 0,
                                                                        zIndex: 107,
                                                                        width: "100%"
                                                                    }}
                                                                ></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <iframe
                                                        aria-hidden="true"
                                                        frameBorder={0}
                                                        tabIndex={-1}
                                                        style={{
                                                            zIndex: -1,
                                                            position: "absolute",
                                                            width: "100%",
                                                            height: "100%",
                                                            top: 0,
                                                            left: 0,
                                                            border: "none"
                                                        }}
                                                    />
                                                    <div
                                                        style={{
                                                            marginLeft: 5,
                                                            marginRight: 5,
                                                            zIndex: 1000000,
                                                            position: "absolute",
                                                            left: 0,
                                                            bottom: 0
                                                        }}
                                                    >
                                                        <a
                                                            target="_blank"
                                                            rel="noopener"
                                                            href="https://maps.google.com/maps?ll=0.000054,0&z=18&t=m&hl=en-US&gl=US&mapclient=apiv3"
                                                            title="Open this area in Google Maps (opens a new window)"
                                                            style={{
                                                                position: "static",
                                                                overflow: "visible",
                                                                float: "none",
                                                                display: "inline"
                                                            }}
                                                        >
                                                            <div
                                                                style={{ width: 66, height: 26, cursor: "pointer" }}
                                                            >
                                                                <img
                                                                    alt=""
                                                                    src="https://maps.gstatic.com/mapfiles/api-3/images/google4_hdpi.png"
                                                                    draggable="false"
                                                                    style={{
                                                                        position: "absolute",
                                                                        left: 0,
                                                                        top: 0,
                                                                        width: 66,
                                                                        height: 26,
                                                                        userSelect: "none",
                                                                        border: 0,
                                                                        padding: 0,
                                                                        margin: 0
                                                                    }}
                                                                />
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div
                                                        style={{
                                                            backgroundColor: "white",
                                                            padding: "15px 21px",
                                                            border: "1px solid rgb(171, 171, 171)",
                                                            fontFamily: "Roboto, Arial, sans-serif",
                                                            color: "rgb(34, 34, 34)",
                                                            boxSizing: "border-box",
                                                            boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 16px",
                                                            zIndex: 10000002,
                                                            display: "none",
                                                            width: 300,
                                                            height: 180,
                                                            position: "absolute",
                                                            left: 420,
                                                            top: 60
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                padding: "0px 0px 10px",
                                                                fontSize: 16,
                                                                boxSizing: "border-box"
                                                            }}
                                                        >
                                                            Map Data
                                                        </div>
                                                        <div style={{ fontSize: 13 }}>Map data ©2020</div>
                                                        <button
                                                            draggable="false"
                                                            title="Close"
                                                            aria-label="Close"
                                                            type="button"
                                                            className="gm-ui-hover-effect"
                                                            style={{
                                                                background: "none",
                                                                display: "block",
                                                                border: 0,
                                                                margin: 0,
                                                                padding: 0,
                                                                position: "absolute",
                                                                cursor: "pointer",
                                                                userSelect: "none",
                                                                top: 0,
                                                                right: 0,
                                                                width: 37,
                                                                height: 37
                                                            }}
                                                        >
                                                            <img
                                                                src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23000000%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M19%206.41L17.59%205%2012%2010.59%206.41%205%205%206.41%2010.59%2012%205%2017.59%206.41%2019%2012%2013.41%2017.59%2019%2019%2017.59%2013.41%2012z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                                                style={{
                                                                    pointerEvents: "none",
                                                                    display: "block",
                                                                    width: 13,
                                                                    height: 13,
                                                                    margin: 12
                                                                }}
                                                            />
                                                        </button>
                                                    </div>
                                                    <div
                                                        className="gmnoprint"
                                                        style={{
                                                            zIndex: 1000001,
                                                            position: "absolute",
                                                            right: 71,
                                                            bottom: 0,
                                                            width: 86
                                                        }}
                                                    >
                                                        <div
                                                            draggable="false"
                                                            className="gm-style-cc"
                                                            style={{
                                                                userSelect: "none",
                                                                height: 14,
                                                                lineHeight: 14
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    opacity: "0.7",
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    position: "absolute"
                                                                }}
                                                            >
                                                                <div style={{ width: 1 }} />
                                                                <div
                                                                    style={{
                                                                        backgroundColor: "rgb(245, 245, 245)",
                                                                        width: "auto",
                                                                        height: "100%",
                                                                        marginLeft: 1
                                                                    }}
                                                                ></div>
                                                            </div>
                                                            <div
                                                                style={{
                                                                    position: "relative",
                                                                    paddingRight: 6,
                                                                    paddingLeft: 6,
                                                                    boxSizing: "border-box",
                                                                    fontFamily: "Roboto, Arial, sans-serif",
                                                                    fontSize: 10,
                                                                    color: "rgb(68, 68, 68)",
                                                                    whiteSpace: "nowrap",
                                                                    direction: "ltr",
                                                                    textAlign: "right",
                                                                    verticalAlign: "middle",
                                                                    display: "inline-block"
                                                                }}
                                                            >
                                                                <a
                                                                    style={{
                                                                        textDecoration: "none",
                                                                        cursor: "pointer",
                                                                        display: "none"
                                                                    }}
                                                                >
                                                                    Map Data
                                                                </a>
                                                                <span>Map data ©2020</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="gmnoscreen"
                                                        style={{ position: "absolute", right: 0, bottom: 0 }}
                                                    >
                                                        <div
                                                            style={{
                                                                fontFamily: "Roboto, Arial, sans-serif",
                                                                fontSize: 11,
                                                                color: "rgb(68, 68, 68)",
                                                                direction: "ltr",
                                                                textAlign: "right",
                                                                backgroundColor: "rgb(245, 245, 245)"
                                                            }}
                                                        >
                                                            Map data ©2020
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="gmnoprint gm-style-cc"
                                                        draggable="false"
                                                        style={{
                                                            zIndex: 1000001,
                                                            userSelect: "none",
                                                            height: 14,
                                                            lineHeight: 14,
                                                            position: "absolute",
                                                            right: 0,
                                                            bottom: 0
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                opacity: "0.7",
                                                                width: "100%",
                                                                height: "100%",
                                                                position: "absolute"
                                                            }}
                                                        >
                                                            <div style={{ width: 1 }} />
                                                            <div
                                                                style={{
                                                                    backgroundColor: "rgb(245, 245, 245)",
                                                                    width: "auto",
                                                                    height: "100%",
                                                                    marginLeft: 1
                                                                }}
                                                            ></div>
                                                        </div>
                                                        <div
                                                            style={{
                                                                position: "relative",
                                                                paddingRight: 6,
                                                                paddingLeft: 6,
                                                                boxSizing: "border-box",
                                                                fontFamily: "Roboto, Arial, sans-serif",
                                                                fontSize: 10,
                                                                color: "rgb(68, 68, 68)",
                                                                whiteSpace: "nowrap",
                                                                direction: "ltr",
                                                                textAlign: "right",
                                                                verticalAlign: "middle",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <a
                                                                href="https://www.google.com/intl/en-US_US/help/terms_maps.html"
                                                                target="_blank"
                                                                rel="noopener"
                                                                style={{
                                                                    textDecoration: "none",
                                                                    cursor: "pointer",
                                                                    color: "rgb(68, 68, 68)"
                                                                }}
                                                            >
                                                                Terms of Use
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <button
                                                        draggable="false"
                                                        title="Toggle fullscreen view"
                                                        aria-label="Toggle fullscreen view"
                                                        type="button"
                                                        className="gm-control-active gm-fullscreen-control"
                                                        style={{
                                                            background: "none rgb(255, 255, 255)",
                                                            border: 0,
                                                            margin: 10,
                                                            padding: 0,
                                                            position: "absolute",
                                                            cursor: "pointer",
                                                            userSelect: "none",
                                                            borderRadius: 2,
                                                            height: 40,
                                                            width: 40,
                                                            boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
                                                            overflow: "hidden",
                                                            top: 0,
                                                            right: 0
                                                        }}
                                                    >
                                                        <img
                                                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%20018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                                            style={{ height: 18, width: 18 }}
                                                        />
                                                        <img
                                                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                                            style={{ height: 18, width: 18 }}
                                                        />
                                                        <img
                                                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                                            style={{ height: 18, width: 18 }}
                                                        />
                                                    </button>
                                                    <div
                                                        draggable="false"
                                                        className="gm-style-cc"
                                                        style={{
                                                            userSelect: "none",
                                                            height: 14,
                                                            lineHeight: 14,
                                                            display: "none",
                                                            position: "absolute",
                                                            right: 0,
                                                            bottom: 0
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                opacity: "0.7",
                                                                width: "100%",
                                                                height: "100%",
                                                                position: "absolute"
                                                            }}
                                                        >
                                                            <div style={{ width: 1 }} />
                                                            <div
                                                                style={{
                                                                    backgroundColor: "rgb(245, 245, 245)",
                                                                    width: "auto",
                                                                    height: "100%",
                                                                    marginLeft: 1
                                                                }}
                                                            ></div>
                                                        </div>
                                                        <div
                                                            style={{
                                                                position: "relative",
                                                                paddingRight: 6,
                                                                paddingLeft: 6,
                                                                boxSizing: "border-box",
                                                                fontFamily: "Roboto, Arial, sans-serif",
                                                                fontSize: 10,
                                                                color: "rgb(68, 68, 68)",
                                                                whiteSpace: "nowrap",
                                                                direction: "ltr",
                                                                textAlign: "right",
                                                                verticalAlign: "middle",
                                                                display: "inline-block"
                                                            }}
                                                        >
                                                            <a
                                                                target="_blank"
                                                                rel="noopener"
                                                                title="Report errors in the road map or imagery to Google"
                                                                href="https://www.google.com/maps/@0.0000536,0,18z/data=!10m1!1e1!12b1?source=apiv3&rapsrc=apiv3"
                                                                style={{
                                                                    fontFamily: "Roboto, Arial, sans-serif",
                                                                    fontSize: 10,
                                                                    color: "rgb(68, 68, 68)",
                                                                    textDecoration: "none",
                                                                    position: "relative"
                                                                }}
                                                            >
                                                                Report a map error
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="gmnoprint gm-bundled-control gm-bundled-control-on-bottom"
                                                        draggable="false"
                                                        controlwidth={40}
                                                        controlheight={81}
                                                        style={{
                                                            margin: 10,
                                                            userSelect: "none",
                                                            position: "absolute",
                                                            bottom: 95,
                                                            right: 40
                                                        }}
                                                    >
                                                        <div
                                                            className="gmnoprint"
                                                            controlwidth={40}
                                                            controlheight={81}
                                                            style={{ position: "absolute", left: 0, top: 0 }}
                                                        >
                                                            <div
                                                                draggable="false"
                                                                style={{
                                                                    userSelect: "none",
                                                                    boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
                                                                    borderRadius: 2,
                                                                    cursor: "pointer",
                                                                    backgroundColor: "rgb(255, 255, 255)",
                                                                    width: 40,
                                                                    height: 81
                                                                }}
                                                            >
                                                                <button
                                                                    draggable="false"
                                                                    title="Zoom in"
                                                                    aria-label="Zoom in"
                                                                    type="button"
                                                                    className="gm-control-active"
                                                                    style={{
                                                                        background: "none",
                                                                        display: "block",
                                                                        border: 0,
                                                                        margin: 0,
                                                                        padding: 0,
                                                                        position: "relative",
                                                                        cursor: "pointer",
                                                                        userSelect: "none",
                                                                        overflow: "hidden",
                                                                        width: 40,
                                                                        height: 40,
                                                                        top: 0,
                                                                        left: 0
                                                                    }}
                                                                >
                                                                    <img
                                                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                                                        style={{ height: 18, width: 18 }}
                                                                    />
                                                                    <img
                                                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23333%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                                                        style={{ height: 18, width: 18 }}
                                                                    />
                                                                    <img
                                                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23111%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                                                        style={{ height: 18, width: 18 }}
                                                                    />
                                                                </button>
                                                                <div
                                                                    style={{
                                                                        position: "relative",
                                                                        overflow: "hidden",
                                                                        width: 30,
                                                                        height: 1,
                                                                        margin: "0px 5px",
                                                                        backgroundColor: "rgb(230, 230, 230)",
                                                                        top: 0
                                                                    }}
                                                                ></div>
                                                                <button
                                                                    draggable="false"
                                                                    title="Zoom out"
                                                                    aria-label="Zoom out"
                                                                    type="button"
                                                                    className="gm-control-active"
                                                                    style={{
                                                                        background: "none",
                                                                        display: "block",
                                                                        border: 0,
                                                                        margin: 0,
                                                                        padding: 0,
                                                                        position: "relative",
                                                                        cursor: "pointer",
                                                                        userSelect: "none",
                                                                        overflow: "hidden",
                                                                        width: 40,
                                                                        height: 40,
                                                                        top: 0,
                                                                        left: 0
                                                                    }}
                                                                >
                                                                    <img
                                                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                                                        style={{ height: 18, width: 18 }}
                                                                    />
                                                                    <img
                                                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                                                        style={{ height: 18, width: 18 }}
                                                                    />
                                                                    <img
                                                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                                                        style={{ height: 18, width: 18 }}
                                                                    />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="gmnoprint"
                                                            controlwidth={40}
                                                            controlheight={40}
                                                            style={{ display: "none", position: "absolute" }}
                                                        >
                                                            <div style={{ width: 40, height: 40 }}>
                                                                <button
                                                                    draggable="false"
                                                                    title="Rotate map 90 degrees"
                                                                    aria-label="Rotate map 90 degrees"
                                                                    type="button"
                                                                    className="gm-control-active"
                                                                    style={{
                                                                        background: "none rgb(255, 255, 255)",
                                                                        display: "none",
                                                                        border: 0,
                                                                        margin: "0px 0px 32px",
                                                                        padding: 0,
                                                                        position: "relative",
                                                                        cursor: "pointer",
                                                                        userSelect: "none",
                                                                        width: 40,
                                                                        height: 40,
                                                                        top: 0,
                                                                        left: 0,
                                                                        overflow: "hidden",
                                                                        boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
                                                                        borderRadius: 2
                                                                    }}
                                                                >
                                                                    <img
                                                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                                                        style={{ height: 18, width: 18 }}
                                                                    />
                                                                    <img
                                                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                                                        style={{ height: 18, width: 18 }}
                                                                    />
                                                                    <img
                                                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                                                        style={{ height: 18, width: 18 }}
                                                                    />
                                                                </button>
                                                                <button
                                                                    draggable="false"
                                                                    title="Tilt map"
                                                                    aria-label="Tilt map"
                                                                    type="button"
                                                                    className="gm-tilt gm-control-active"
                                                                    style={{
                                                                        background: "none rgb(255, 255, 255)",
                                                                        display: "block",
                                                                        border: 0,
                                                                        margin: 0,
                                                                        padding: 0,
                                                                        position: "relative",
                                                                        cursor: "pointer",
                                                                        userSelect: "none",
                                                                        width: 40,
                                                                        height: 40,
                                                                        top: 0,
                                                                        left: 0,
                                                                        overflow: "hidden",
                                                                        boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
                                                                        borderRadius: 2
                                                                    }}
                                                                >
                                                                    <img
                                                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                                                        style={{ width: 18 }}
                                                                    />
                                                                    <img
                                                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                                                        style={{ width: 18 }}
                                                                    />
                                                                    <img
                                                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                                                        style={{ width: 18 }}
                                                                    />
                                                                </button>
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
                    </div>
                </div>
            </section>



        </React.Fragment>
    )
}
