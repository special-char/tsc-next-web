import Image from 'next/image';
import Link from 'next/link';
import '@/styles/leaderSection.css';
import { getLeaderData } from '@/lib/getLeader';
import { HomeLeader, Testimonial, UploadFile } from 'types/types';

const Leaders = async () => {
  const leaderData = await getLeaderData();

  if (!leaderData) return null;

  const { title, description, btns, image, testimonial } = leaderData.data.data
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
            <Link
              href={`${val?.url}`}
              key={val?.id}
              className="btn btn--primary text-xs"
            >
              {val?.text}
            </Link>
          ))}
        </div>
      </div>
      <div className="leader__image_content">
        <div className="leader__image">
          <Image src={url} alt={`${alternativeText}`} fill />
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
