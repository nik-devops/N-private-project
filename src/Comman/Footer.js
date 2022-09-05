import React from 'react'

export default function Footer() {
    return (
        <React.Fragment>
            <footer className="py-5">
                <div className="container d-flex align-content-center">
                    <figure className="m-0 p-0">
                        <img src="assets/images/ciplalogo.png" />
                    </figure>
                    <p className="text-white">
                        A Cipla initiative for awareness only. For further details, contact us at
                        Cipla Ltd. Regd. Office: Cipla House, Peninsula Business Park,Ganpatrao
                        Kadam Marg, Lower Parel, Mumbai-400013, India.
                        <br />© Copyright 2018. Cipla
                        <a href="assets/images/Terms&Conditions.pdf" className="text-white">
                            Terms &amp; Condtions
                        </a>
                        |
                        <a href="assets/images/PrivacyPolicy.pdf" className="s-white">
                            Privacy Policy
                        </a>
                        |
                        <a href="assets/images/Disclaimer.pdf" className="text-white">
                            Disclaimer
                        </a>
                    </p>
                </div>
            </footer>
        </React.Fragment>
    )
}
