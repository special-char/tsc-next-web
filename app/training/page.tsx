import Banner from '../banner';
import Category from '../category';
import Courses from '../courses';
import Education from '../education';
import GrowCareer from '../growcareer';
import Leaders from '../leaders';
import Perks from '../perks';
import Teacherscard from '../teacherscard';
import Testimonial from '../testimonial';
import Blogs from '../blogs';
import Found from './found';
import Event from './event';
import Individualcourse from './courses/individualcourses';

type Props = {};

const rating = 4;

const Page = (props: Props) => {
  return (
    <>
      {/* <Banner />
      <Courses />
      <Perks />
      <Leaders />
      <GrowCareer />
      <Education />
      <Category />
      <Testimonial />
      <Blogs />
      <Teacherscard /> */}
      {/* <Event /> */}
      {/* <Found /> */}
      <Individualcourse />
    </>
  );
};

export default Page;
