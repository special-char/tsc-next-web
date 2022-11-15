import Education from './education';
import Banner from './banner';
import Blogs from './blogs';
import Courses from './courses';
import Event from './event';
import Leaders from './leaders';
import Footer from './footer';
import GrowCareer from './growcareer';
import Perks from './perks';
import Contactform from './contactform';
import Category from './category';
import Aboutheader from './aboutheader';
import Achievements from './achievements';

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <Banner />
      <Courses />
      <Perks />
      <Leaders />
      <GrowCareer />
      <Category />
      <Blogs />
      <Event />
      <Education />
      <Aboutheader />
      <Achievements />
    </>
  );
};

export default Page;
