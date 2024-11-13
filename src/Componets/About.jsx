import React from 'react';
import Artwork from "../IMG/Artwork.png";
import Rectangle from "../IMG/Rectangle.png";

export default function About() {
  return (
    <div className='About_Main'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>
            <img src={Artwork} alt="Artwork" className='About_IMG' />
          </div>

          <div className='col-lg-6 col-md-12 about-content'>
            <div className='About_Text'>
              <h4 className='py-4'>Nulla lobortis nunc vitae purus facilisis</h4>
              <span>Vestibulum sit amet tortor libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper ultrices. Aenean facilisis vitae purus facilisis semper.</span>

              <div className='About_stats d-flex justify-content-between align-items-center'>
                <div className="stat-item">
                  <h3>200+</h3>
                  <span> <img src={Rectangle} className='mb-2' alt="Rectangle" /> </span>
                  <h5>Employee</h5>
                </div>

                <div className="stat-item">
                  <h3>500+</h3>
                  <span> <img src={Rectangle} className='mb-2' alt="Rectangle" /> </span>
                  <h5>Project</h5>
                </div>

                <div className="stat-item">
                  <h3>300+</h3>
                  <span> <img src={Rectangle} className='mb-2' alt="Rectangle" /> </span>
                  <h5>Clients</h5>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
