import Courses from './courses';
import OurOffice from './ourOffice';
import Perks from './perks';
import Category from './category';

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      {/* <Courses /> */}
      <Perks />
      <Category />
      <OurOffice />
    </>
  );
};

export default Page;
