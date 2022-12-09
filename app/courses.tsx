import '@/styles/courses.css';
import Carousal from '@/ui/Carousal';
import Image from 'next/image';
import Link from 'next/link';
import { use } from 'react';

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
  {
    id: 2,
    name: 'Graphic Design',
    description: 'Lorem ipsum dolor sit, ',
    url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template.jpg',
    trainer: {
      avatar: '',
      name: '',
    },
  },
  {
    id: 3,
    name: 'Graphic Design',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime dolores aperiam dolorem reprehenderit, architecto magni labore deserunt. Quae, eos ipsa!',
    url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template.jpg',
    trainer: {
      avatar: '',
      name: '',
    },
  },
  {
    id: 4,
    name: 'Graphic Design',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime dolores aperiam dolorem reprehenderit, architecto magni labore deserunt. Quae, eos ipsa!',
    url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template.jpg',
    trainer: {
      avatar: '',
      name: '',
    },
  },
  {
    id: 5,
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

async function getCoursesData() {
  try {
    const res = await fetch('http://65.20.70.84:1337/graphql', {
      method: 'POST',
      body: JSON.stringify({
        query: `{
          courses {
            data {
              id
              attributes {
                title
                description
                courseVideoPoster {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
              }
            }
          }
          }`,
      }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    return await res.json();
  } catch (error) {}
}

const Courses = (props: Props) => {
  const coursesData = use(getCoursesData());

  if (!coursesData) return null;

  const coursesInfo = coursesData?.data?.courses?.data;

  return (
    <section id="courses" className="courses">
      <h2 className="courses__title ">Browse our popular courses</h2>
      <Carousal>
        {coursesInfo.map((course) => {
          const { title, description, courseVideoPoster } = course.attributes;
          const { url, alternativeText } = courseVideoPoster.data.attributes;
          return (
            <Link key={course.id} href="/" className="card">
              <figure className="card__image">
                <Image src={url} alt={alternativeText} fill />
              </figure>
              <div className="card__body">
                <h3 className="card__title">{title}</h3>
                <p className="card__desc">{description}</p>
                <div className="card__actions">
                  <div className="avatar placeholder w-16 overflow-hidden rounded-full">
                    <img
                      src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg"
                      alt="Kathie Corl"
                    />
                  </div>
                  <h4>Yagnesh Modh</h4>
                </div>
              </div>
            </Link>
          );
        })}
      </Carousal>

      <Link href="/" className="btn btn--primary">
        Explore All Courses
      </Link>
    </section>
  );
};

export default Courses;
