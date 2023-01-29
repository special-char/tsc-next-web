import { getCoursesMeta } from '@/lib/getCoursesMeta';
import { DefaultTags } from '@/ui/DefaultTags';
import { CourseEntity } from 'types/types';

// { params }: PageProps

export type PageProps = {
  params: {
    slug: string;
  };
  children?: React.ReactNode;
};
export default async function Head({ params }: PageProps) {
  //   const category = await fetchSubCategory(
  //     params.categorySlug,
  //     params.subCategorySlug,
  //   );

  // const category = {
  //   name: 'hello word',
  // };

  // const title = `${category?.name} | Next.js App Directory`;
  // const description = `The best fictional ${category?.name} money can buy.`;

  const metaData = await getCoursesMeta(params.slug);
  const [{ attributes }] = metaData.data.courses.data as CourseEntity[];

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
    </>
  );
}
