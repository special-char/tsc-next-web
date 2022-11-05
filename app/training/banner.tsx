import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

async function getBannerData() {
  try {
    const res = await fetch('http://65.20.70.84:1337/graphql', {
      method: 'POST',
      body: JSON.stringify({
        query: `{
          banner {
            data {
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
                buttons {
                  id
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
    const json = await res.json();
    return json;
  } catch (error) {}
}

type Props = {};

const Banner = async (props: Props) => {
  const bannerData = await getBannerData();
  console.log(bannerData);

  const bannerInfo = bannerData?.data?.banner?.data?.attributes;

  return (
    <section id="banner" className={styles.banner}>
      <div className={styles.banner__details}>
        <h1 className={styles.banner__title}>{bannerInfo?.title}</h1>
        <p className={styles.banner__description}>{bannerInfo?.description}</p>
        <div className={styles.banner__actions}>
          {bannerInfo?.buttons.map((item: any) => (
            <Link key={item.id} href={item.url} className="btn btn--primary">
              {item.text}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.banner__image}>
        {bannerInfo?.image && (
          <Image src={bannerInfo?.image.data.attributes.url} alt="logo" fill />
        )}
      </div>
    </section>
  );
};

export default Banner;
