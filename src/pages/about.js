import React, { Component } from 'react';
import about from "../assets/about.png"

class About extends Component{
    render(){
        return(
            <div class="container-xxl bg-white p-0">
            <section class="container py-4 p-3">
              <div class="row justify-content-center" style={{marginTop : "6rem"}}>
                <div class="col-md-11">
                  <div class="row">
                    <div class="col-md-7">
                      <h1 class="what">TENTANG GOVIO</h1>
                      <p class="text-secondary">
                        <img class="w-100 d-block d-md-none mb-3" src={about} alt="Tentang kami"   style={{borderRadius : "1.5rem"}} />
                        Govio.id didirikan pada tahun 2021. Saat ini, Govio.id merupakan platform olah sampah yang dikelola oleh PT. Media Kreasi Abadi Balikpapan. Platform ini difokuskan kepada warga atau mitra yang tinggal atau bekerja di Balikpapan.
                      </p>
                    </div>
                    <div class="col-md-5 d-none d-md-block text-end">
                      <img class="w-100" src={about} alt="Tentang kami" style={{borderRadius : "1.5rem"}}/>
                    </div>
                  </div>
                  <div class="row mt-5">
                    <div class="col-md-5 d-none d-md-block text-start">
                      <img class="w-100" src="https://images.unsplash.com/photo-1604631698209-c105c7874ea8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=359&q=80" alt="Tentang kami" style={{borderRadius : "1.5rem"}} />
                    </div>
                    <div class="col-md-7">
                      <h1 class="what">REUCE, REDUCE, RECYCLE</h1>
                      <p class="text-secondary">
                        <img
                          class="w-100 d-block d-md-none mb-3"
                          src="https://images.unsplash.com/photo-1604631698209-c105c7874ea8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=359&q=80"
                          alt="Tentang kami"
                           style={{borderRadius : "1.5rem"}}
                        />
                        Layanan yang kami berikan adalah Govio.id didirikan pada tahun 2021. Saat ini, Govio.id merupakan platform olah sampah yang dikelola oleh PT. Media Kreasi Abadi Balikpapan. Platform ini difokuskan kepada warga atau mitra yang
                        tinggal atau bekerja di Balikpapan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
      
        
          </div>
        )
    }
}

export default About;