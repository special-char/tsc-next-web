import Aboutheader from './aboutheader';
import Achievements from './achievements';
import Banner from './banner';
import Companyhistory from './companyhistory';
import Blogs from './blogs';
import Courses from './courses';
import Education from './education';
import Event from './event';
import Leaders from './leaders';
import Footer from './footer';
import GrowCareer from './growcareer';
import Perks from './perks';
import Contactform from './contactform';
import Category from './category';
import OurOffice from './ourOffice';

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <Event />
      <GrowCareer />
      <Footer />
      <Banner />
      <Courses />
      <Perks />
      <Leaders />
      <Companyhistory />
      <GrowCareer />
      <Footer />
      <Blogs />
      <Category />
      <OurOffice />
    </>
  );
};

export default Page;
