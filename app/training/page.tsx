import Banner from './banner';
import Blogs from './blogs';
import Courses from './courses';
import Leaders from './leaders';
import GrowCareer from './growcareer';
import Perks from './perks';
import Category from './category';
import Card from './card';

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
      <Card />
    </>
  );
};

export default Page;
