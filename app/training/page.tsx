import Banner from './banner';
import Courses from './courses';
import OurOffice from './ourOffice';
import Perks from './perks';

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <OurOffice />
      <Banner />
      <Courses />
      <Perks />
    </>
  );
};

export default Page;
