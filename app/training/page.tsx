import Banner from './banner';
import Courses from './courses';
import Perks from './perks';

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <Banner />
      <Courses />
      <Perks />
    </>
  );
};

export default Page;
