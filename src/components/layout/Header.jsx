import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                <div className="bg-primary-1">
                    <div className="container-fluid">
                        <div className="py-2">
                            <span className="h1 font-grotesque">ShakaSwim</span>
                            <span className="h3 float-right px-1 font-grotesque">Login</span>
                            <span className="h3 float-right px-1 font-grotesque">Register</span>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-expand-lg navbar-expand-xl navbar-light">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item px-5">
                                    <a href="#" className="font-grotesque h4 nav-link">Home</a>
                                </li>
                                <li className="nav-item dropdown px-5">
                                    <a href="#" className="dropdown-toggle font-grotesque h4 nav-link" id="navbarDropdown" data-toggle="dropdown">Shop by Categories</a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a href="#" className="dropdown-item font-grotesque h4 nav-link">One Piece</a>
                                        <a href="#" className="dropdown-item font-grotesque h4 nav-link">Bikini Sets</a>
                                        <a href="#" className="dropdown-item font-grotesque h4 nav-link">Tops</a>
                                        <a href="#" className="dropdown-item font-grotesque h4 nav-link">Bottom</a>
                                    </div>
                                </li>
                                <li className="nav-item px-5 h4">
                                    <a href="#" className="font-grotesque nav-link">About us</a>
                                </li>
                                <li className="nav-item px-5 h4">
                                    <a href="#" className="font-grotesque nav-link">Contact us</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Header
