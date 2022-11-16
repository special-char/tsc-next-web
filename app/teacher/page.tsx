import '@/styles/teacher.css';
import Image from 'next/image';

type Props = {};

const page = (props: Props) => {
  return (
    <div className="teacher">
      <div className="teacher__bg"></div>
      <div className="teacher__content">
        <div className="teacher__content__img">
          <Image
            src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg"
            alt="avatar"
            height={250}
            width={250}
          />
        </div>
        <div className="teacher__content__details">
          <div>
            <h2>Kathie Corl</h2>
            <p>Design</p>
          </div>
          <p>
            Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Diam
            phasellus vestibulum lorem sed risus ultricies.
          </p>
          <div>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
