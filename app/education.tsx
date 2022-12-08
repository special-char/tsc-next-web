import '@/styles/education.css';
import { use } from 'react';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

type Props = {};

async function getEducation() {
  try {
    const res = await fetch('http://65.20.70.84:1337/graphql', {
      method: 'POST',
      body: JSON.stringify({
        query: `{
          aboutTsc {
            data {
              id
              attributes {
                title
                description
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                details {
                  id
                  title
                  description
                  image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
                button {
                  text
                  url
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

const Education = (props: Props) => {
  const educationData = use(getEducation());

  if (!educationData) return null;

  const educationInfo = educationData?.data?.aboutTsc?.data?.attributes;

  return (
    <section className="education ">
      <div className=" education__header col-span-2">
        <h2>{educationInfo.title}</h2>
        <p>{educationInfo.description}</p>
      </div>
      <div className="education__body col-span-2">
        <div className="education__image">
          <Image src={educationInfo.image.data.attributes.url} alt="" fill />
        </div>
        <div className="education__content ">
          {educationInfo.details.map((x) => (
            <>
              <figure className="relative aspect-square w-16 overflow-hidden rounded-full">
                <Image src={x.image.data.attributes.url} alt="" fill />
              </figure>
              <div className="">
                <h3>{x.title}</h3>
                <p>{x.description}</p>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="education__header col-span-2">
        <Link href="/" className="btn btn--secondary">
          About Education
        </Link>
      </div>
      <span className="education__line"></span>
    </section>
  );
};

export default Education;
