import Banner from './banner';
import Category from './category';
import Courses from './courses';
import Education from './education';
import GrowCareer from './growcareer';
import Leaders from './leaders';
import Perks from './perks';
import Testimonial from './testimonial';

type Props = {};

const rating = 4;

const Page = (props: Props) => {
  return (
    <>
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
