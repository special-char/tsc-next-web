import Banner from './banner';
import Blogs from './blogs';
import Courses from './courses';
import Perks from './perks';
import Ratecard from './ratecard';

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <Banner />
      <Courses />
      <Blogs />
      <Ratecard />
    </>
  );
};

export default Page;
