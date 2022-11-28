import PageHeader from '@/ui/pageHeader';
import Contact from './contact';
import Faq from './faq';

const Page = () => {
  return (
    <div>
      <PageHeader
        title="Blogs"
        desc="hello from desc"
        className="customClass"
        circleRight="bg-primary"
        circleLeft="bg-secondary3"
      />
      <Contact />
      <Faq />
    </div>
  );
};

export default Page;
