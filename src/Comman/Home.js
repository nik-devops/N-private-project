import React, { useState, useEffect } from 'react'
// import './Home.css'
// import "./main.css"
// import "./Slick.css"
// import "./assetmain.css"

import Footer from './Footer'
import NavBarWar from './NavBarWar'
import { useHistory } from 'react-router-dom'
// import $ from 'jquery'
// window.jquery = window.$ = $
import Slider from './Slider'

export default function Home() {

    let history = useHistory()

    function testBphpage() {
        history.push(`/testbph`)
    }


    // const $jq = $.noConflict();
    // if ($jq) {
    //     $jq('#btn').click(e => {
    //         $jq('#txt').hide()
    //     })
    // }




    return (
        <React.Fragment>
            <NavBarWar />


            <section className="banner">
                <div id="demo" className="carousel slide" data-ride="carousel">
                    <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to={0} className="active" />
                        <li data-target="#demo" data-slide-to={1} />
                        <li data-target="#demo" data-slide-to={2} />
                    </ul>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="deskdisplay">
                                <img
                                    src="assets/images/banner/banner1.jpg"
                                    style={{ width: "100%" }}
                                />
                                <div className="carousel-caption">
                                    <div className="row">
                                        <div className="col-sm-6 left">
                                            <h1 className=" ">Chai &amp; gupshup</h1>
                                            <figure className="bottomimgs">
                                                <img
                                                    src="assets/images/bookappointment.png"
                                                    className="img-fluid"
                                                />
                                                <br />
                                                <img
                                                    src="assets/images/dosereminder.png"
                                                    className="img-fluid"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                />
                                            </figure>
                                        </div>
                                        <div className="col-sm-6 right">
                                            <h1>
                                                Chai time
                                                <br />
                                                cut short by BPH
                                            </h1>
                                            <h4>
                                                Men with <span>BPH</span> have to
                                                <br />
                                                run to the loo again and again.
                                                <br />
                                                During day and night.
                                            </h4>
                                            <figure className="whysuffer">
                                                <img
                                                    src="assets/images/whysuffer.png"
                                                    className="img-fluid"
                                                />
                                            </figure>
                                            <div className="number">
                                                <figure className="call">
                                                    <a href="tel:7877315315">

                                                        <img
                                                            src="assets/images/call2.png"
                                                            className="img-fluid"
                                                        />
                                                    </a>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mobdisplay">
                                <img
                                    src="assets/images/banner/mobbanner1.png"
                                    style={{ width: "100%" }}
                                />
                                <div className="carousel-caption">
                                    <div className="left">
                                        <h1 className=" ">
                                            Chai &amp;
                                            <br />
                                            gupshup
                                        </h1>
                                    </div>
                                    <div className="right">
                                        <h1 className=" ">
                                            Chai Time
                                            <br />
                                            cut short
                                            <br />
                                            by BPH
                                        </h1>
                                    </div>
                                </div>
                                <div className="bottomcaption">
                                    <div className="row">
                                        <div className="col-sm-12 ">
                                            <h4 className="py-3 px-5">
                                                Men with <span>BPH</span> have to run to the loo again and
                                                again. During day and night.
                                            </h4>
                                            <figure className="bottomimgs  py-3">
                                                <a href="tel:tel:7877315315">

                                                    <img
                                                        src="assets/images/call2.png"
                                                        className="img-fluid callimg"
                                                    />
                                                </a>
                                                <div className="popimg">
                                                    <img
                                                        src="assets/images/bookappointment.png"
                                                        className="img-fluid"
                                                    />
                                                    <img
                                                        src="assets/images/dosereminder.png"
                                                        className="img-fluid"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                    />
                                                </div>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="deskdisplay">
                                <img
                                    src="assets/images/banner/banner2.jpg"
                                    style={{ width: "100%" }}
                                />
                                <div className="carousel-caption">
                                    <div className="row">
                                        <div className="col-sm-6 left">
                                            <h1 className=" ">Picnic &amp; masti</h1>
                                            <figure className="bottomimgs">
                                                <img
                                                    src="assets/images/bookappointment.png"
                                                    className="img-fluid"
                                                />
                                                <br />
                                                <img
                                                    src="assets/images/dosereminder.png"
                                                    className="img-fluid"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                />
                                            </figure>
                                        </div>
                                        <div className="col-sm-6 right">
                                            <h1>
                                                Family Picnic
                                                <br />
                                                cut short by BPH
                                            </h1>
                                            <h4>
                                                Men with <span>BPH</span> have to
                                                <br />
                                                run to the loo again and again.
                                                <br />
                                                During day and night.
                                            </h4>
                                            <figure className="whysuffer">
                                                <img
                                                    src="assets/images/whysuffer.png"
                                                    className="img-fluid"
                                                />
                                            </figure>
                                            <div className="number">
                                                <figure className="call">
                                                    <a href="tel:7877315315">

                                                        <img
                                                            src="assets/images/call2.png"
                                                            className="img-fluid"
                                                        />
                                                    </a>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mobdisplay">
                                <img
                                    src="assets/images/banner/mobbanner2.png"
                                    style={{ width: "100%" }}
                                />
                                <div className="carousel-caption">
                                    <div className="left">
                                        <h1 className=" ">Picnic &amp; masti</h1>
                                    </div>
                                    <div className="right">
                                        <h1>
                                            Family Picnic
                                            <br />
                                            cut short by BPH
                                        </h1>
                                    </div>
                                </div>
                                <div className="bottomcaption">
                                    <div className="row">
                                        <div className="col-sm-12 ">
                                            <h4 className="py-3 px-5">
                                                Men with <span>BPH</span> have to run to the loo again and
                                                again. During day and night.
                                            </h4>
                                            <figure className="bottomimgs  py-3">
                                                <a href="tel:tel:7877315315">

                                                    <img
                                                        src="assets/images/call2.png"
                                                        className="img-fluid callimg"
                                                    />
                                                </a>
                                                <div className="popimg">
                                                    <img
                                                        src="assets/images/bookappointment.png"
                                                        className="img-fluid"
                                                    />
                                                    <img
                                                        src="assets/images/dosereminder.png"
                                                        className="img-fluid"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                    />
                                                </div>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="deskdisplay">
                                <img
                                    src="assets/images/banner/banner3.jpg"
                                    style={{ width: "100%" }}
                                />
                                <div className="carousel-caption">
                                    <div className="row">
                                        <div className="col-sm-6 left">
                                            <h1 className=" ">Exercise &amp; yoga</h1>
                                            <figure className="bottomimgs">
                                                <img
                                                    src="assets/images/bookappointment.png"
                                                    className="img-fluid"
                                                />
                                                <br />
                                                <img
                                                    src="assets/images/dosereminder.png"
                                                    className="img-fluid"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                />
                                            </figure>
                                        </div>
                                        <div className="col-sm-6 right">
                                            <h1>
                                                Workout Session
                                                <br />
                                                cut short by BPH
                                            </h1>
                                            <h4>
                                                Men with <span>BPH</span> have to
                                                <br />
                                                run to the loo again and again.
                                                <br />
                                                During day and night.
                                            </h4>
                                            <figure className="whysuffer">
                                                <img
                                                    src="assets/images/whysuffer.png"
                                                    className="img-fluid"
                                                />
                                            </figure>
                                            <div className="number">
                                                <figure className="call">
                                                    <a href="tel:7877315315">

                                                        <img
                                                            src="assets/images/call2.png"
                                                            className="img-fluid"
                                                        />
                                                    </a>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mobdisplay">
                                <img
                                    src="assets/images/banner/mobbanner3.png"
                                    style={{ width: "100%" }}
                                />
                                <div className="carousel-caption">
                                    <div className="left">
                                        <h1 className=" ">Exercise &amp; yoga</h1>
                                    </div>
                                    <div className="right">
                                        <h1>
                                            Workout Session
                                            <br />
                                            cut short by BPH
                                        </h1>
                                    </div>
                                </div>
                                <div className="bottomcaption">
                                    <div className="row">
                                        <div className="col-sm-12 ">
                                            <h4 className="py-3 px-5">
                                                Men with <span>BPH</span> have to run to the loo again and
                                                again. During day and night.
                                            </h4>
                                            <figure className="bottomimgs py-3">
                                                <a href="tel:tel:7877315315">

                                                    <img
                                                        src="assets/images/call2.png"
                                                        className="img-fluid callimg"
                                                    />
                                                </a>
                                                <div className="popimg">
                                                    <img
                                                        src="assets/images/bookappointment.png"
                                                        className="img-fluid"
                                                    />
                                                    <img
                                                        src="assets/images/dosereminder.png"
                                                        className="img-fluid"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                    />
                                                </div>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon" />
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon" />
                </a>
            </section>


            {/* <div style={{ background: "white" }}>
                <section className="aboutbph py-5" id="aboutbph">
                    <div className="container">
                        <div className="sectiontitle text-center">
                            <h1>About BPH</h1>
                        </div>
                        <div className="col-sm-12">
                            <div className="row">
                                <section className="regular slider slider-nav">
                                    <div className="text-center">
                                        <figure>
                                            <img
                                                src="assets/images/aboutbph/luts.png"
                                                className="img-fluid mainimg"
                                            />
                                        </figure>
                                        <h3 className="py-2 m-0">What is LUTS?</h3>
                                        <div className="arrow-down" />
                                    </div>
                                    <div className="text-center">
                                        <figure>
                                            <img
                                                src="assets/images/aboutbph/knowmoreabtprostrate.png"
                                                className="img-fluid mainimg"
                                            />
                                        </figure>
                                        <h3 className="py-2 m-0"> About Prostrate</h3>
                                        <div className="arrow-down" />
                                    </div>
                                    <div className="text-center">
                                        <figure>
                                            <img
                                                src="assets/images/aboutbph/expvideos.png"
                                                className="img-fluid mainimg"
                                            />
                                        </figure>
                                        <h3 className="py-2 m-0">Prostrate Health &amp; BPH Facts</h3>
                                        <div className="arrow-down" />
                                    </div>
                                    <div className="text-center">
                                        <figure>
                                            <img
                                                src="assets/images/aboutbph/symptomsofbph.png"
                                                className="img-fluid mainimg"
                                            />
                                        </figure>
                                        <h3 className="py-2 m-0">Symptoms of BPH</h3>
                                        <div className="arrow-down" />
                                    </div>
                                    <div className="text-center">
                                        <figure>
                                            <img
                                                src="assets/images/aboutbph/dosanddont.png"
                                                className="img-fluid mainimg"
                                            />
                                        </figure>
                                        <h3 className="py-2 m-0">Do's &amp; Dont's</h3>
                                        <div className="arrow-down" />
                                    </div>
                                    <div className="text-center">
                                        <figure>
                                            <img
                                                src="assets/images/aboutbph/undertandingbph.png"
                                                className="img-fluid mainimg"
                                            />
                                        </figure>
                                        <h3 className="py-2 m-0">Understanding BPH</h3>
                                        <div className="arrow-down" />
                                    </div>
                                    <div className="text-center">
                                        <figure>
                                            <img
                                                src="assets/images/aboutbph/lifestyle-managment.png"
                                                className="img-fluid mainimg"
                                            />
                                        </figure>
                                        <h3 className="py-2 m-0">Lifestyle Modification</h3>
                                        <div className="arrow-down" />
                                    </div>
                                </section>
                                <div className="col-sm-12 m-2">
                                    <div className="content  p-4  slider-for">
                                        <div className="col-sm-12" id="luts">
                                            <div className="row">
                                                <h1>WHAT IS LUTS ?</h1>
                                                <p className="m-0">
                                                    LUTS is a popularly-used acronym for LOWER URINARY TRACT
                                                    SYMPTOMS. It means symptoms, i.e. problems reported by
                                                    patients, that are caused by diseases or disorders of the
                                                    lower urinary tract â€” which includes the urinary bladder,
                                                    prostate and urethra. They are wide ranging and caused by
                                                    diverse conditions and of all severities.
                                                </p>
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-sm-5">
                                                            <figure className="tab1img">
                                                                <img
                                                                    src="assets/images/aboutbph/mb1.png"
                                                                    className="img-fluid"
                                                                />
                                                            </figure>
                                                        </div>
                                                        <div className="col-sm-7">
                                                            <h4 className="mt-3">
                                                                Categorization of LUTS due to BPH
                                                            </h4>
                                                            <div className="ulbox">
                                                                <h5>Storage:</h5>
                                                                <ul>
                                                                    <li>
                                                                        Passing urine several more times during the day than
                                                                        normal, within 2 hours from previous urination
                                                                    </li>
                                                                    <li>

                                                                        Nocturia i.e getting up at night to pass urine
                                                                    </li>
                                                                    <li>
                                                                        urgency i.e strong desire to void urine immediately
                                                                        with inability to postpone
                                                                    </li>
                                                                    <li>
                                                                        Urge incontinence i.e urgency with undesired leakage
                                                                        of urine before reaching the loo
                                                                    </li>
                                                                </ul>
                                                                <div className="ulbox">
                                                                    <h5>Voiding:</h5>
                                                                    <ul>
                                                                        <li>
                                                                            Hesitancy i.e difficulty in starting flow of urine
                                                                        </li>
                                                                        <li>Weak stream of urine</li>
                                                                        <li>
                                                                            Intermittency i.e on-and-off starting and stopping
                                                                            of urinary flow during urination, straining or
                                                                            pushing harder than normal to pass urine
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="ulbox">
                                                                    <h5>Post-micturition:</h5>
                                                                    <ul>
                                                                        <li>
                                                                            Feeling unsatisfied owing to incomplete emptying
                                                                            of bladder and dribbling of urine even after
                                                                            person has stopped urinating and might have even
                                                                            left the loo.
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12" id="aboutprostrate">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <h1>Know More About Prostrate</h1>
                                                </div>
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <h5>What is Prostate :</h5>
                                                            <p>
                                                                Prostate, a small walnut-sized gland, is an organ of the
                                                                male reproductive system. It is present below the neck
                                                                of the bladder â€” which is a narrow outlet leading to a
                                                                narrow passage, called urethra, through which urine
                                                                flows out of the bladder during urination.
                                                            </p>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <h5>Function of Prostate</h5>
                                                            <p>
                                                                The main function of the prostate is to control the exit
                                                                point of two important body fluids in a male - urine and
                                                                semen.
                                                            </p>
                                                        </div>
                                                        <div className="col-sm-6 offset-sm-3">
                                                            <figure className="w-50 m-auto">
                                                                <img
                                                                    src="assets/images/aboutbph/mb2.png"
                                                                    className="img-fluid"
                                                                />
                                                            </figure>
                                                            <p className="text-center">
                                                                The main function of the prostate is to control the exit
                                                                point of two important body fluids in a male - urine and
                                                                semen.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12" id="bphfacts">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <h1>
                                                        PROSTATE HEALTH
                                                        <br />
                                                        AND BPH FACTS
                                                    </h1>
                                                </div>
                                                <div className="col-sm-12">
                                                    <div className="row">
                                                        <div className="col-sm-2  text-center">
                                                            <p>
                                                                It has been said that all men will have an enlarged
                                                                prostate if they live long enough.
                                                            </p>
                                                        </div>
                                                        <div className="col-sm-2 text-center">
                                                            <p>
                                                                BPH being non-cancerous condition, is not usually life
                                                                threatening
                                                            </p>
                                                        </div>
                                                        <div className="col-sm-2 text-center">
                                                            <p>
                                                                Chances of BPH increases with increasing age, therefore
                                                                men above50 years must visit a specialist once a year
                                                                and get checked for symptoms
                                                            </p>
                                                        </div>
                                                        <div className="col-sm-2  text-center">
                                                            <p>Untreated BPH can lead to kidney damage. </p>
                                                        </div>
                                                        <div className="col-sm-2 text-center">
                                                            <p>Untreated BPH can lead to acute urinary retention. </p>
                                                        </div>
                                                        <div className="col-sm-2 text-center">
                                                            <p>BPH can cause severe urinary tract infections. </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12" id="symptomsofbph">
                                            <div className="row">
                                                <div className="col-sm-12 text-center">
                                                    <h1>
                                                        ARE YOU EXPERIENCING ANY OF THESE
                                                        <br />
                                                        SYMPTOMS OF BPH
                                                    </h1>
                                                    <h5>Know Your Symptoms</h5>
                                                </div>
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-sm-3  text-center">
                                                            <figure className="mb3 ">
                                                                <img
                                                                    src="assets/images/aboutbph/mb4-1.png"
                                                                    className="img-fluid"
                                                                />
                                                            </figure>
                                                        </div>
                                                        <div className="col-sm-3 text-center">
                                                            <figure className="mb3 ">
                                                                <img
                                                                    src="assets/images/aboutbph/mb4-2.png"
                                                                    className="img-fluid"
                                                                />
                                                            </figure>
                                                        </div>
                                                        <div className="col-sm-3 text-center">
                                                            <figure className="mb3 ">
                                                                <img
                                                                    src="assets/images/aboutbph/mb4-3.png"
                                                                    className="img-fluid"
                                                                />
                                                            </figure>
                                                        </div>
                                                        <div className="col-sm-3  text-center">
                                                            <figure className="mb3">
                                                                <img
                                                                    src="assets/images/aboutbph/mb4-4.png"
                                                                    className="img-fluid"
                                                                />
                                                            </figure>
                                                        </div>
                                                        <div className="col-sm-3 text-center">
                                                            <figure className="mb3 ">
                                                                <img
                                                                    src="assets/images/aboutbph/mb4-5.png"
                                                                    className="img-fluid"
                                                                />
                                                            </figure>
                                                        </div>
                                                        <div className="col-sm-3 text-center">
                                                            <figure className="mb3 ">
                                                                <img
                                                                    src="assets/images/aboutbph/mb4-6.png"
                                                                    className="img-fluid"
                                                                />
                                                            </figure>
                                                        </div>
                                                        <div className="col-sm-3 text-center">
                                                            <figure className="mb3 ">
                                                                <img
                                                                    src="assets/images/aboutbph/mb4-7.png"
                                                                    className="img-fluid"
                                                                />
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12" id="dosanddonts">
                                            <div className="row">
                                                <div className="col-sm-12 text-center">
                                                    <h1>Do's &amp; font's in BPH </h1>
                                                </div>
                                                <div className="col-sm-12">
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <h5>DO's</h5>
                                                            <p>Manage Your Fluids</p>
                                                            <ul>
                                                                <li>
                                                                    Limit beverages in the evening. Avoid fluids two hours
                                                                    before retiring to bed. Restrict beverages, especially
                                                                    on long journeys and when outdoors.
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <h5>DON'Ts </h5>
                                                            <p>
                                                                Avoid Foods/Drinks which are bladder irritants like:
                                                            </p>
                                                            <ul>
                                                                <li>

                                                                    Caffeine-containing beverages e.g. tea, coffee, energy
                                                                    drinks, etc.
                                                                </li>
                                                                <li>Alcoholic drinks. </li>
                                                                <li>Spicy and salty foods. </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-sm-12 text-center">
                                                            <p>
                                                                Consult your doctor for adjusting the timings and doses
                                                                of your medications for any other condition, to avoid
                                                                the chances of frequent urination.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12" id="understandingbph">
                                            <div className="row">
                                                <div className="col-sm-12 ">
                                                    <h1>UNDERSTANDING BPH</h1>
                                                </div>
                                                <div className="col-sm-12">
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <p>
                                                                Normally, urine flows freely out of the bladder
                                                                through the urethra,which in turn passes through the
                                                                middle of the prostate gland. Prostate gland is a
                                                                walnut-shaped and sized structure located at the lower
                                                                opening of the urinary bladder.
                                                            </p>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <p>
                                                                In BPH, with increasing age, the prostate enlarges.
                                                                This puts pressure on the urethra, thereby
                                                                constricting it and obstructing the urine outflow from
                                                                the bladder.This leads to urine retainment in the
                                                                Enlarged bladder and voiding problems.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12" id="lifestylemodifications">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <h1>
                                                        LIFESTYLE MODIFICATION
                                                        <br />
                                                        IN BPH
                                                    </h1>
                                                </div>
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-sm-2  ">
                                                            <p>Quit smoking. </p>
                                                        </div>
                                                        <div className="col-sm-2 ">
                                                            <p>
                                                                Exercise regularly:30 minutes of moderate exercise, 5
                                                                days a week.
                                                            </p>
                                                        </div>
                                                        <div className="col-sm-2  ">
                                                            <p>
                                                                Have at least 5 servings of fresh fruits and
                                                                vegetables every day constipation.
                                                            </p>
                                                        </div>
                                                        <div className="col-sm-2 ">
                                                            <p>
                                                                Avoid salty, starchy (maida), sweet and fried foods as
                                                                well as red meat get rid of (beef, pork, mutton,
                                                                lamb).
                                                            </p>
                                                        </div>
                                                        <div className="col-sm-2  ">
                                                            <p>
                                                                Keep warm. Colder temperatures can increase the urge
                                                                to urinate.
                                                            </p>
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
            </div> */}
            <Slider />


            <section className="testyourbph py-5 position-relative " id="testbph">
                <figure className="topdrops">
                    <img src="assets/images/purpledrops.png" className="img-fluid" />
                </figure>
                <div className="container">
                    <div className="sectiontitle text-center mb-4">
                        <h1>
                            TEST YOUR <strong>BPH SEVERITY</strong>
                            <br />
                            It's <strong>QUICK</strong> AND <strong>EASY</strong>
                        </h1>
                    </div>
                    <div className="col-sm-12 pt-4">
                        <div className="row">
                            <figure className="m-0">
                                <img src="assets/images/bphmeter.png" className="img-fluid" />
                            </figure>
                            <button
                                routerlink="/testbph"
                                className="purplebtn border-0 btn-lg m-auto "
                                onClick={testBphpage}>
                                Take the test now
                            </button>
                        </div>
                    </div>
                </div>
            </section>




            <section className="findchemist position-relative ">
                <figure className="topdrops">
                    <img src="assets/images/whitedrops.png" className="img-fluid" />
                </figure>
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="fc" id="chemistlocator">
                                    <div>
                                        <div className="sectiontitle text-center mb-4">
                                            <h2 className="m-0">Find a Chemist near me</h2>
                                        </div>
                                        <form className=" m-auto">
                                            <div className="input-group ">
                                                <input
                                                    bphspecialist=""
                                                    type="search"
                                                    className="form-control border-0"
                                                    placeholder="Search"
                                                    id="mail"
                                                    name="email"
                                                />
                                                <div className="input-group-append">
                                                    <span className="input-group-text p-0 bg-white border-0">
                                                        <button type="button" className="btn   border-0">
                                                            <i className="fa fa-search"></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 splocator">
                            <div className="row">
                                <figure className="topdrops mobdisplay">
                                    <img src="assets/images/whitedrops.png" className="img-fluid" />
                                </figure>
                                <div className="sl" id="Specialistlocator">
                                    <div>
                                        <div className="sectiontitle text-center ">
                                            <h2 className="m-0">Specialist Locator</h2>
                                            <figure className="w-75 m-auto lybraelogo">
                                                <img
                                                    src="assets/images/libraelogo.png"
                                                    className="img-fluid  my-2"
                                                />
                                            </figure>
                                        </div>
                                        <form className=" m-auto text-center">
                                            <button
                                                type="button"
                                                className="purplebtn border-0 btn-lg m-auto px-5"
                                                style={{ borderRadius: 35 }}
                                            >
                                                Click
                                            </button>
                                            <div
                                                appointmentbutton=""
                                                className="lybrate-widget cipla d-none"
                                                name=""
                                                id="lybrate-widget"
                                                utype="brand"
                                                parter-name="cipla-whatarelief"
                                                tabs="ba"
                                                access="location"
                                                btn-text="Book A Doctor Appointment"
                                                data-privacy="You are now been directed to a third party website. Please note that this Plugin is for convenience of the user of the Whatarelief Website. Cipla is not collecting, storing or accessing any personal data of the user and all the information collected, stored and accessed herein is with the third party (Lybrate) website . Lybrate shall be solely responsible for any issues relating to doctor appointment and Cipla shall have no liability for the same. By clicking Okay you are expressly consenting to sharing all your details with Lybrate"
                                                data-consent-duration={7}
                                            />
                                            <div className="input-group ">
                                                <input
                                                    type="search"
                                                    className="form-control bg-transparent  border-0 "
                                                    placeholder="Search"
                                                    id="mail"
                                                    name="email"
                                                />
                                                <div className="input-group-append">
                                                    <span className="input-group-text p-0   bg-transparent  border-0">
                                                        <button type="submit" className="btn   border-0">
                                                            <i className="fa fa-search" />
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section
                className="washroomfinder d-flex position-relative "
                id="washrooomlocator"
            >
                <figure className="topdrops mobdisplay">
                    <img src="assets/images/whitedrops.png" className="img-fluid " />
                </figure>
                <div className="container-fluid ">
                    <div className="d-flex  justify-content-center align-items-center col-sm-12">
                        <figure className="wficon">
                            <img src="assets/images/wficon.png" className="img-fluid" />
                        </figure>
                        <div>
                            <div className="sectiontitle text-center mb-4">
                                <h2 className="m-0">Washroom near me</h2>
                            </div>
                            <button
                                routerlink="/washroom"
                                className="purplebtn border-0 btn-lg m-auto  px-5 "
                                style={{ borderRadius: 35 }}
                                tabIndex={0}
                            >
                                Near Me
                            </button>
                            <form action="/action_page.php" className=" m-auto">
                                <div className="input-group ">
                                    <input
                                        type="search"
                                        className="form-control border-0"
                                        placeholder="Search"
                                        id="mail"
                                        name="email"
                                    />
                                    <div className="input-group-append">
                                        <span className="input-group-text p-0 bg-white border-0">

                                            <button type="submit" className="btn   border-0">
                                                <i className="fa fa-search" />
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>



            <section className="faq  position-relative py-5 ">
                <figure className="topdrops">
                    <img src="assets/images/greydrops.png" className="img-fluid" />
                </figure>
                <div className="container ">
                    <div className="sectiontitle text-center mb-4">
                        <h2 className="m-0">FAQs</h2>
                    </div>
                    <div className="col-sm-12">
                        <div className="row">
                            <div id="accordion" className="w-100">
                                <div className="card border-0 bg-transparent">
                                    <div
                                        className="card-header bg-transparent"
                                        data-toggle="collapse"
                                        href="#collapseOne"
                                    >
                                        <a className="card-link">
                                            What is Prostrate?
                                            <span className="pull-right">
                                                <i className="fa fa-angle-down" />
                                            </span>
                                        </a>
                                    </div>
                                    <div
                                        id="collapseOne"
                                        className="collapse show"
                                        data-parent="#accordion"
                                    >
                                        <div className="card-body">
                                            The prostate is a walnut-shaped gland that is part of the male
                                            reproductive system. The main function of the prostate is to
                                            make a fluid that goes into semen
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-0 bg-transparent">
                                    <div
                                        className="card-header bg-transparent"
                                        data-toggle="collapse"
                                        href="#collapseTwo"
                                    >
                                        <a className="collapsed card-link">
                                            What is benign prostatic hyperplasia or BPH?
                                            <span className="pull-right">
                                                <i className="fa fa-angle-down" />
                                            </span>
                                        </a>
                                    </div>
                                    <div id="collapseTwo" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            Benign prostatic hyperplasia - also called BPH - is a condition
                                            in men in which the prostate gland is enlarged and not
                                            cancerous. Benign prostatic hyperplasia is also called benign
                                            prostatic hypertrophy or benign prostatic obstruction.
                                            <br />
                                            The prostate goes through two main growth periods as a man ages.
                                            The first occurs early in puberty, when the prostate doubles in
                                            size. The second phase of growth begins around age 25 and
                                            continues during most of a man's life. Benign prostatic
                                            hyperplasia often occurs with the second growth phase.
                                            <br />
                                            As the prostate enlarges, the gland presses against and pinches
                                            the urethra. The bladder wall becomes thicker. Eventually, the
                                            bladder may weaken and lose the ability to empty completely,
                                            leaving some urine in the bladder.
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-0 bg-transparent">
                                    <div
                                        className="card-header bg-transparent"
                                        data-toggle="collapse"
                                        href="#collapseThree"
                                    >
                                        <a className="collapsed card-link">
                                            What causes benign prostatic hyperplasia?
                                            <span className="pull-right">
                                                <i className="fa fa-angle-down" />
                                            </span>
                                        </a>
                                    </div>
                                    <div
                                        id="collapseThree"
                                        className="collapse"
                                        data-parent="#accordion"
                                    >
                                        <div className="card-body">
                                            <p>

                                                Men with the following factors are more likely to develop
                                                benign prostatic hyperplasia
                                            </p>
                                            <ul>
                                                <li>Age 40 years and older </li>
                                                <li>Family history of BPH </li>
                                                <li>
                                                    Medical conditions such as obesity, heart and circulatory
                                                    disease, and type 2 diabetes.
                                                </li>
                                                <li>Lack of physical exercise </li>
                                                <li>Erectile dysfunction</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-0 bg-transparent">
                                    <div
                                        className="card-header bg-transparent"
                                        data-toggle="collapse"
                                        href="#collapseFour"
                                    >
                                        <a className="collapsed card-link">
                                            Who is more likely to develop benign prostatic hyperplasia?
                                            <span className="pull-right">
                                                <i className="fa fa-angle-down" />
                                            </span>
                                        </a>
                                    </div>
                                    <div
                                        id="collapseFour"
                                        className="collapse"
                                        data-parent="#accordion"
                                    >
                                        <div className="card-body">
                                            Men with the following factors are more likely to develop benign
                                            prostatic hyperplasia - Age 40 years and older - Family history
                                            of BPH - Medical conditions such as obesity, heart and
                                            circulatory disease, and type 2 diabetes. - Lack of physical
                                            exercise - Erectile dysfunction
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-0 bg-transparent">
                                    <div
                                        className="card-header bg-transparent"
                                        data-toggle="collapse"
                                        href="#collapseFive"
                                    >
                                        <a className="collapsed card-link">
                                            What are the symptoms of benign prostatic Hyperplasia?
                                            <span className="pull-right">
                                                <i className="fa fa-angle-down" />
                                            </span>
                                        </a>
                                    </div>
                                    <div
                                        id="collapseFive"
                                        className="collapse"
                                        data-parent="#accordion"
                                    >
                                        <div className="card-body">
                                            Urinary frequency: urination eight or more times a day
                                            <br />
                                            Urinary urgency: the inability to delay urination
                                            <br />
                                            Trouble starting a urine stream
                                            <br />
                                            Interrupted urine: a weak or an interrupted urine stream
                                            <br />
                                            Dribbling at the end of urination
                                            <br />
                                            Nocturia: frequent urination during periods of sleep
                                            <br />
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-0 bg-transparent">
                                    <div
                                        className="card-header bg-transparent"
                                        data-toggle="collapse"
                                        href="#collapseSix"
                                    >
                                        <a className="collapsed card-link">
                                            What are the complications of benign prostatic hyperplasia?
                                            <span className="pull-right">
                                                <i className="fa fa-angle-down" />
                                            </span>
                                        </a>
                                    </div>
                                    <div id="collapseSix" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            The complications of benign prostatic hyperplasia may include
                                            <ul>
                                                <li>Acute urinary retention</li>
                                                <li>Chronic, or long lasting urinary retention</li>
                                                <li>Blood in the urine</li>
                                                <li>Urinary tract infections(UTIs)</li>
                                                <li>Bladder damage</li>
                                                <li>Kidney damage</li>
                                                <li>Bladder stones</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="modal fade mt-5" id="myModal" role="dialog">
                <div className="modal-dialog mt-5">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close modalclose" data-dismiss="modal">
                                X
                            </button>
                            <h4 className="modal-title">Dose Reminder</h4>
                        </div>
                        <div className="modal-body">
                            <p>
                                By entering your personal details on this website, you are agreeing to
                                receive dosage reminders via SMS and/or WhatsApp. Any personal
                                information entered by you on this website shall be collected,
                                processed and retained by Stratawiz Advertising Private Limited and
                                Cipla Limited shall not be liable for any transmission or loss of the
                                same.
                            </p>
                        </div>
                        <div className="modal-footer">
                            <a href="https://dosereminder.xltr.in/">

                                <button
                                    type="button"
                                    className="btn btn-default px-5 purplebtn"
                                    style={{ borderRadius: 35 }}
                                >
                                    Click
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
