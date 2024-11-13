import React from 'react';
import '../Style/Style.css';
import IMG1 from '../IMG/1851effc21b69474c650230d559fac2f.png';
import BG_IMG from "../IMG/Mask (1).png";

function MainContent() {
  return (
    <div className='container'>
      <section className="main-content">
        <div className="text-content">
          <h1 className="main-heading">Aenean Facilisis Vitae</h1>
          <p className="main-paragraph mt-3">
            Lorem ipsum dolor sit amet consectetur adipiscing Integer id orci sed ante tincidunt
          </p>
          <button className="write-button btn btn-outline-primary mt-3">WRITE TO US</button>
        </div>

        <div className="image-content">
          <img src={IMG1} alt="Illustration" className="main-image" />
        </div>
      </section>

      <section>
        <div className="feature-row">
          <div className="feature-col">
            <div className="feature-card">
              <h3 className='text-primary'>Business Solution</h3>
              <p>Interdum et malesuada fames ac ante...</p>
            </div>
          </div>

          <div className="feature-col">
            <div className="feature-card">
              <h3>Free project quote</h3>
              <p>Interdum et malesuada fames ac ante...</p>
            </div>
          </div>

          <div className="feature-col">
            <div className="feature-card">
              <h3>Nulla lobortis nunc</h3>
              <p>Interdum et malesuada fames ac ante...</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainContent;
