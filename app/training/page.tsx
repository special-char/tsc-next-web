import Banner from './banner';
import Category from './category';
import Courses from './courses';
import Education from './education';
import Event from './event';
import Features from './features';
import Found from './found';
import GrowCareer from './growcareer';
import Leaders from './leaders';
import Perks from './perks';

type Props = {};

const rating = 4;

const Page = (props: Props) => {
  return (
    <>
      {/* <Banner />

      <Courses />
      <Perks />
      <Leaders />
      <GrowCareer />
      <Education />
      <Category /> */}
      {/* <Blogs /> */}
      <Found />
    </>
  );
};

export default Page;
