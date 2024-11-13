import React from 'react';
import '../Style/Style.css';
import Case_Studies from '../IMG/Case_Studies.jpeg';

const CaseStudies = () => {
  return (
    <div id='CaseStudies' className="container">
      <div className="row">
        <div className="col-md-3 sidebar">
          <h3>Case Studies</h3>
          <ul className="categories">
            <li className="category active">Corporate</li>
            <li className="category">Advertising</li>
            <li className="category">Marketing</li>
            <li className="category">Government</li>
            <li className="category">Creative</li>
          </ul>
        </div>

        <div className="col-md-9">
          <div className="row">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <div key={index} className={`col-md-6 ${index === 0 ? 'col-lg-8' : 'col-lg-4'} mb-4`}>
                <div className="card">
                  <img
                    src={Case_Studies}
                    alt="Case study"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Lorem Ipsum dolor</h5>
                    <p className="card-text">Vestibulum consequat hendrerit</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section>
        <div className="Case_content my-5">
          <div className="content">
            <h2>Ready to get started?</h2>
            <p>Pellentesque ac bibendum tortor. Nulla eget lobortis lacus.</p>
          </div>
          <button className="content_button">
            WRITE TO US <span>&#10132;</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
