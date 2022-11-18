import Banner from './banner';
import Category from './category';
import Courses from './courses';
import Education from './education';
import GrowCareer from './growcareer';
import Leaders from './leaders';
import Perks from './perks';
import Blogs from './blogs';
import CoursesCard from './coursescard';

type Props = {};

const rating = 4;

const Page = (props: Props) => {
  return (
    <>
      <Banner />
      <Courses />
      <Perks />
      <Leaders />
      <GrowCareer />
      <Education />
      <Category />
      {/* <Blogs /> */}
      <CoursesCard />
    </>
  );
};

export default Page;
