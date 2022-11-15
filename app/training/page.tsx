import Aboutheader from './aboutheader';
import Achievements from './achievements';
import Banner from './banner';
import Blogs from './blogs';
import Category from './category';
import Contact from './contact/contact';
import Courses from './courses';
import Education from './education';
import Event from './event';
import Features from './features';
import GrowCareer from './growcareer';
import Leaders from './leaders';
import Perks from './perks';
import SocialMedia from './socialMedia';

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <Banner />
      <Courses />
      <Perks />
      <Leaders />
      <GrowCareer />
      <Education />
      <Category />
      <Blogs />
    </>
  );
};

export default Page;
