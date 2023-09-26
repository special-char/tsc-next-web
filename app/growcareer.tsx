import { getGrowCareerData } from '@/lib/getGrowCareer';
import '@/styles/growcareer.css';
import Button from '@/ui/Button';
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
        <div className="btn btn--secondary font-cursive">EXPLORE COURSES</div>
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

  if (!growCareerData) {
    throw new Error(
      'something went wrong! try refreshing the page or please come back later.',
    );
  }

  const { title, description, link, details } = growCareerData.data
    .homeGrowCareer.data?.attributes as HomeGrowCareer;

  const { url, text } = link as ComponentCommonLink;

  return (
    <section id="growcareer" className="growcareer">
      <div className="growcareer__details">
        <h2 className="growcareer__title">{title}</h2>
        <p className="growcareer__description">{description}</p>
        <Button as={Link} prefetch={false} href={`${url}`} variant="secondary">
          {text}
        </Button>
      </div>
      <div className="growcareer__cards">
        {details?.map((val) => (
          <div key={val?.id} className="growcareer__card_details">
            <h3>{val?.title}</h3>
            <p>{val?.description}</p>
          </div>
        ))}
        <div className="growcareer_bg"></div>
      </div>
    </section>
  );
};

export default GrowCareer;
