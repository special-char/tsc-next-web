import Banner from './banner';
import Category from './category';
import Courses from './courses';
import Education from './education';
import GrowCareer from './growcareer';
import Leaders from './leaders';
import Perks from './perks';
import OurWorks from './teacher/ourWorks';
import Testimonial from './testimonial';

type Props = {};

const rating = 4;

const Page = (props: Props) => {
  return (
    <>
      <OurWorks />
      <Testimonial />
      <Banner />
      <Courses />
      <Perks />
      <Leaders />
      <GrowCareer />
      <Education />
      <Category />

      {/* <Blogs />  */}
    </>
  );
};

export default Page;
