import React, { use } from 'react';
import '@/styles/growcareer.css';
import Link from 'next/link';

async function getGrowCareerData() {
  try {
    const res = await fetch('http://65.20.70.84:1337/graphql', {
      method: 'POST',
      body: JSON.stringify({
        query: `{
          homeGrowCareer {
            data {
              attributes {
                title
                description
                link {
                  text
                  url
                }
                details {
                  id
                  title
                   description
                }
              }
            }
          }
        }`,
      }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    return await res.json();
  } catch (error) { }
}

const GrowCareer = () => {
  const growCareerData = use(getGrowCareerData());

  if (!growCareerData) return null;

  const growCareerInfo = growCareerData?.data?.homeGrowCareer?.data?.attributes;

  return (
    <section id="growcareer" className="growcareer">
      <div className="growcareer__details">
        <h2 className="growcareer__title">{growCareerInfo.title}</h2>
        <p className="growcareer__description">{growCareerInfo.description}</p>
        <Link
          href={growCareerInfo.link.url}
          className="btn btn--secondary btn--small"
        >
          {growCareerInfo.link.text}
        </Link>
      </div>
      <div className="growcareer__cards">
        {growCareerInfo.details.map((val: any) => (
          <div key={val.id} className="growcareer__card_details">
            <h1>{val.title}</h1>
            <p>{val.description}</p>
          </div>
        ))}
        <div className="growcareer_bg"></div>
      </div>
    </section>
  );
};

export default GrowCareer;

// grid grid-cols-1 items-center gap-3 md:grid-cols-2
