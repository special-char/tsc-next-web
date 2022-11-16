import '@/styles/teachercard.css';
import Image from 'next/image';
import EmailSvg from '@/public/icons/email.svg';

type Props = {};

const data = [
  {
    svg: <EmailSvg />,
  },
  {
    svg: <EmailSvg />,
  },
  {
    svg: <EmailSvg />,
  },
];

const teacherCard = (props: Props) => {
  return (
    <section id="teacherCard" className="teacherCard">
      <div className="teacherCard__content">
        <div className="teacherCard__content__card">
          <div className="avatar placeholder w-48 items-center overflow-hidden md:w-56">
            <div>
              <img
                src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg"
                alt="Kathie Corl"
              />
            </div>
          </div>
          <div className="teacherCard__card">
            <div className="teacherCard__content__card__body">
              <span className="chip chip--white mx-auto w-1/3 md:mx-0 md:w-24">
                Design
              </span>
              <h2 className="teacherCard__content__card__title ">
                Kathie Corl
              </h2>
            </div>
            <p className="teacherCard__content__card__desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
              voluptas ipsam deserunt illo nihil eos.
            </p>
            <div className="teacherCard__content__card__icons ">
              {data.map((val) => (
                <figure className="w-10 overflow-hidden rounded-full md:w-12">
                  {val.svg}
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default teacherCard;
