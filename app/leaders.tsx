import Image from 'next/image';
import React, { use } from 'react';
import Link from 'next/link';
import '@/styles/leaderSection.css';

async function getLeaderData() {
  try {
    const res = await fetch('http://65.20.70.84:1337/graphql', {
      method: 'POST',
      body: JSON.stringify({
        query: `{
          homeLeader {
            data {
              attributes {
                title
                description
                btns {
                  id
                  text
                  url
                }
                image {
                  data {
                    attributes {
                      alternativeText
                      url
                    }
                  }
                }
                testimonial {
                  data {
                    attributes {
                      quote
                      name
                      company
                      designation
                      tag
                    }
                  }
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
  } catch (error) {}
}

const Leaders = () => {
  const leaderData = use(getLeaderData());

  if (!leaderData) return null;

  const leaderInfo = leaderData?.data?.homeLeader?.data?.attributes;

  const image = leaderInfo.image.data.attributes;

  const testimonial = leaderInfo.testimonial.data.attributes;

  return (
    <section id="Leaders" className="leader">
      <div className="leader__details">
        <h2 className="leader__title text-center lg:text-left">
          {leaderInfo.title}
        </h2>
        <p className="leader__description">{leaderInfo.description}</p>
        <div className="leader__actions">
          {leaderInfo.btns.map((x) => (
            <Link href={x.url} key={x.id} className="btn btn--primary text-xs">
              {x.text}
            </Link>
          ))}
        </div>
      </div>
      <div className="leader__image_content">
        <div className="leader__image">
          <Image src={image.url} alt={image.alternativeText} fill />
        </div>
        <div className="leader__content">
          <span className="leader__ContentData">{testimonial.tag}</span>
          <h3 className="py-4 text-neutral-700">{`“${testimonial.quote}”`}</h3>
          <h5 className="text-neutral-700">{testimonial.name}</h5>
          <h6 className="mb-0 text-neutral-600">{`${testimonial.designation} at ${testimonial.company}`}</h6>
        </div>
      </div>
    </section>
  );
};

export default Leaders;
