import { getCoursesData } from '@/lib/getCourses';
import '@/styles/courses.css';
import Button from '@/ui/Button';
import Carousal from '@/ui/Carousal';
import Image from 'next/image';
import Link from 'next/link';
import { Course, HomeCourse, UploadFile } from 'types/types';

export const CoursesSkeleton = () => {
  return (
    <section id="courses" className="courses animate-pulse">
      <h2 className="courses__title font-cursive">
        Browse our popular courses
      </h2>
      <Carousal>
        {[1, 2, 3].map((course) => {
          return (
            <Link key={course} href="/" className="card">
              <figure className="card__image">
                <div></div>
              </figure>
              <div className="card__body">
                <h3 className="card__title font-cursive">Graduate</h3>
                <p className="card__desc font-cursive">
                  Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                  elit. Felis donec massa aliqua.
                </p>
                <div className="card__actions">
                  <div className="avatar placeholder w-16 overflow-hidden rounded-full bg-neutral-300">
                    <div className="h-full w-full"></div>
                  </div>
                  <h4 className="font-cursive">Yagnesh Modh</h4>
                </div>
              </div>
            </Link>
          );
        })}
      </Carousal>

      <div className="btn btn--primary font-cursive">Explore All Courses</div>
    </section>
  );
};

const Courses = async () => {
  const coursesData = await getCoursesData();

  if (!coursesData) return null;

  const coursesInfo = coursesData.data.data.courses.data;
  const { title, button } = coursesData.data.data.homeCourse.data
    ?.attributes as HomeCourse;
  return (
    <section id="courses" className="courses">
      <h2 className="courses__title ">{title}</h2>
      <Carousal>
        {coursesInfo?.map((course) => {
          const { title, description, courseVideoPoster } =
            course.attributes as Course;
          const { url, alternativeText } = courseVideoPoster?.data
            ?.attributes as UploadFile;
          return (
            <Link key={course.id} href="/" className="card">
              <figure className="card__image">
                <Image src={url} alt={`${alternativeText}`} fill />
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

      <Button as={Link} href={`${button?.url}`} variant="primary">
        {button?.text}
      </Button>
    </section>
  );
};

export default Courses;
