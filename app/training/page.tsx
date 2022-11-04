import Banner from './banner';
import Courses from './courses';
import Footer from './footer';
import GrowCareer from './growcareer';
import Perks from './perks';

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      {/* <Banner />
      <Courses />
      <Perks /> */}
      <GrowCareer />
      <Footer />
    </>
  );
};

export default Page;
