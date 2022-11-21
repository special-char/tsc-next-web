import PageHeader from '@/ui/pageHeader';
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
      <PageHeader
        title="Blogs"
        desc="hello from desc"
        className="customClass"
        circleRight="bg-primary"
        circleLeft="bg-secondary3"
      />

      <OurWorks />
      <Testimonial />
      <Banner />
      <Courses />
      <Perks />
      <Leaders />
      <GrowCareer />
      <Education />
      <Category />
    </>
  );
};

export default Page;
