import Banner from './banner';
import Courses from './courses';
import Perks from './perks';
import Category from './category';

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      {/* <Banner />
      <Courses /> */}
      <Perks />
      <Category />
    </>
  );
};

export default Page;
