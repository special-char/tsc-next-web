import '@/styles/perks.css';
import PerksSvg from '@/public/icons/perks.svg';
import Perks1Svg from '@/public/icons/perks1.svg';
import Perks2Svg from '@/public/icons/perks2.svg';
import PinkSvg from '@/public/icons/pinkarrow.svg';

type Props = {};
const PerksData = [
  {
    svg: <PerksSvg />,
    title: '1.Learn',
    description:
      'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.',
  },
  {
    svg: <Perks1Svg />,
    title: '2.Graduate',
    description:
      'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua. ',
  },
  {
    svg: <Perks2Svg />,
    title: '3.Work',
    description:
      'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.',
  },
];
const Perks = (props: Props) => {
  return (
    <section id="perks" className="perks">
      <h2 className="perks__title">Why learn with our courses?</h2>
      <div className="perks__content">
        {PerksData.map((perk) => {
          return (
            <div className="perks__item">
              <div className="perks__item__image">{perk.svg}</div>
              <div className="perks__item__body">
                <h3 className="mb-4 text-neutral-100">{perk.title}</h3>
                <p className="mb-0">{perk.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute -bottom-16 z-10 w-12 md:-bottom-20 md:w-20 lg:-bottom-20 lg:w-20">
        <PinkSvg />
      </div>
    </section>
  );
};

export default Perks;
