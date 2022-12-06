import '@/styles/perks.css';
import { use } from 'react';
import PerksSvg from '@/public/icons/perks.svg';
import Perks1Svg from '@/public/icons/perks1.svg';
import Perks2Svg from '@/public/icons/perks2.svg';
import PinkSeparatorArrow from '@/ui/PinkSeparatorArrow';
import Image from 'next/image';

type Props = {};

async function getPerks() {
  try {
    const res = await fetch('http://65.20.70.84:1337/graphql', {
      method: 'POST',
      body: JSON.stringify({
        query: `{
          perk {
            data {
              attributes {
                title
                 benifits {
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

const Perks = (props: Props) => {
  const perksData = use(getPerks());

  if (!perksData) return null;

  const perksInfo = perksData?.data?.perk?.data?.attributes;

  return (
    <section id="perks" className="perks">
      <h2 className="perks__title">{perksInfo.title}</h2>
      <div className="perks__content">
        {perksInfo.benifits.map((perk) => {
          return (
            <div className="perks__item">
              <div className="perks__item__image">
                <Image src={perk.image.data.attributes.url} alt="" fill />
              </div>
              <div className="perks__item__body">
                <h3 className="mb-4 text-neutral-100">{perk.title}</h3>
                <p className="mb-0">{perk.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <PinkSeparatorArrow />
    </section>
  );
};

export default Perks;
