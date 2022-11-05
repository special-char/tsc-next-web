import Aboutheader from './aboutheader';
import Achievements from './achievements';
import Banner from './banner';
import Blogs from './blogs';
import Courses from './courses';
import Education from './education';
import Footer from './footer';
import Perks from './perks';

type Props = {};

const Page = (props: Props) => {
  return (
    <>
       <Banner />
      <Courses />
      {/* { *<Perks /> * /}

      <Footer /> */} */}
      <Education />
      <Aboutheader />
      <Achievements />
      {/* <Blogs /> */}
    </>
  );
};

export default Page;

