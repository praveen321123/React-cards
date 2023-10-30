import React from 'react'
import img1 from "../assets/hayabusa.webp"
import img2 from "../assets/Ducati-Panigale-V4.jpg"
import img3 from "../assets/kawasaki-ninja-zx.webp"
import img4 from "../assets/r6-yamaha.webp"
import img5 from "../assets/ktm-new.webp"
import img6 from "../assets/aprilia-rsv4.webp"
import img7 from "../assets/duke-390.avif"
import img8 from "../assets/Kawasaki-Ninja.jpg"

const Cards = () => {

	const style = {
		cardSize: {
			width: "14rem"
		},
		imgSize:{
      height: "130px"
		}
	}

  return (
    <div>
      <div className="container my-4 position-sticky top-0">
				<h4 className='text-center'>New Versions!</h4>
				<div className="row my-4">
					<div className="col-md-3">
				    <div className="card" style={style.cardSize}>
              <img src={img1} className="card-img-top" alt="img1" style={style.imgSize}/>
              <div className="card-body">
                <p className="card-text">'Legendary for establishing new levels of ultimate sport performance, and for retaining'.</p>
              </div>
            </div>
					</div>
					<div className="col-md-3">
				    <div className="card" style={style.cardSize}>
              <img src={img2} className="card-img-top" alt="img2" style={style.imgSize}/>
              <div className="card-body">
                <p className="card-text">'All information about our different models of bikes, the racing in MotoGP and Superbike, and dealers'.</p>
              </div>
            </div>
					</div>
					<div className="col-md-3">
				    <div className="card" style={style.cardSize}>
              <img src={img3} className="card-img-top" alt="img3" style={style.imgSize}/>
              <div className="card-body">
                <p className="card-text">'The Kawasaki Ninja ZX-10R is powered by 998cc BS6. A power of 200.21 bhp|torque of 114.9 Nm'.</p>
              </div>
            </div>
					</div>
					<div className="col-md-3">
				    <div className="card" style={style.cardSize}>
              <img src={img4} className="card-img-top" alt="img4" style={style.imgSize}/>
              <div className="card-body">
                <p className="card-text">'Yamaha has continued the R6 and Bikes Similar to R5. Bajaj Pulsar 220 F. 220 cc|40 kmpl|20.11 bhp'.</p>
              </div>
            </div>
					</div>
				</div>
				<div className="row my-4">
				  <div className="col-md-3">
				    <div className="card" style={style.cardSize}>
              <img src={img5} className="card-img-top" alt="img5" style={style.imgSize}/>
              <div className="card-body">
                <p className="card-text">'KTM RC 390 is a high-performance supersports machine in India  as well as race-derived styling'.</p>
              </div>
            </div>
					</div>
					<div className="col-md-3">
				    <div className="card" style={style.cardSize}>
              <img src={img6} className="card-img-top" alt="img6" style={style.imgSize}/>
              <div className="card-body">
                <p className="card-text">'Aprilia was born into racing and brand for Piaggio Group. With 294 Grand Prix races won'.</p>
              </div>
            </div>
					</div>
					<div className="col-md-3">
				    <div className="card" style={style.cardSize}>
              <img src={img7} className="card-img-top" alt="img7" style={style.imgSize}/>
              <div className="card-body">
                <p className="card-text">'The KTM 390 Duke is a price tag of Rs.3.11 Lakh.390 is powered by a 399 cc bs6-2.0 engine'.</p>
              </div>
            </div>
					</div>
					<div className="col-md-3">
				    <div className="card" style={style.cardSize}>
              <img src={img8} className="card-img-top" alt="img8" style={style.imgSize}/>
              <div className="card-body">
                <p className="card-text">'The Kawasaki Ninja H2R is powered by 998cc BS6. A power of 305.75 bhp and a torque of 165 Nm'.</p>
              </div>
            </div>
					</div>
				</div>
			</div>
    </div>
  )
}

export default Cards