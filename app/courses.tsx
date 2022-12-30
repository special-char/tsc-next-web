import { getCoursesData } from '@/lib/getCourses';
import '@/styles/courses.css';
import Button from '@/ui/Button';
import Carousal from '@/ui/Carousal';
import CarousalBullets from '@/ui/CarousalBullets';
import CourseCard, { CourseCardSkeleton } from '@/ui/CourseCard';
import Image from 'next/image';
import Link from 'next/link';
import { HomeCourse } from 'types/types';

export const CoursesSkeleton = () => {
  return (
    <section id="courses" className="courses animate-pulse">
      <h2 className="courses__title font-cursive">
        Browse our popular courses
      </h2>
      <Carousal>
        {[1, 2, 3]?.map((course) => {
          return <CourseCardSkeleton />;
        })}
      </Carousal>
      <div className="btn btn--primary font-cursive">Explore All Courses</div>
    </section>
  );
};

const Courses = async () => {
  const coursesData = await getCoursesData();

  if (!coursesData) return null;

  const coursesInfo = coursesData.data.courses.data;
  const { title, button } = coursesData.data.homeCourse.data
    ?.attributes as HomeCourse;
  return (
    <section id="courses" className="courses">
      <h2 className="courses__title ">{title}</h2>
      <Carousal>
        {coursesInfo?.map((course) => {
          return <CourseCard course={course} key={course.id} />;
        })}
      </Carousal>
      {/* <CarousalBullets /> */}
      <Button
        as={Link}
        prefetch={false}
        href={`${button?.url}`}
        variant="primary"
      >
        {button?.text}
      </Button>
    </section>
  );
};

export default Courses;
