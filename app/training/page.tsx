import Banner from './banner';
import Companyhistory from './companyhistory';
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
      <Companyhistory />
      <Leaders />
    </>
  );
};

export default Page;
