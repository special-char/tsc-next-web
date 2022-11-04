import styles from './styles.module.css';
import PerksSvg from '../../public/icons/perks.svg';
import Perks1Svg from '../../public/icons/perks1.svg';
import Perks2Svg from '../../public/icons/perks2.svg';
import PinkSvg from '../../public/icons/pinkarrow.svg';

type Props = {};
const PerksData = [
  {
    svg: <PerksSvg />,
    title: '1.Learn',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Distinctio explicabo mollitia illum ',
  },
  {
    svg: <Perks1Svg />,
    title: '2.Graduate',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Distinctio explicabo mollitia illum ',
  },
  {
    svg: <Perks2Svg />,
    title: '3.Work',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Distinctio explicabo mollitia illum',
  },
];
const Perks = (props: Props) => {
  return (
    <section id="perks" className={`${styles.perks} relative`}>
      <h2 className={`${styles.perks__title} mb-6 px-4`}>
        Why learn with our courses?
      </h2>
      <div className={`${styles.perks__content}`}>
        {PerksData.map((perk) => {
          return (
            <div className={`${styles.perks__item} mb-16`}>
              <div className="w-48">{perk.svg}</div>
              <div className="text-center md:text-left lg:text-center">
                <h3 className="mt-2  text-neutral-100">{perk.title}</h3>
                <p className="mb-0">{perk.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute -bottom-20 z-10 w-14 lg:mt-20">
        <PinkSvg />
      </div>
    </section>
  );
};

export default Perks;
