import EventDetails from '../events/[slug]/page';
import Event from '../events/event';
import Found from './found';

type Props = {};

const rating = 4;

const Page = (props: Props) => {
  return (
    <>
      {/* <EventDetails /> */}
      <Event />
      {/* <Found /> */}
    </>
  );
};

export default Page;
