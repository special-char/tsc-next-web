import '@/styles/courses.css';
import Link from 'next/link';

type Props = {};

const courses = [
  {
    id: 1,
    name: 'Graphic Design',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime dolores aperiam dolorem reprehenderit, architecto magni labore deserunt. Quae, eos ipsa!',
    url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template.jpg',
    trainer: {
      avatar: '',
      name: '',
    },
  },
];

const CoursesCard = (props: Props) => {
  return (
    <section id="coursescard" className="coursescard">
      {courses.map((course) => (
        <Link key={course.id} href="/" className="card">
          <figure className="card__image">
            <img src={course.url} alt={course.name} />
          </figure>
          <div className="card__body">
            <h3 className="card__title">{course.name}</h3>
            <p className="card__desc">{course.description}</p>
            <div className="card__actions">
              <div className="avatar placeholder w-16">
                <div>
                  <img
                    src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg"
                    alt="Kathie Corl"
                  />
                </div>
                <h3>Dhara</h3>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default CoursesCard;
