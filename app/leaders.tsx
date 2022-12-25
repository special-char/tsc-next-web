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
        <div className="leader__actions">
          {[1].map((val) => (
            <div className="btn btn--primary font-cursive">
              BECOME A TEACHER
            </div>
          ))}
        </div>
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
          <h5 className="font-cursive text-neutral-700">Sophie Moore</h5>
          <h6 className="mb-0 font-cursive text-neutral-600">pruthvish modi</h6>
        </div>
      </div>
    </section>
  );
};

const Leaders = async () => {
  const leaderData = await getLeaderData();

  if (!leaderData) return null;

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
            alt={`${alternativeText}`}
            fill
            sizes="(max-width: 640px) 100vw,(max-width: 1024px) 518px,(max-width: 1280px) 45vw,576px"
          />
        </div>
        <div className="leader__content">
          <span className="leader__ContentData">{tag}</span>
          <h3 className="py-4 text-neutral-700">{`“${quote}”`}</h3>
          <h5 className="text-neutral-700">{name}</h5>
          <h6 className="mb-0 text-neutral-600">{`${designation} at ${company}`}</h6>
        </div>
      </div>
    </section>
  );
};

export default Leaders;
