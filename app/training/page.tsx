import Banner from './banner';
import Blogs from './blogs';
import Courses from './courses';
import Leaders from './leaders';
import GrowCareer from './growcareer';
import Perks from './perks';
import Category from './category';

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <Banner />
      <Courses />
      <Perks />
      <Leaders />
      <GrowCareer />
      <Category />
      <Blogs />
    </>
  );
};

export default Page;
