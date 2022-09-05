import React from 'react'
import './testBph.css'
import { useState } from 'react'
import Footer from '../Comman/Footer'
import NavBarWar from '../Comman/NavBarWar'

import $ from 'jquery'
window.jquery = window.$ = $

export default function TestBph() {


    $(document).ready(function () {

        $('.qly').click(function () {

            $('#qlybox').show();
            var value = $(this).data('value');
            $('#qlyval').text(value);

        });
    });

    $(document).ready(function () {
        $(".qul12").click(function () {
            $('#totalScore').show();
            $('#howserver').show();

        })
    })

    const [past, setpast] = useState('');
    const [past1, setpast1] = useState('');
    const [past2, setpast2] = useState('');
    const [past3, setpast3] = useState('');
    const [past4, setpast4] = useState('');
    const [past5, setpast5] = useState('');
    const [past6, setpast6] = useState('');

    const [past7, setpast7] = useState('');





    function handleSubmit(event) {
        event.preventDefault();

        let item = {
            past: past,
            past1: past1,
            past2: past2,
            past3: past3,
            past4: past4,
            past5: past5,
            past6: past6,

        }
        let cal = past + past1 + past2 + past3 + past4 + past5 + past6;
        var value = cal,
            sum = value
                .toString()
                .split('')
                .map(Number)
                .reduce(function (a, b) {
                    return a + b;
                }, 0);

        console.log(sum);
        console.log('hey', item)
    }

    // function handalsubmit2(even) {
    //     even.preventDefault();

    //     let item = {
    //         past7: past7
    //     }
    //     console.log(item)
    // }

    const handleClick = event => {
        event.preventDefault();

        console.log('old value: ');

        // setMessage('New value');
    };

    return (
        <React.Fragment>
            <NavBarWar />
            <main className="tybspage">
                <section className="banner">
                    <div id="demo" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    className="img-fluid"
                                    src="assets/images/symptom-severity/banner.png"
                                    alt="Los Angeles"
                                    style={{ width: "100%" }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="parasection py-5">
                    <div className="container">
                        <h2>
                            This <span>BPH symptom score</span> will help your doctor to evaluate
                            your
                            <br />
                            condition and understand your <span>BPH symptom severity better.</span>
                            <sup>1,2</sup>
                        </h2>
                        <hr />
                        <h2>
                            Answer each question by selecting the number
                            <br />
                            corresponding to your symptom severity.<sup>1,2</sup>
                        </h2>
                        <hr />
                        <h2>
                            Carry this with you and show it to your doctor
                            <br />
                            during your next appointment
                        </h2>
                    </div>
                </section>

                <section className="checkheader py-4" style={{ backgroundColor: "#efe8ef" }}>
                    <h1>CHECK THE BOX BASED ON YOUR SYMPTOM SEVERITY</h1>
                    <div className="container">
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-md-2">
                                    <div className="row">
                                        <h5 className="m-0">KEY:</h5>
                                    </div>
                                    <div className="row">&nbsp;</div>
                                </div>
                                <div className="col-md-10">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="checkinstructions">
                                                <span>0</span> Not at all.
                                            </div>
                                            <div className="checkinstructions">
                                                <span>1</span> Less than 1 in 5 times
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="checkinstructions">
                                                <span>2</span> Less than half the time.
                                            </div>
                                            <div className="checkinstructions">
                                                <span>3</span> Roughly half the time
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="checkinstructions">
                                                <span>4</span> More than half the time.
                                            </div>
                                            <div className="checkinstructions">
                                                <span>5</span> Almost always.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="optionbox mt-3">
                    <div className="container">
                        <div className="col-sm-12">
                            <div className="row">
                                <form className="row" onSubmit={handleSubmit} id="our-form">
                                    <div className="col-sm-6">
                                        <div className="">
                                            <div className="box">
                                                <div className="box1">
                                                    <p>
                                                        Over the past month or so, how often have you
                                                        <br />
                                                        had a sensation of not having emptied your
                                                        <br />
                                                        bladder completely after you ﬁnished urinating?
                                                    </p>
                                                </div>
                                                <div className="box2">
                                                    <figure>
                                                        <img src="assets/images/symptom-severity/1.png" />
                                                    </figure>
                                                </div>
                                                <div className="box3">
                                                    <div className="number">
                                                        <button>0</button> <button>1</button> <button>2</button>
                                                        <button>3</button> <button>4</button> <button>5</button>
                                                    </div>
                                                </div>
                                                <div className="box4">
                                                    <div className="radioboxrow">
                                                        <label className="">
                                                            <input
                                                                type="checkbox"
                                                                formcontrolname="sensation"
                                                                name="sensation"
                                                                value='0'
                                                                onChange={(e) => setpast(e.target.value)}
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="">
                                                            <input
                                                                type="checkbox"
                                                                formcontrolname="sensation"
                                                                name="sensation"
                                                                value='1'
                                                                onChange={(e) => setpast(e.target.value)}
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="">
                                                            <input
                                                                type="checkbox"
                                                                formcontrolname="sensation"
                                                                name="sensation"
                                                                value='2'
                                                                onChange={(e) => setpast(e.target.value)}

                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="">
                                                            <input
                                                                type="checkbox"
                                                                formcontrolname="sensation"
                                                                name="sensation"
                                                                value='3'
                                                                onChange={(e) => setpast(e.target.value)}

                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="">
                                                            <input
                                                                type="checkbox"
                                                                formcontrolname="sensation"
                                                                name="sensation"
                                                                value='4'
                                                                onChange={(e) => setpast(e.target.value)}

                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="">
                                                            <input
                                                                type="checkbox"
                                                                formcontrolname="sensation"
                                                                name="sensation"
                                                                value='5'
                                                                onChange={(e) => setpast(e.target.value)}
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="">
                                            <div className="box">
                                                <div className="box1">
                                                    <p>
                                                        Over the past month or so, how often have you
                                                        <br />
                                                        had to urinate again in less than 2 hours from the
                                                        <br />
                                                        last time when you ﬁnished urinating?
                                                    </p>
                                                </div>
                                                <div className="box2">
                                                    <figure>
                                                        <img src="assets/images/symptom-severity/2.png" />
                                                    </figure>
                                                </div>
                                                <div className="box3">
                                                    <div className="number">
                                                        <button>0</button> <button>1</button> <button>2</button>
                                                        <button>3</button> <button>4</button> <button>5</button>
                                                    </div>
                                                </div>
                                                <div className="box4">
                                                    <div className="radioboxrow">
                                                        <label className="">
                                                            <input
                                                                type="radio"
                                                                formcontrolname="urinate_again"
                                                                name="urinate_again"
                                                                value='0'
                                                                onChange={(e) => setpast1(e.target.value)} />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="">
                                                            <input
                                                                type="radio"
                                                                formcontrolname="urinate_again"
                                                                name="urinate_again"
                                                                value='1'
                                                                onChange={(e) => setpast1(e.target.value)}
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="">
                                                            <input
                                                                type="radio"
                                                                formcontrolname="urinate_again"
                                                                name="urinate_again"
                                                                value='2'
                                                                onChange={(e) => setpast1(e.target.value)}
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="">
                                                            <input
                                                                type="radio"
                                                                formcontrolname="urinate_again"
                                                                name="urinate_again"
                                                                value='3'
                                                                onChange={(e) => setpast1(e.target.value)}
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="">
                                                            <input
                                                                type="radio"
                                                                formcontrolname="urinate_again"
                                                                name="urinate_again"
                                                                value='4'
                                                                onChange={(e) => setpast1(e.target.value)}
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="">
                                                            <input
                                                                type="radio"
                                                                formcontrolname="urinate_again"
                                                                name="urinate_again"
                                                                value='5'
                                                                onChange={(e) => setpast1(e.target.value)}
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="">
                                            <div className="box">
                                                <div className="box1">
                                                    <p>
                                                        Over the past month or so, how often have
                                                        <br />
                                                        you found that you stopped and started
                                                        <br />
                                                        again several times while you urinated?
                                                    </p>
                                                </div>
                                                <div className="box2">
                                                    <figure>
                                                        <img src="assets/images/symptom-severity/3.png" />
                                                    </figure>
                                                </div>
                                                <div className="box3">
                                                    <div className="number">
                                                        <button>0</button> <button>1</button> <button>2</button>
                                                        <button>3</button> <button>4</button> <button>5</button>
                                                    </div>
                                                </div>
                                                <div className="box4">
                                                    <div className="radioboxrow">
                                                        <label className="">
                                                            <input
                                                                type="radio"
                                                                formcontrolname="stopped_started"
                                                                name="stopped_started"
                                                                value='0'
                                                                onChange={(e) => setpast2(e.target.value)} />

                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="">
                                                            <input
                                                                type="radio"
                                                                formcontrolname="stopped_started"
                                                                name="stopped_started"
                                                                value='1'
                                                                onChange={(e) => setpast2(e.target.value)}
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="">
                                                            <input
                                                                type="radio"
                                                                formcontrolname="stopped_started"
                                                                name="stopped_started"
                                                                value='2'
                                                                onChange={(e) => setpast2(e.target.value)}
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="">
                                                            <input
                                                                type="radio"
                                                                formcontrolname="stopped_started"
                                                                name="stopped_started"
                                                                value='3'
                                                                onChange={(e) => setpast2(e.target.value)}
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="">
                                                            <input
                                                                type="radio"
                                                                formcontrolname="stopped_started"
                                                                name="stopped_started"
                                                                value='4'
                                                                onChange={(e) => setpast2(e.target.value)}
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="">
                                                            <input
                                                                type="radio"
                                                                formcontrolname="stopped_started"
                                                                name="stopped_started"
                                                                value='5'
                                                                onChange={(e) => setpast2(e.target.value)}
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="">
                                            <div className="box">
                                                <div className="box1">
                                                    <p>
                                                        Over the past month or so, how often
                                                        <br />
                                                        you had a weak stream of urine?
                                                    </p>
                                                </div>
                                                <div className="box2">
                                                    <figure>
                                                        <img src="assets/images/symptom-severity/4.png" />
                                                    </figure>
                                                </div>
                                                <div className="box3">
                                                    <div className="number">
                                                        <button>0</button> <button>1</button> <button>2</button>
                                                        <button>3</button> <button>4</button> <button>5</button>
                                                    </div>
                                                </div>
                                                <div className="box4">
                                                    <div className="radioboxrow">
                                                        <label className="">
                                                            <input
                                                                type="radio"
                                                                formcontrolname="weak_stream"
                                                                name="weak_stream"
                                                                value='0'
                                                                onChange={(e) => setpast3(e.target.value)}
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="">
                                                            <input
                                                                type="radio"
                                                                formcontrolname="weak_stream"
                                                                name="weak_stream"
                                                                value='1'
                                                                onChange={(e) => setpast3(e.target.value)}
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="">
                                                            <input
                                                                type="radio"
                                                                formcontrolname="weak_stream"
                                                                name="weak_stream"
                                                                value='2'
                                                                onChange={(e) => setpast3(e.target.value)}
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="">
                                                            <input
                                                                type="radio"
                                                                formcontrolname="weak_stream"
                                                                name="weak_stream"
                                                                value='3'
                                                                onChange={(e) => setpast3(e.target.value)}
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="">
                                                            <input
                                                                type="radio"
                                                                formcontrolname="weak_stream"
                                                                name="weak_stream"
                                                                value='4'
                                                                onChange={(e) => setpast3(e.target.value)}
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="">
                                                            <input
                                                                type="radio"
                                                                formcontrolname="weak_stream"
                                                                name="weak_stream"
                                                                value='5'
                                                                onChange={(e) => setpast3(e.target.value)}
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="">
                                            <div className="box">
                                                <div className="box1">
                                                    <p>
                                                        Over the past month or so, how
                                                        <br />
                                                        often have you found it difﬁcult
                                                        <br />
                                                        to postpone or defer urination?
                                                    </p>
                                                </div>
                                                <div className="box2">
                                                    <figure>
                                                        <img src="assets/images/symptom-severity/5.png" />
                                                    </figure>
                                                </div>
                                                <div className="box3">
                                                    <div className="number">
                                                        <button>0</button> <button>1</button> <button>2</button>
                                                        <button>3</button> <button>4</button> <button>5</button>
                                                    </div>
                                                </div>
                                                <div className="box4">
                                                    <div className="radioboxrow">
                                                        <label className="">
                                                            <input
                                                                type="radio"
                                                                formcontrolname="defer_urination"
                                                                name="defer_urination"
                                                                value='0'
                                                                onChange={(e) => setpast4(e.target.value)}
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="">
                                                            <input
                                                                type="radio"
                                                                formcontrolname="defer_urination"
                                                                name="defer_urination"
                                                                value='1'
                                                                onChange={(e) => setpast4(e.target.value)}
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="">
                                                            <input
                                                                type="radio"
                                                                formcontrolname="defer_urination"
                                                                name="defer_urination"
                                                                value='2'
                                                                onChange={(e) => setpast4(e.target.value)}
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="">
                                                            <input
                                                                type="radio"
                                                                formcontrolname="defer_urination"
                                                                name="defer_urination"
                                                                value='3'
                                                                onChange={(e) => setpast4(e.target.value)}
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="">
                                                            <input
                                                                type="radio"
                                                                formcontrolname="defer_urination"
                                                                name="defer_urination"
                                                                value='4'
                                                                onChange={(e) => setpast4(e.target.value)}
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="">
                                                            <input
                                                                type="radio"
                                                                formcontrolname="defer_urination"
                                                                name="defer_urination"
                                                                value='5'
                                                                onChange={(e) => setpast4(e.target.value)}
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="">
                                            <div className="box">
                                                <div className="box1">
                                                    <p>
                                                        Over the past month or so, how
                                                        <br />
                                                        often have you had to push or
                                                        <br />
                                                        strain to start the outﬂow of urine?
                                                    </p>
                                                </div>
                                                <div className="box2">
                                                    <figure>
                                                        <img src="assets/images/symptom-severity/6.png" />
                                                    </figure>
                                                </div>
                                                <div className="box3">
                                                    <div className="number">
                                                        <button>0</button> <button>1</button> <button>2</button>
                                                        <button>3</button> <button>4</button> <button>5</button>
                                                    </div>
                                                </div>
                                                <div className="box4">
                                                    <div className="radioboxrow">
                                                        <label className="">
                                                            <input
                                                                type="radio"
                                                                formcontrolname="push_strain"
                                                                name="push_strain"
                                                                value='0'
                                                                onChange={(e) => setpast5(e.target.value)}
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="">
                                                            <input
                                                                type="radio"
                                                                formcontrolname="push_strain"
                                                                name="push_strain"
                                                                value='1'
                                                                onChange={(e) => setpast5(e.target.value)}
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="">
                                                            <input
                                                                type="radio"
                                                                formcontrolname="push_strain"
                                                                name="push_strain"
                                                                value='2'
                                                                onChange={(e) => setpast5(e.target.value)}
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="">
                                                            <input
                                                                type="radio"
                                                                formcontrolname="push_strain"
                                                                name="push_strain"
                                                                value='3'
                                                                onChange={(e) => setpast5(e.target.value)}
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="">
                                                            <input
                                                                type="radio"
                                                                formcontrolname="push_strain"
                                                                name="push_strain"
                                                                value='4'
                                                                onChange={(e) => setpast5(e.target.value)}
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="">
                                                            <input
                                                                type="radio"
                                                                formcontrolname="push_strain"
                                                                name="push_strain"
                                                                value='5'
                                                                onChange={(e) => setpast5(e.target.value)}
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 offset-sm-3">
                                        <div className="">
                                            <div className="box">
                                                <div className="box1">
                                                    <p>
                                                        Over the past 1 month, how many times did
                                                        <br />
                                                        you most typically get up to pass urine from the
                                                        <br />
                                                        time you went to bed at night until the time
                                                        <br />
                                                        you got up in the morning?
                                                    </p>
                                                </div>
                                                <div className="box2">
                                                    <figure>
                                                        <img src="assets/images/symptom-severity/7.png" />
                                                    </figure>
                                                </div>
                                                <div className="box3">
                                                    <div className="number">
                                                        <button>0</button> <button>1</button> <button>2</button>
                                                        <button>3</button> <button>4</button> <button>5</button>
                                                    </div>
                                                </div>
                                                <div className="box4">
                                                    <div className="radioboxrow">
                                                        <div className="labelbox">
                                                            <label className="">
                                                                <input
                                                                    type="radio"
                                                                    formcontrolname="pash_urine"
                                                                    name="pash_urine"
                                                                    value='0'
                                                                    onChange={(e) => setpast6(e.target.value)}
                                                                />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <p>None</p>
                                                        </div>
                                                        <div className="labelbox">
                                                            <label className="">
                                                                <input
                                                                    type="radio"
                                                                    formcontrolname="pash_urine"
                                                                    name="pash_urine"
                                                                    value='1'
                                                                    onChange={(e) => setpast6(e.target.value)}
                                                                />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <p>Once</p>
                                                        </div>
                                                        <div className="labelbox">
                                                            <label className="">
                                                                <input
                                                                    type="radio"
                                                                    formcontrolname="pash_urine"
                                                                    name="pash_urine"
                                                                    value='2'
                                                                    onChange={(e) => setpast6(e.target.value)}
                                                                />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <p>Twice</p>
                                                        </div>
                                                        <div className="labelbox">
                                                            <label className="">
                                                                <input
                                                                    type="radio"
                                                                    formcontrolname="pash_urine"
                                                                    name="pash_urine"
                                                                    value='3'
                                                                    onChange={(e) => setpast6(e.target.value)}
                                                                />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <p>Thrice</p>
                                                        </div>
                                                        <div className="labelbox">
                                                            <label className="">
                                                                <input
                                                                    type="radio"
                                                                    formcontrolname="pash_urine"
                                                                    name="pash_urine"
                                                                    value='4'
                                                                    onChange={(e) => setpast6(e.target.value)}
                                                                />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <p>Four Times</p>
                                                        </div>
                                                        <div className="labelbox">
                                                            <label className="">
                                                                <input
                                                                    type="radio"
                                                                    formcontrolname="pash_urine"
                                                                    name="pash_urine"
                                                                    value='5'
                                                                    onChange={(e) => setpast6(e.target.value)}
                                                                />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <p>5 or more times</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 quality">
                                        <div className="">
                                            <div className="box">
                                                <h1>
                                                    QUALITY OF LIFE ASSESSMENT.<sup>2</sup>
                                                </h1>
                                                <div className="box1">
                                                    <p>
                                                        If you were to spend the rest of your life with your urinary
                                                        condition
                                                        <br />
                                                        remaining just the way it is now, how would you feel about
                                                        it?
                                                    </p>
                                                </div>
                                                {/* <form onSubmit={handalsubmit2}> */}
                                                <div className="box3">
                                                    <div className="number row">
                                                        <button className='qly' data-value='0' style={{ cursor: 'pointer' }}>
                                                            <figure className="icon">
                                                                <img src="assets/images/symptom-severity/quality1.png" />
                                                            </figure>
                                                        </button>
                                                        <button className='qly' data-value='1' style={{ cursor: 'pointer' }}>
                                                            <figure className="icon">
                                                                <img src="assets/images/symptom-severity/quality.png" />
                                                            </figure>
                                                        </button>
                                                        <button className='qly' data-value='2' style={{ cursor: 'pointer' }}>
                                                            <figure className="icon">
                                                                <img src="assets/images/symptom-severity/quality2.png" />
                                                            </figure>
                                                        </button>
                                                        <button className='qly' data-value='3' style={{ cursor: 'pointer' }}>
                                                            <figure className="icon">
                                                                <img src="assets/images/symptom-severity/quality3.png" />
                                                            </figure>
                                                        </button>
                                                        <button className='qly' data-value='4' style={{ cursor: 'pointer' }}>
                                                            <figure className="icon">
                                                                <img src="assets/images/symptom-severity/quality4.png" />
                                                            </figure>
                                                        </button>
                                                        <button className='qly' data-value='5' style={{ cursor: 'pointer' }}>
                                                            <figure className="icon">
                                                                <img src="assets/images/symptom-severity/quality5.png" />
                                                            </figure>
                                                        </button>
                                                        <button className='qly' data-value='6' style={{ cursor: 'pointer' }}>
                                                            <figure className="icon">
                                                                <img src="assets/images/symptom-severity/quality6.png" />
                                                            </figure>
                                                        </button>
                                                    </div>
                                                </div>
                                                {/* </form> */}
                                                <div className="clearfix" />
                                                <div className="box4" id="qlybox" style={{ display: 'none' }} ngid="qualityOfLiftIndex">
                                                    <div className="col-sm-6 col-sm-offset-3 m-auto">
                                                        <div className="box">
                                                            <div className="box1 col-xs-8">
                                                                <p>Quality of Life Index =</p>
                                                            </div>
                                                            <div className="box1 boxscore col-xs-4">
                                                                <p id="qlyval">

                                                                </p>
                                                            </div>
                                                        </div>
                                                        {/* <h4>
                                                                (In the box, put the number that matches your condition)
                                                            </h4> */}
                                                        {/* <div
                                                                className="alert alert-danger"
                                                                ngif="qualityInNumber 6"
                                                                role="alert"
                                                            >
                                                                Enter valid value!
                                                            </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="clearfix" />

                                        <div className="col-sm-12 mb-3">
                                            <div className="text-center">
                                                <button style={{ color: "white" }} className="border-0 btn btn-lg btn-brand-orange btn-lg m-auto px-5 purplebtn submit qul12">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>

                                        <div
                                            ngif="totalScore >= 0 && qualityInNumber >= 0"
                                            className="col-sm-8 offset-sm-2 totalscore"
                                        >
                                            <div className="" id="totalScore" style={{ display: 'none' }}>
                                                <div className="outerbox">
                                                    <div className="box">
                                                        <div className="box1 col-xs-8">
                                                            <p>Your Total Score =</p>
                                                        </div>
                                                        <div className="box1 boxscore col-xs-4">
                                                            <p>
                                                                totalScore
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <h4>
                                                        (Add your scores from these questions and write the total
                                                        score)
                                                    </h4>

                                                    <div className="box2">
                                                        <h3>
                                                            KNOW AND TRACK THE SEVERITY
                                                            <br />
                                                            OF YOUR BPH SYMPTOMS AS PER
                                                            <br />
                                                            YOUR TOTAL BPH SCORE.<sup>3</sup>
                                                        </h3>
                                                    </div>
                                                    <div className="box2 meterbox position-relative">
                                                        <figure className="meter">
                                                            <img
                                                                src="assets/images/meter.png"
                                                                className="img-fluid"
                                                            />
                                                        </figure>
                                                        <figure className="indicator">
                                                            <img
                                                                src="assets/images/indicator.png"
                                                                className="img-fluid"
                                                            />
                                                        </figure>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    ngif="totalScore >= 0 && qualityInNumber >= 0"
                    className="howsevere"
                    id="contentToConvert"
                >
                    <div className="container" id="howserver" style={{ display: 'none' }}>
                        <div className="row">
                            <h1>HOW SEVERE ARE YOUR SYMPTOMS?</h1>
                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="symptomscore">
                                            <div className="scorenumber">
                                                <h2>
                                                    7
                                                </h2>
                                            </div>
                                            <div className="scoredetails">
                                                <p>Your BPH symptom score</p>
                                                <h4>
                                                    Mild
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="symptomscore">
                                            <div className="scorenumber">
                                                <h2>
                                                    1
                                                </h2>
                                            </div>
                                            <div className="scoredetails">
                                                <p>Your Quality of Life Score</p>
                                                <h4>
                                                    Pleased
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 scoresymptommeaning mt-5">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="row">
                                        <h4>
                                            WHAT YOUR SYMPTOM SCORE MEANS:<sup>1</sup>
                                        </h4>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="row scoresymptommeaningbox">
                                        <div className="col-xs-5 score">
                                            <h4>Score</h4>
                                        </div>
                                        <div className="col-xs-7 severity">
                                            <h4>Symptom Severity</h4>
                                        </div>
                                    </div>
                                    <div className="row scoresymptommeaningbox">
                                        <div className="col-xs-5 score">
                                            <button>
                                                <h4>1-7</h4>
                                            </button>
                                        </div>
                                        <div className="col-xs-7 severity">
                                            <h4>Mild</h4>
                                        </div>
                                    </div>
                                    <div className="row scoresymptommeaningbox">
                                        <div className="col-xs-5 score">
                                            <button>
                                                <h4>8-19</h4>
                                            </button>
                                        </div>
                                        <div className="col-xs-7 severity">
                                            <h4>Moderate</h4>
                                        </div>
                                    </div>
                                    <div className="row scoresymptommeaningbox">
                                        <div className="col-xs-5 score">
                                            <button>
                                                <h4>20-35</h4>
                                            </button>
                                        </div>
                                        <div className="col-xs-7 severity">
                                            <h4>Severe</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 details">
                                    <p>
                                        Your total score is
                                        totalScore
                                        ,<br />
                                        indicative of
                                        <b>

                                            getBPHSymptom

                                        </b>
                                        BPH symptoms.
                                        <br />
                                        Depending on your score, your
                                        <br />
                                        symptoms can be categorised as:
                                        <br />
                                        Mild (1-7), Moderate (8-19) or Severe (20-35).
                                        <br />
                                        <b>
                                            However, it is advisable to visit a doctor
                                            <br />
                                            for a definitive diagnoshis
                                        </b>
                                        <br />
                                        <b>
                                            Visit :
                                            <a href="https://www.whatarelief.in/" target="blank">
                                                https://www.whatarelief.in/
                                            </a>
                                            <br />
                                            to find your nearest one
                                        </b>
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 btn text-left">
                                        <img src="assets/images/symptom-severity/btn1.png" />
                                    </div>
                                    <div className="col-sm-6 btn text-left cursor-auto">
                                        <img src="assets/images/symptom-severity/btn2.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="summary mt-5">
                                    <div>
                                        <h1>
                                            To Check BPH Score on WhatsApp, Give a miss call on
                                            <span className="numberitalic">7877315315</span> or share this
                                            with No. with your loved ones.
                                        </h1>
                                    </div>
                                    <h1>Summary of the score</h1>
                                    <div className="col-sm-12">
                                        <div className="row">
                                            <button
                                                ngfor="let values of questionaiesVal"
                                                className="cursor-auto"
                                            >

                                                values

                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main >
            <Footer />
        </React.Fragment >
    )
}
