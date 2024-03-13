import Image from 'next/image';
import Link from 'next/link';
import Button from '@/ui/Button';
import '@/styles/leaderSection.css';
import { getLeaderData } from '@/lib/getLeader';
import { HomeLeader, Testimonial, UploadFile } from 'types/types';

export const LeadersSkeleton = () => {
  return (
    <section id="Leaders" className="leader animate-pulse">
      <div className="leader__details">
        <h2 className="leader__title text-center font-cursive lg:text-left">
          Courses taught by industry leaders around the world
        </h2>
        <p className="leader__description font-cursive">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <div className="leader__image_content">
        <div className="leader__image">
          <div></div>
        </div>
        <div className="leader__content">
          <span className="leader__ContentData font-cursive">
            Featured Teacher
          </span>
          <h3 className="py-4 font-cursive text-neutral-700">
            “Teaching on Educationic platform has been an amazing experience”
          </h3>
          <h4 className="font-cursive text-lg text-neutral-700 sm:text-xl">
            Sophie Moore
          </h4>
          <h5 className="mb-0 font-cursive text-base text-neutral-600 sm:text-lg">
            pruthvish modi
          </h5>
        </div>
      </div>
    </section>
  );
};

const Leaders = async () => {
  const leaderData = await getLeaderData();

  if (!leaderData) {
    throw new Error(
      'something went wrong! try refreshing the page or please come back later.',
    );
  }

  const { title, description, btns, image, testimonial } = leaderData.data
    .homeLeader.data?.attributes as HomeLeader;

  const { url, alternativeText } = image?.data?.attributes as UploadFile;

  const { tag, quote, name, designation, company } = testimonial?.data
    ?.attributes as Testimonial;

  return (
    <section id="Leaders" className="leader">
      <div className="leader__details">
        <h2 className="leader__title text-center lg:text-left">{title}</h2>
        <p className="leader__description">{description}</p>
        <div className="leader__actions">
          {btns?.map((val) => (
            <Button
              as={Link}
              href={`${val?.url}`}
              key={val?.id}
              variant="primary"
            >
              {val?.text}
            </Button>
          ))}
        </div>
      </div>
      <div className="leader__image_content">
        <div className="leader__image">
          <Image
            src={`${url}?tr=ar-2-2.5`}
            alt={`${alternativeText || 'leader image'}`}
            title={`${alternativeText || 'leader image'}`}
            fill
            sizes="(max-width: 640px) 100vw,(max-width: 1024px) 518px,(max-width: 1280px) 45vw,576px"
          />
        </div>
        <div className="leader__content">
          <span className="leader__ContentData">{tag}</span>
          <p className="my-4 text-xl font-bold text-neutral-700 sm:text-xxl md:text-2xl">{`“${quote}”`}</p>
          <h3 className="mb-2 text-base font-semibold text-neutral-800 sm:text-lg">
            {name}
          </h3>
          <h4 className="mb-2 text-xs font-semibold text-neutral-800 sm:text-base">{`${designation} at ${company}`}</h4>
        </div>
      </div>
    </section>
  );
};

export default Leaders;
