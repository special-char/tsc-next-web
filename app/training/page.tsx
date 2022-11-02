import Banner from './banner';
import Courses from './courses';
import GrowCareer from './growcareer';
import Perks from './perks';

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <Banner />
      <Courses />
      <Perks />
      <GrowCareer />
    </>
  );
};

export default Page;
