import Banner from './banner';
import Companyhistory from './companyhistory';
import Blogs from './blogs';
import Courses from './courses';
import Leaders from './leaders';
import Perks from './perks';

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      {/* <Banner /> */}
      {/* <Courses /> */}
      {/* <Perks /> */}
      <Leaders />
      <Companyhistory />
      <Banner />
      <Courses />
      <Blogs />
    </>
  );
};

export default Page;
