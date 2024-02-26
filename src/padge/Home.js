import React from 'react'
 
 
import Image2 from './images/slpjpg.jpg';
import Image3 from './images/r2.jpg';
 
 

function Home() {
  return (
    <div>
 
  <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="5000">
      <img src={Image2} className="d-block w-100" alt="..."/>
    </div>
    {/* <div className="carousel-item" data-bs-interval="1000">
      <img src={Image2} className="d-block w-100" alt="..."/>
    </div> */}
    <div className="carousel-item" data-bs-interval="5000">
      <img src={Image3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


 
    </div>
  )
}

export default Home;   