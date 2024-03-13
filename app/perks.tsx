import '@/styles/perks.css';
import PinkSeparatorArrow from '@/ui/PinkSeparatorArrow';
import Image from 'next/image';
import { getPerksData } from '@/lib/getPerks';
import { ComponentCommonDetail, Perk, UploadFile } from 'types/types';

export const PerksSkeleton = () => {
  return (
    <section id="perks" className="perks ">
      <h2 className="perks__title animate-pulse font-cursive">
        Why learn with our courses?
      </h2>
      <div className="perks__content  animate-pulse">
        {[1, 2, 3].map((perk) => {
          //   const { title, description, image, id } =
          //     perk as ComponentCommonDetail;
          //   const { url } = image.data?.attributes as UploadFile;
          return (
            <div key={perk} className="perks__item">
              <div className="perks__item__image  bg-neutral-300">
                <div></div>
              </div>
              <div className="perks__item__body">
                <h3 className="mb-4 font-cursive text-neutral-100">1.Learn</h3>
                <p className="mb-0 font-cursive">
                  Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                  elit. Felis donec massa aliqua.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const Perks = async () => {
  const perksData = await getPerksData();

  if (!perksData) {
    throw new Error(
      'something went wrong! try refreshing the page or please come back later.',
    );
  }

  const { benifits, title } = perksData.data.perk.data?.attributes as Perk;

  return (
    <section id="perks" className="perks">
      <h2 className="perks__title">{title}</h2>
      <div className="perks__content">
        {benifits?.map((perk) => {
          const { title, description, image, id } =
            perk as ComponentCommonDetail;
          const { url } = image?.data?.attributes as UploadFile;
          return (
            <div key={id} className="perks__item">
              <div className="perks__item__image">
                <Image
                  src={`${url}?tr=h-192,w-192`}
                  alt="perks"
                  title="perks"
                  height={192}
                  width={192}
                />
              </div>
              <div className="perks__item__body">
                <h3 className="mb-4 text-neutral-100">{title}</h3>
                <p
                  className="mb-0"
                  dangerouslySetInnerHTML={{ __html: description }}
                ></p>
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
