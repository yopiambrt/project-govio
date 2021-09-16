import React, { Component } from 'react';
import logo from '../assets/logo-footer.svg'
import fb from '../assets/fb.svg'
import ig from '../assets/instagram.svg'


class Footer extends Component{
    render(){
        return(
            <section id="footer">
            <div class="container py-4">
                <div class="row px-lg-5 px-md-3 text-center text-sm-start">
                    <div class="col-xs-12 col-sm-4 col-md-3">
                        <div class="logo-footer text-start mt-5 text-center">
                            <img src={logo} alt="logo-footer" class="w-100" />
                        </div>
                    </div>
              
                    <div class="col-xs-12 ps-md-5 col-sm-4 col-md-3">
                        <ul class="list-unstyled quick-links mt-5">
                            <li>
                                <a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-angle-double-right"></i>Home</a>
                            </li>
                            <li>
                                <a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-angle-double-right"></i>Login Admin</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-xs-12 col-sm-4 col-md-3">
                        <ul class="list-unstyled quick-links mt-5">
                            <li>
                                <a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-angle-double-right"></i>About Us</a>
                            </li>
                            <li>
                                <a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-angle-double-right"></i>Login Admin</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-xs-12 col-sm-4 col-md-3">
                        <h6 class="mt-5 text-white">Contact Us:</h6>
                        <p class="text-break">ivanraka2000@gmail.com</p>
                        <div class="flex flex-wrap">
                            <a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-angle-double-right"></i><img src={fb} /></a>
                            <a class="ms-3" href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-angle-double-right"></i><img src={ig}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  
        )
    }
}

export default Footer;
