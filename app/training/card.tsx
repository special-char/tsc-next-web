import '@/styles/card.css';
import Link from 'next/link';
import Image from 'next/link';

type Props = {};
const avatarData = [
  {
    name: 'Kathie Crol',
    url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg',
  },
];

const Card = (props: Props) => {
  return (
    <section id="coursescard" className="">
      <Link href="#" className="card">
        <figure className="card__image ">
          <img
            src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-1080.jpeg"
            alt="image"
          />
          <div className="card__chipset">
            <span className="card__chipset__chip card__chipset__chip--secondary">
              7hr56m
            </span>
            <span className=" card__chipset__chip card__chipset__chip--primary">
              $199.00 USD
            </span>
          </div>
        </figure>

        <div className="card__body">
          <h2 className="card__title">Lorem, ipsum dolor.</h2>
          <p className="card__desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus eius nesciunt cupiditate iure obcaecati a dicta non
            temporibus quis deserunt.
          </p>
          <div className="card__actions">
            {avatarData.map((avatarData) => (
              <>
                <div className="card__avatar placeholder w-16">
                  <img src={avatarData.url} alt={avatarData.name} />
                </div>
                <h3>{avatarData.name}</h3>
              </>
            ))}
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Card;
