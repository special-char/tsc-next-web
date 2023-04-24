import '@/styles/banner.css';
import { getBannerData } from '@/lib/getBanner';
import { Banner, Form, UploadFile } from 'types/types';
import Script from 'next/script';
import Carousal from '@/ui/Carousal';
import { getFormDetails } from '@/lib/getFormDetails';
import BannerCard from '@/ui/BannerCard';
import DynamicForm from '@/ui/DynamicForm';

// export const BannerSkeleton = () => {
//   return (
//     <section id="banner" className="banner">
//       <div className="banner__details animate-pulse">
//         <h1 className="banner__title font-cursive">
//           Grow your skillsss, define your future
//         </h1>
//         <p className="font-cursive">
//           Presenting Academy, the tech school of the future. We teach you the
//           right skills to be prepared for tomorrow.
//         </p>
//         <div className="banner__actions">
//           {['Explore Courses', 'Contact Us'].map((item: any) => (
//             <div key={item} className="btn btn--primary font-cursive">
//               {item.text}
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="banner__image">
//         <div></div>
//       </div>
//     </section>
//   );
// };

type Props = {};

const Banner = async (props: Props) => {
  const bannerData = await getBannerData('home');
  const form = await getFormDetails(2);

  const { title, description, buttons, image, seo } = bannerData.data.banner
    .data?.attributes as Banner;

  const { fields, submitURL } = form.data?.attributes as Form;

  return (
    <section id="relative">
      <Carousal isFull>
        {[1, 2, 3].map((x) => {
          return (
            <BannerCard
              key={x}
              index={x}
              fields={fields}
              submitURL={submitURL}
              {...bannerData.data.banner.data?.attributes}
              style={{
                maxWidth: '100%',
              }}
            />
          );
        })}
      </Carousal>

      {seo?.structuredData && (
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seo.structuredData),
          }}
        />
      )}
    </section>
  );
};

export default Banner;
