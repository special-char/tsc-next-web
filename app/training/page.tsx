import PageHeader from '@/ui/pageHeader';
import Banner from './banner';
import Category from './category';
import Courses from './courses';
import Education from './education';
import Event from './event';
import Features from './features';
import Found from './found';
import GrowCareer from './growcareer';
import Leaders from './leaders';
import Perks from './perks';
import Teacherscard from './teacherscard';
import OurWorks from './teacher/ourWorks';
import Testimonial from './testimonial';
import Blogs from './blogs';
import BlogSubscribe from './blogSubscribe';
import IndividualTeacher from './individualteacher';

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
      <Testimonial />
      <Blogs />
      <Teacherscard />
    </>
  );
};

export default Page;
