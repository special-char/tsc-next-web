import React from 'react';
import '@/styles/growcareer.css';
const data = [
  {
    rating: 1,
    description: 'this is description1',
  },
  {
    rating: 2,
    description: 'this is description2',
  },
  {
    rating: 3,
    description: 'this is description3',
  },
];

const GrowCareer = () => {
  return (
    <section id="growcareer" className="growcareer">
      <div className="growcareer__details">
        <h2 className="growcareer__title">
          Grow your career today with the Educationic courses
        </h2>
        <p className="growcareer__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <button className="btn btn--secondary btn--small">
          explore courses
        </button>
      </div>
      <div className="growcareer__cards">
        {data.map((val) => (
          <div className="growcareer__card_details">
            <h1>{val.rating}</h1>
            <p>{val.description}</p>
          </div>
        ))}
        <div className="growcareer_bg"></div>
      </div>
    </section>
  );
};

export default GrowCareer;

// grid grid-cols-1 items-center gap-3 md:grid-cols-2
