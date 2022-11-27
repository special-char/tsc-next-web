import Banner from './banner';
import Category from './category';
import Courses from './courses';
import Education from './education';
import GrowCareer from './growcareer';
import Leaders from './leaders';
import Perks from './perks';
import Blogs from './blogs';
import BlogSubscribe from './blogSubscribe';

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
      <Blogs />
      {/* <BlogSubscribe /> */}
    </>
  );
};

export default Page;
