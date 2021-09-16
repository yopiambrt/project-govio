import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.svg";


class Navbar extends Component{
    render(){
        return(
          
            <nav class="navbar navbar-expand-lg navbar-light shadow-sm fixed-top" style={{ backgroundColor: 'white' }}>
                <div class="container">
                    <a class="navbar-brand" href="#"><img src={logo} alt="logo" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                        <Link to="/" className="nav-link active ms-4" aria-current="page">Beranda</Link>
                        <Link to="/about" className="nav-link ms-4">Tentang Kami</Link>
                        <Link to="/service" className="nav-link ms-4">Layanan</Link>
                        <Link to="/tutorial" className="nav-link ms-4">Cara Pakai</Link>
                        <a href="/login" className="nav-link ms-4">Login</a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;
