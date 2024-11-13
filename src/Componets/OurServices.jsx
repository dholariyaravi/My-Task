import React from 'react';
import '../Style/Style.css';
import services1 from "../IMG/Services.jpeg"
import services2 from "../IMG/Illustration1 & Title.png"
import { FaCamera, FaMicrophone, FaStar, FaSnowflake, FaBolt, FaLeaf } from 'react-icons/fa'; // Example icons


const services = [
  {
    title: "Lorem ipsum dolor",
    description: "Pellentesque ac bibendum tortor, vel blandit nulla. Nulla eget lobortis lacus.",
    image: services1
  },
  {
    title: "Lorem ipsum dolor",
    description: "Pellentesque ac bibendum tortor, vel blandit nulla. Nulla eget lobortis lacus.",
    image: services1
  },
  {
    title: "Lorem ipsum dolor",
    description: "Pellentesque ac bibendum tortor, vel blandit nulla. Nulla eget lobortis lacus.",
    image: services1
  },
  {
    title: "Lorem ipsum dolor",
    description: "Pellentesque ac bibendum tortor, vel blandit nulla. Nulla eget lobortis lacus.",
    image: services1
  }
];

const values = [
  {
    icon: "💡",
    title: "Nulla lobortis nunc",
    description: "Interdum et malesuada fames ac ante ipsum primis in faucibus."
  },
  {
    icon: "🌱",
    title: "Vestibulum faucibus",
    description: "In id nisi id neque venenatis molestie quisque laoreet purus ut libero."
  },
  {
    icon: "🚀",
    title: "Suspendisse porttitor",
    description: "Donec quis sem quis velit tincidunt congue a sit amet ante."
  },
  {
    icon: "💧",
    title: "Ut sed eros",
    description: "In hac habitasse platea dictumst. In mi nulla, fringilla finibus et."
  }
];


const OurServices = () => {
  return (
    <div>
    <div id='Services' className='services_BG'>
    <div className="our-services-section container">
      <div className="row">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <h2 className='mb-5'><b>Our Services</b></h2>
          <a href="/all-services" className="see-all-link">See All →</a>
        </div>
      </div>

      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-lg-3 col-md-6 mb-4">
            <div className="service-card">
              <img src={service.image} alt={service.title} className="service-image" />
              <h5 className='text-start'>{service.title}</h5>
              <p className='text-start'>{service.description}</p>
              <button className="btn btn-outline-primary w-100">See Detail</button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>

    <section className="our-values-section container">
      <div className="row align-items-center">
        <div className="col-lg-5 values-center">
          <div className="img-box">
            <img src={services2} alt="Our Values" className="img-center" />
          </div>
        </div>
        <div className="col-lg-7">
          <div className="values-list">
            <h5>Nulla lobortis nunc vitae nisi semper velit</h5>
            <p className='my-5'>
              Vestibulum sit amet tortor libero lobortis semper at et odio. In eu tellus tellus.
              Pellentesque ullamcorper ultrices. Aenean facilisis vitae purus facilisis semper.
            </p>
            <div className="row">
              {values.map((value, index) => (
                <div key={index} className="col-md-6 mb-4">
                  <div className="">
                    <span className="value-icon">{value.icon}</span>
                    <h6>{value.title}</h6>
                    <p>{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default OurServices;
