import { getSEOData } from '@/lib/getSEO';
import { DefaultTags } from '@/ui/DefaultTags';
import { SEOTags } from '@/ui/SEOTags';
import { Partytown } from '@builder.io/partytown/react';
import { ComponentSharedSeo } from 'types/types';

export default async function Head() {
  const metaData = await getSEOData('home');

  const seo = metaData?.data?.banner.data?.attributes
    ?.seo as ComponentSharedSeo;

  return (
    <>
      <DefaultTags />
      <Partytown debug={true} forward={['dataLayer.push']} />
      <script
        src="https://www.googletagmanager.com/gtag/js?id=G-WS7JTT5H0J"
        type="text/partytown"
      />
      <script id="google-analytics" type="text/partytown">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-WS7JTT5H0J');
        `}
      </script>

      {seo && <SEOTags {...seo} path="" />}
    </>
  );
}
