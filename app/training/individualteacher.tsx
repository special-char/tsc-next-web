import '@/styles/individualteacher.css';
import Image from 'next/image';
import Icon from '@/ui/Icon';
import Link from 'next/link';
type Props = {};

const data = [
  {
    icon: 'linkedin',
    link: 'https://www.linkedin.com',
  },
  {
    icon: 'twitter',
    link: 'https://www.twitter.com',
  },
  {
    icon: 'instagram',
    link: 'https://www.instagram.com',
  },
];

const IndividualTeacher = (props: Props) => {
  return (
    <section id="individualteacher" className="individualteacher">
      <div className="individualteacher__content">
        <div className="individualteacher__content__card">
          <div className="avatar placeholder w-48 items-center overflow-hidden md:w-56">
            <div>
              <img
                src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg"
                alt="Kathie Corl"
              />
            </div>
          </div>
          <div className="individualteacher__card">
            <div className="individualteacher__content__card__body">
              <div className="chip chip--white !text-neutral-100 !bg-primary !py-3 !px-6">
                Design
              </div>
              <h2 className="individualteacher__content__card__title ">
                Kathie Corl
              </h2>
            </div>
            <p className="individualteacher__content__card__desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
              voluptas ipsam deserunt illo nihil eos.
            </p>
            <div className="individualteacher__content__card__icons ">
              {data.map((icon) => (
                <span className="rounded-full bg-neutral-500 p-2 hover:bg-primary">
                  <Link key={icon.icon} href={icon.link} target="_blank">
                    <Icon name={icon.icon} height={20} width={20} />
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndividualTeacher;
