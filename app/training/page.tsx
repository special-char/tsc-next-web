import Banner from './banner';
import Blogcard from './blogCard';
import Category from './category';
import Courses from './courses';
import Education from './education';
import GrowCareer from './growcareer';
import Leaders from './leaders';
import Perks from './perks';
import Blogs from './blogs';

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
      <Category /> */}
      <Blogs />
      {/* <Blogcard /> */}
    </>
  );
};

export default Page;
