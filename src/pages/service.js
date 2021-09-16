import React, { Component } from 'react';
import background from "../assets/pickup.svg"
import background2 from "../assets/dropoff.svg"
import background3 from "../assets/company.svg"
import background4 from "../assets/service4.svg"
import mockup from "../assets/mockup2.svg"

class Service extends Component{
    render(){
        return(
          <div class="container-xxl bg-white p-0">
            <section class="container py-5 p-3 px-lg-5">
            <div class="row justify-content-center" style={{marginTop : "6rem"}}>
              <div class="col-md-9">
                <div style={{backgroundImage : `url(${background})`}} class="service-card mb-5">
                  <div class="service-title">Pick Up</div>
                  <div class="service-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt accusamus magni error exercitationem perspiciatis. Sed, eveniet reprehenderit. Dolorem eligendi laborum quaerat iste, sunt deleniti hic asperiores beatae cum placeat
                    minima!
                  </div>
                </div>
              </div>
              <div class="col-md-9">
                <div style={{backgroundImage : `url(${background2})`}} class="service-card mb-5">
                  <div class="service-title">Drop Off</div>
                  <div class="service-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt accusamus magni error exercitationem perspiciatis. Sed, eveniet reprehenderit. Dolorem eligendi laborum quaerat iste, sunt deleniti hic asperiores beatae cum placeat
                    minima!
                  </div>
                </div>
              </div>
              <div class="col-md-9">
                <div  style={{backgroundImage : `url(${background3})`}} class="service-card mb-5">
                  <div class="service-title">Company</div>
                  <div class="service-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt accusamus magni error exercitationem perspiciatis. Sed, eveniet reprehenderit. Dolorem eligendi laborum quaerat iste, sunt deleniti hic asperiores beatae cum placeat
                    minima!
                  </div>
                </div>
              </div>
              {/* <div class="col-md-9">
                <div  style={{backgroundImage : `url(${background4})`}} class="service-card mb-5">
                  <div class="service-title">Gv Point</div>
                  <div class="service-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt accusamus magni error exercitationem perspiciatis. Sed, eveniet reprehenderit. Dolorem eligendi laborum quaerat iste, sunt deleniti hic asperiores beatae cum placeat
                    minima!
                  </div>
                </div>
              </div> */}
            </div>
            
            <div class="container row justify-content-center align-items-end">
              <div class="col-md-5">
                <h1 class="what">Cara Download</h1>
                <div class="text-secondary">
                  <div class="mx-auto rectangle d-block d-md-none mb-4" style={{ marginTop: "5rem"}}>
                    <img class="w-100" src={mockup} alt="Download Govio" style={{ borderRadius: "1.5rem"}} />
                  </div>
                  Pertama buka aplikasi Playstore. Ketik di pencarian “Govio”. <br/> Pilih, lalu download aplikasinya. <br/> <br/>Atau kalian bisa buka website Govio.id Lalu klik tombol download yang ada di beranda website. Kalian akan dialiohkan ke halaman Playstore.
                </div>
              </div>
              <div class="col-md-5 d-none d-md-block">
                <div class="rectangle ms-auto">
                  <img class="w-100" src={mockup} alt="Download Govio" style={{ borderRadius: "1.5rem"}} />
                </div>
              </div>
            </div>
          </section>

          </div>
        )
    }
}

export default Service;