import React, { Component } from 'react';
import logo1 from "../assets/logo-hero1.svg"
import text from "../assets/text-sampah-jadi-uang.svg"
import background from "../assets/hero1.svg"
import background2 from "../assets/bg-hero2.svg"
import card1 from "../assets/card1.svg"
import card2 from "../assets/card2.svg"
import card3 from "../assets/card3.svg"
import service1 from "../assets/service1.svg"
import service3 from "../assets/service3.svg"
import service2 from "../assets/service2.svg"
import service4 from "../assets/service4.svg"
import icon1 from "../assets/icon1.svg"
import icon2 from "../assets/icon2.svg"
import icon3 from "../assets/icon3.svg"
import icon4 from "../assets/icon4.svg"


class Homepage extends Component{
    render(){
        return(
            <div class="container-xxl bg-white p-0">
          <section id="hero1">
                <div class="container-fluid">
                    <div class="row bg-hero1" style={{backgroundImage : `url(${background})`, marginTop : "4rem"}}>
                      
                        <div class="main-konten text-center top">
                            <img src={logo1} alt="logo-hero1" /> <br/>
                            <img src={text} alt="text" class="text" />
                            <p class="mt-3">Ubah sampahmu menjadi uang dengan aplikasi Govio.id</p>
                            <button type="button" class="btn btn">Download Govio</button>
                        </div>
                        
                    </div>
                </div>
            </section>

        
            <section id="hero2" class="bg">
                <div class="container-fluid overflow-hidden h-100 mt-5 hero2"  style={{backgroundImage : `url(${background2})`}}>
                    <div class="row justify-content-center" style={{marginBottom : "5rem"}}>
                
                        <div class="col-md-4">
                            <div class="box">
                                <h1>Tentang Kami</h1>
                                <p>Govio adalah aplikasi untuk menyetorkan kemasan bekas pakai, untuk di daur ulang.</p>
                            </div>
                        </div>
                 
                        <div class="col-md-4">
                            <div class="box ms">
                                <h1 class="text-end">Lokasi</h1>
                                <p class="text-end">Untuk saat ini aplikasi Govio hanya mencakup kawasan kota Kalimantan, tepatnya di Balikpapan</p>
                            </div>
                        </div>
                    </div>
                    <div class="button text-center mb-5"><button type="button" class="btn btn-light">Selengkapnya</button></div>
                </div>
            </section>

            <section id="hero3">
                <div class="container hero3">
                    <h1 class="text-center what">Apa yang Kita Lakukan?</h1>
                    <div class="row justify-content-center mt-4">
                        <div class="col-md-3 mt-2 d-flex align-items-stretch">
                            <div class="card mobile">
                                <img src={card1} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Mendaur Ulang Sampah</h5>
                                    <p class="card-text">Kami membantu mengelola sampah masyarakat untuk diolah</p>
                                </div>
                            </div>
                        </div>
                     
                        <div class="col-md-3 mt-2 ms-md-4 d-flex align-items-stretch">
                            <div class="card mobile">
                                <img src={card2} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Mengelola Sampah</h5>
                                    <p class="card-text">Kami membantu mengelola sampah masyarakat untuk diolah</p>
                                </div>
                            </div>
                        </div>
                     
                        <div class="col-md-3 mt-2 ms-md-4 d-flex align-items-stretch">
                            <div class="card mobile">
                                <img src={card3} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Melestarikan Lingkungan</h5>
                                    <p class="card-text">Dengan adanya Govio.id membantu masyarakat melestarikan lingkungan dan juga terbebas dari sampah.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             
            <section id="hero4">
                <div class="container mt-5">
                    <h1 class="text-center what">Layanan</h1>
                    <div class="row justify-content-center">
                  
                        <div class="col-md-5">
                            <div class="card overflow-hidden text-white service mt-4">
                                <img src={service1} class="card-img" alt="..." />
                                <div class="card-img-overlay">
                                    <h1 class="text-white text-service">Pick up</h1>
                                </div>
                            </div>
                        
                            <div class="card overflow-hidden text-white mt-4">
                                <img src={service3} class="card-img" alt="..." />
                                <div class="card-img-overlay">
                                    <h1 class="text-white text-service">Company</h1>
                                </div>
                            </div>
                        </div>
                      
                        <div class="col-md-5">
                            <div class="card overflow-hidden text-white mt-4">
                                <img src={service2} class="card-img" alt="..." />
                                <div class="card-img-overlay">
                                    <h1 class="text-white text-service">Drop Off</h1>
                                </div>
                            </div>
                          
                            <div class="card overflow-hidden text-white mt-4">
                                <img src={service4} class="card-img" alt="..." />
                                <div class="card-img-overlay">
                                    <h1 class="text-white text-service">GV point</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
              
            <section id="hero5">
                <div class="container mt-5">
                    <h1 class="text-center what">Kenapa Govio?</h1>
                    <div class="row justify-content-center">
                        <div class="col-md-11">
                            <div class="row justify-content-center px-3">
                                <div class="px-4 py-2 p-xl-4 col-md-6 col-xl-3 d-flex align-items-stretch mt-2">
                                    <div class="card-why row p-3">
                                        <div class="col-12 d-flex align-items-center">
                                            <img src={icon1} class="icon" alt="Card Image " />
                                            <h3 class="ms-3">Praktis</h3>
                                        </div>
                                        <div class="col-12 mt-3">Pengelolaan data dilakukan secara digital & dapat meningkatkan paperless activity.</div>
                                    </div>
                                </div>
    
                            
                                <div class="px-4 py-2 p-xl-4 col-md-6 col-xl-3 d-flex align-items-stretch mt-2">
                                    <div class="card-why row p-3">
                                        <div class="col-12 d-flex align-items-center">
                                            <img src={icon2} class="icon" alt="Card Image " />
                                            <h3 class="ms-3">Fitur</h3>
                                        </div>
                                        <div class="col-12 mt-3">Fitur di aplikasi Govio yang lengkap dan juga simple memudahkan user untuk memakai aplikasinya.</div>
                                    </div>
                                </div>
    
                                <div class="px-4 py-2 p-xl-4 col-md-6 col-xl-3 d-flex align-items-stretch mt-2">
                                    <div class="card-why row p-3">
                                        <div class="col-12 d-flex align-items-center">
                                            <img src={icon3} class="icon" alt="Card Image " />
                                            <h3 class="ms-3">Aman</h3>
                                        </div>
                                        <div class="col-12 mt-3">Untuk keamanan data Anda, Govio.id menggunakan SSL/TLS untuk transaksi data dan enkripsi untuk penyimpanan data</div>
                                    </div>
                                </div>
    
                       
                                <div class="px-4 py-2 p-xl-4 col-md-6 col-xl-3 d-flex align-items-stretch mt-2">
                                    <div class="card-why row p-3">
                                        <div class="col-12 d-flex align-items-center">
                                            <img src={icon4} class="icon" alt="Card Image " />
                                            <h3 class="ms-3">Mobile App</h3>
                                        </div>
                                        <div class="col-12 mt-3">Dengan menggunakan smartphone berbasis Android, Govio dapat melakukan transaksi dengan mudah dan nyaman</div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </section>
 
            <section>
                <div class="container-fluid mt-5">
                    <h1 class="text-center mb-5 what">Pertanyaan Umum</h1>
                    <div class="row justify-content-center">
                        <div class="col-md-10">
                            <div class="row">
                          
                                <div class="col-md-4 mb-4 mb-lg-5 px-md-4">
                                    <a class="h5 text-decoration-none text-dark fw-bolder mb-3 mb-lg-4" data-bs-toggle="collapse" href="#pertanyaan1">Kenapa harus pilih aplikasi Govio?
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0b9444" class="bi bi-chevron-right" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                      </a>
                                    <div id="pertanyaan1" class="collapse mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, distinctio!</div>
                                </div>
                          
                                <div class="col-md-4 mb-4 mb-lg-5 px-md-4">
                                    <a class="h5 text-decoration-none text-dark fw-bolder mb-3 mb-lg-4" data-bs-toggle="collapse" href="#pertanyaan2">Apakah keamanan aplikasi Govio terpercaya?
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0b9444" class="bi bi-chevron-right" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                      </a>
                                    <div id="pertanyaan2" class="collapse mt-2">Pengguna hanya perlu memilih kategori yang disediakan di halaman aplikasi Govio, selesaikan langkah langkahnya, dan tunggu petugas datang ke lokasi.</div>
                                </div>
                          
                                <div class="col-md-4 mb-4 mb-lg-5 px-md-4">
                                    <a class="h5 text-decoration-none text-dark fw-bolder mb-3 mb-lg-4" data-bs-toggle="collapse" href="#pertanyaan3">Bagaimana sistem penjemputan sampah di aplikasi Govio?
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0b9444" class="bi bi-chevron-right" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                      </a>
                                    <div id="pertanyaan3" class="collapse mt-2">Lorem ipsum dolor sit amet.</div>
                                </div>
                        
                                <div class="col-md-4 mb-4 mb-lg-5 px-md-4">
                                    <a class="h5 text-decoration-none text-dark fw-bolder mb-3 mb-lg-4" data-bs-toggle="collapse" href="#pertanyaan4">Jenis sampah apa saja yang bisa dijual?
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0b9444" class="bi bi-chevron-right" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                      </a>
                                    <div id="pertanyaan4" class="collapse mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eum nihil ad quidem corrupti voluptatem sunt iste nam eaque modi.</div>
                                </div>
                             
                                <div class="col-md-4 mb-4 mb-lg-5 px-md-4">
                                    <a class="h5 text-decoration-none text-dark fw-bolder mb-3 mb-lg-4" data-bs-toggle="collapse" href="#pertanyaan5">Bagaimana cara menukarkan sampah kita menjadi uang melalui aplikasi Govio?
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0b9444" class="bi bi-chevron-right" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                      </a>
                                    <div id="pertanyaan5" class="collapse mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, consectetur aut? Dolorem dolor ducimus vel?</div>
                                </div>
                         
                                <div class="col-md-4 mb-4 mb-lg-5 px-md-4">
                                    <a class="h5 text-decoration-none text-dark fw-bolder mb-3 mb-lg-4" data-bs-toggle="collapse" href="#pertanyaan6">Berapa lama waktu proses penukaran point?
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0b9444" class="bi bi-chevron-right" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                      </a>
                                    <div id="pertanyaan6" class="collapse mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, tempora.</div>
                                </div>
                         
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    
        
          
        </div>
    
        )
    }
}

export default Homepage;