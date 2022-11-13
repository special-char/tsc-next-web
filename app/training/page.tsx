import Aboutheader from './aboutheader';
import Achievements from './achievements';
import Banner from './banner';
import Blogs from './blogs';
import Courses from './courses';
import Education from './education';
import Event from './event';
import Leaders from './leaders';
import Footer from './footer';
import GrowCareer from './growcareer';
import Perks from './perks';
import SocialMedia from './socialMedia';
import Faq from './faq';
import Contactform from './contactform';
import Category from './category';

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <Faq />
      <GrowCareer />
      <Banner />
      <Event />
      <Education />
      <Aboutheader />
      <Achievements />
    </>
  );
};

export default Page;
