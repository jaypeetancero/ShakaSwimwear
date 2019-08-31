import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div className="font-grotesque">
                <div className="bg-dark">
                    <div className="container-fluid">
                        <div className="py-2 text-white">
                            <img src="https://instagram.fmnl4-2.fna.fbcdn.net/vp/5e75a07cb8a1426b30294480cad24005/5DF66611/t51.2885-19/s150x150/38458106_1783732921747920_1659467988992000000_n.jpg?_nc_ht=instagram.fmnl4-2.fna.fbcdn.net" className="header-logo"/>
                            <span className="header-title">ShakaSwim</span>
                            <div className="float-right">
                                <a href="#" className="text-light"><span className="px-2 header-secondary">Login</span></a>
                                <a href="#" className="text-light"><span className="px-2 header-secondary">Register</span></a>
                                <a href="#" className="text-light"><i className="fas fa-shopping-cart fa-2x px-2 py-3"></i></a>
                            </div>
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
                                    <a href="#" className="h4 nav-link">Home</a>
                                </li>
                                <li className="nav-item dropdown px-5">
                                    <a href="#" className="dropdown-toggle h4 nav-link" id="navbarDropdown" data-toggle="dropdown">Shop by Categories</a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a href="#" className="dropdown-item h4 nav-link">One Piece</a>
                                        <a href="#" className="dropdown-item h4 nav-link">Bikini Sets</a>
                                        <a href="#" className="dropdown-item h4 nav-link">Tops</a>
                                        <a href="#" className="dropdown-item h4 nav-link">Bottom</a>
                                    </div>
                                </li>
                                <li className="nav-item px-5 h4">
                                    <a href="#" className="nav-link">About us</a>
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
