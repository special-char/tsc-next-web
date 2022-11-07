import Courses from './courses';
import OurOffice from './ourOffice';
import Perks from './perks';

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <OurOffice />
      <Courses />
      <Perks />
    </>
  );
};

export default Page;
