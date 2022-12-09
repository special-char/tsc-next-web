import { getGrowCareerData } from '@/lib/getGrowCareer';
import '@/styles/growcareer.css';
import Link from 'next/link';
import { ComponentCommonLink, HomeGrowCareer } from 'types/types';

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
