import '@/styles/card.css';
import Image, { ImageProps } from 'next/image';

export default function Card() {
  return (
    <div className="card">
      <div className="card__image">
        <Image
          src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template.jpg"
          alt="image"
          fill
        />
        <div className="card__image__chips card__image__chips--left">
          <div className="chip chip--primary">$ 99.00 USD</div>
          {/* <div className="chip chip--white">7hr 24m</div> */}
        </div>
      </div>
      <div className="card__body">
        <p className="card__body__date">September 1, 2022</p>
        <p className="card__body__date-full">September 1, 2022</p>
        <p className="card__body__time">September 1, 2022</p>

        <h3 className="card__body__title">Lorem ipsum dolor sit.</h3>
        <p className="card__body__desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
          repellat?
        </p>
        <div className="card__body__actions"></div>
      </div>
    </div>
  );
}
