import React, { Component } from 'react';

class Portfolio extends Component {

    render() {
        return (
            <>
             <section className="page-section" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Doctors</h2>
                    <h3 className="section-subheading text-muted">Some doctors</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid some-doctors" src="https://www.miraldental.com/wp-content/uploads/2018/12/doctor-img2.png" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Threads</div>
                                <div className="portfolio-caption-subheading text-muted">Illustration</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid some-doctors" src="https://purepng.com/public/uploads/medium/purepng.com-doctordoctorsdoctors-and-nursesclinicianmedical-practitionernotepadfemale-1421526857221awrbd.png" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Explore</div>
                                <div className="portfolio-caption-subheading text-muted">Graphic Design</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid some-doctors" src="https://images.theconversation.com/files/277995/original/file-20190604-69087-6q2xjq.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Finish</div>
                                <div className="portfolio-caption-subheading text-muted">Identity</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid some-doctors" src="https://images.theconversation.com/files/277995/original/file-20190604-69087-6q2xjq.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Lines</div>
                                <div className="portfolio-caption-subheading text-muted">Branding</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal5">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid some-doctors" src="https://www.pngkey.com/png/full/305-3053162_save-money-hiring-physicians-doctor-poses.png" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Southwest</div>
                                <div className="portfolio-caption-subheading text-muted">Website Design</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid some-doctors" src="https://images.theconversation.com/files/277995/original/file-20190604-69087-6q2xjq.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Window</div>
                                <div className="portfolio-caption-subheading text-muted">Photography</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
</>
        );
    }
    
}

export default Portfolio;