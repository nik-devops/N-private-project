import React from 'react'

export default function ChemistLocation() {
    return (
        <React.Fragment>
            <section id="" className="chemistlocator position-relative py-5 ">
                <div className="container">
                    <div className="sectiontitle text-center mb-4 mt-5">
                        <h2 className="m-0 pt-4">Chemists Around</h2>
                    </div>
                    <div className="col-sm-12 chemistdetails mt-5">
                        <div className="row" ngif="chemistList.length !== 0">
                            <div className="col-sm-5">
                                <div className="chemistbox">
                                    <div
                                        className="detailsbox"
                                        ngfor="let chemist of chemistList; let i = index;"
                                        onclick="showOnIfrmae(i)"
                                    >
                                        <h4>

                                            chemist.chemist_name

                                        </h4>
                                        <p>

                                            chemist.address

                                        </p>
                                        <p>
                                            Landmark :
                                            chemist.landmark

                                        </p>
                                        <p>
                                            Pincode :
                                            chemist.pincode

                                        </p>
                                        <p>
                                            Email Id :
                                            <a href="'mailto:'+ chemist.chemist_email">

                                                chemist.chemist_email

                                            </a>
                                        </p>
                                        <p>
                                            Contact :
                                            <a href="'tel:'+ chemist.chemist_mobile">

                                                chemist.chemist_mobile

                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-7">
                                <div className="row">
                                    <div className="mapouter">
                                        <div className="gmap_canvas">
                                            <iframe
                                                src="sanitizedUrl"
                                                id="gmap_canvas"
                                                style={{ width: "100%" }}
                                                height={500}
                                                frameBorder={0}
                                                scrolling="no"
                                                marginHeight={0}
                                                marginWidth={0}
                                            />
                                            <a href="https://www.embedgooglemap.net/blog/best-wordpress-themes/">
                                                embedgooglemap.net
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" ngif="chemistList.length === 0">
                            <div className="container text-center">
                                <h2>No Record Found!</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}
