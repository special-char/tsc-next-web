import { getBlogsMeta } from '@/lib/getBlogsMeta';
import { DefaultTags } from '@/ui/DefaultTags';
import { Blog, BlogEntity } from 'types/types';

export type PageProps = {
  params: {
    slug: string;
  };
  children?: React.ReactNode;
};

export default async function Head({ params }: PageProps) {
  // const category = {
  //   name: 'hello',
  // };

  // const title = `${category?.name} | Next.js App Directory`;
  // const description = `The best fictional ${category?.name} money can buy.`;

  const metaData = await getBlogsMeta(params.slug);
  const [{ attributes }] = metaData.data.individualBlog.data;

  return (
    <>
      <DefaultTags />
      <title>{attributes?.seo.metaTitle}</title>
      <meta name="description" content={attributes?.seo.metaDescription} />
      <meta name="title" content={attributes?.seo.metaTitle} />
      <meta name="keywords" content={attributes?.seo.keywords} />
      <meta name="viewport" content={attributes?.seo.metaViewport}></meta>
      <link rel="canonical" href={attributes?.seo.canonicalURL} />
      <meta name="robots" content={attributes?.seo.metaRobots} />
      <meta
        property="og:image"
        content={attributes?.seo.metaImage.data.attributes.url}
      />
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(attributes?.seo.structuredData) }}
      /> */}
    </>
  );
}
