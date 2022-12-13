import { getGrowCareerData } from '@/lib/getGrowCareer';
import '@/styles/growcareer.css';
import Link from 'next/link';
import { ComponentCommonLink, HomeGrowCareer } from 'types/types';

export const GrowCareerSkeleton = () => {
  return (
    <section id="growcareer" className="growcareer animate-pulse">
      <div className="growcareer__details">
        <h2 className="growcareer__title font-cursive">
          Grow your career today with the Educationic courses
        </h2>
        <p className="growcareer__description font-cursive">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <div className="btn btn--secondary btn--small">EXPLORE COURSES</div>
      </div>
      <div className="growcareer__cards">
        {[1, 2, 3]?.map((val) => (
          <div key={val} className="growcareer__card_details">
            <h1 className="font-cursive">9/10</h1>
            <p className="font-cursive">Overall courses satisfaction score</p>
          </div>
        ))}
        <div className="growcareer_bg"></div>
      </div>
    </section>
  );
};

const GrowCareer = async () => {
  const growCareerData = await getGrowCareerData();

  if (!growCareerData) return null;

  const { title, description, link, details } = growCareerData.data.data
    .homeGrowCareer.data?.attributes as HomeGrowCareer;

  const { url, text } = link as ComponentCommonLink;

  return (
    <section id="growcareer" className="growcareer">
      <div className="growcareer__details">
        <h2 className="growcareer__title">{title}</h2>
        <p className="growcareer__description">{description}</p>
        <Link href={`${url}`} className="btn btn--secondary btn--small">
          {text}
        </Link>
      </div>
      <div className="growcareer__cards">
        {details?.map((val) => (
          <div key={val?.id} className="growcareer__card_details">
            <h1>{val?.title}</h1>
            <p>{val?.description}</p>
          </div>
        ))}
        <div className="growcareer_bg"></div>
      </div>
    </section>
  );
};

export default GrowCareer;

// grid grid-cols-1 items-center gap-3 md:grid-cols-2
