import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Testimonials1 from "../IMG/download1.png";

const testimonials = [
  {
    name: "Jane Doe",
    title: "Chief Digital Officer",
    photo: Testimonials1,
    rating: 5,
    text: "Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed. Vestibulum sit amet tortor sit amet libero."
  },
  {
    name: "John Smith",
    title: "Chief Marketing Officer",
    photo: Testimonials1,
    rating: 5,
    text: "Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed. Vestibulum sit amet tortor sit amet libero."
  },
  {
    name: "Emily Johnson",
    title: "Head of Operations",
    photo: Testimonials1,
    rating: 5,
    text: "Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed. Vestibulum sit amet tortor sit amet libero."
  },
  {
    name: "Emily Johnson",
    title: "Head of Operations",
    photo: Testimonials1,
    rating: 5,
    text: "Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed. Vestibulum sit amet tortor sit amet libero."
  }
];

const Testimonials = () => {
  return (
    <section id='Testimonials' className="testimonials-section">
      <div className='container'>
      <h2 className="text-start">Client Testimonials</h2>

      <div className="row justify-content-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="col- col-md-6 col-sm-6 pb-4 col-lg-3">
            <div className="testimonial-card p-3 text-center">
              <p className="testimonial-text py-2"><b>{testimonial.text}</b></p>

              <div className="rating">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="star px-2 fs-4">★</span>
                ))}
              </div>
            </div>
            <div className="client-info d-flex align-items-center justify-content-center mt-3">
                <img src={testimonial.photo} alt={testimonial.name} className="client-photo" />
                <div className="client-details text-left mx-4 ml-2">
                  <h6 className="client-name mb-0">{testimonial.name}</h6>
                  <p className="client-title mb-0"><b>{testimonial.title}</b></p>
                </div>
              </div>
          </div>
        ))}
      </div>
      <div className="dots-container text-center mt-3">
        {testimonials.map((_, index) => (
          <span key={index} className="dot"></span>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Testimonials;
