import Banner from './banner';
import Courses from './courses';
import Category from './category';
import OurOffice from './ourOffice';

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <OurOffice />
      <Banner />
      <Courses />
    </>
  );
};

export default Page;
