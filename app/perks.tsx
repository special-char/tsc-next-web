import '@/styles/perks.css';
import PinkSeparatorArrow from '@/ui/PinkSeparatorArrow';
import Image from 'next/image';
import { getPerksData } from '@/lib/getPerks';
import { ComponentCommonDetail, Perk, UploadFile } from 'types/types';

const Perks = async () => {
  const perksData = await getPerksData();

  if (!perksData) return null;

  const { benifits, title } = perksData.data.data.perk.data?.attributes as Perk;

  return (
    <section id="perks" className="perks">
      <h2 className="perks__title">{title}</h2>
      <div className="perks__content">
        {benifits?.map((perk) => {
          const { title, description, image, id } =
            perk as ComponentCommonDetail;
          const { url } = image.data?.attributes as UploadFile;
          return (
            <div key={id} className="perks__item">
              <div className="perks__item__image">
                <Image src={url} alt="" fill />
              </div>
              <div className="perks__item__body">
                <h3 className="mb-4 text-neutral-100">{title}</h3>
                <p className="mb-0">{description}</p>
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
