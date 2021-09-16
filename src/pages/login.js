import React, { Component } from 'react';
import mockup from "../assets/mockup.svg"
import "../assets/login.css"

class Login extends Component{
    render(){
        return(
            <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6 position-relative">
                    <img src={mockup} class="mockup mt-5" alt="mockup"/>
                </div>
   
                <div class="col-md-4 mt-5 login">
                    <div class="login-form bg-light mt-4 p-4">
                        <form action="" method="" class="row g-3 mt-4">
                            <h4 class="text-center">SIGN IN</h4>
                            <p class="text-center">Daftar dan mulailah hidup bersih!</p>
                            <div class="col-12">
                                <input type="text" name="username" class="form-control" placeholder="Username"/>
                            </div>
                            <div class="col-12">
    
                                <input type="password" name="password" class="form-control" placeholder="Password"/>
                            </div>
                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="rememberMe"/>
                                    <label class="form-check-label" for="rememberMe"> Remember me</label>
                                    <label class="form-check-label ms-4" for="rememberMe"> Forgot Password ?</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn float-end">Register</button>
                            </div>
                        </form>
                        <div class="col-12 mt-3">
                            <p class="text-center mb-0">Belum punya akun ? <a href="#" class="signup">Signup</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Login;