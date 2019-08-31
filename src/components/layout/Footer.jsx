import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div className="contaier-fluid bg-dark text-white font-grotesque">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <span className="h2">Stay Connected</span>
                            <br />
                            <a href="#" className="text-light"><i class="fab fa-facebook fa-4x mx-1"></i></a>
                            <a href="https://www.instagram.com/shakaswim.ph/" className="text-light"><i class="fab fa-instagram fa-4x mx-1"></i></a>
                            <a href="#" className="text-light"><i class="fab fa-twitter fa-4x mx-1"></i></a>
                        </div>
                        <div className="col">
                            <span className="h2">Contact Us</span>
                            <div className="row">
                                <i class="fas fa-envelope fa-4x mx-1 col"></i>
                                <div className="col h5">
                                    <span>www.jaypeetan.bsit@gmail.com</span>
                                    <br/>
                                    <span>+02-938-0799</span>
                                    <br />
                                    <span>+639971699023</span>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <span className="h2">Location</span>
                            <div className="row">
                                <div className="col">
                                    <i className="fas fa-map-marked-alt fa-4x"></i>
                                </div>
                                <div className="col">
                                    <span className="h5">Blk 1 Fb Lot 2 Mahogany Street Cristina Homes Camarin Caloocan City</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h3 d-flex justify-content-center">
                        <span>All rights Reserved. Jaypee Tan 2019</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
