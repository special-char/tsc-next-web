import EventCard from '@/ui/EventCard';
import PageHeader from '@/ui/pageHeader';
import Event from './event';

export default async function Page() {
  return (
    <>
      {/* <Event /> */}
      <PageHeader
        pageName="blog-page"
        className="customClass"
        circleRight="bg-primary"
        circleLeft="bg-secondary3"
      />
      <EventCard />
    </>
  );
}
