import { getBlogDetails } from '@/lib/getBlogDetails';
import { getBlogsMeta } from '@/lib/getBlogsMeta';
import { DefaultTags } from '@/ui/DefaultTags';
import { SEOTags } from '@/ui/SEOTags';
import { Blog, BlogEntity } from 'types/types';

export type PageProps = {
  params: {
    slug: string;
  };
  children?: React.ReactNode;
};

export default async function Head({ params }: PageProps) {
  const blogData = await getBlogDetails(params.slug);
  const { seo } = blogData.data.individualBlog.data?.attributes as Blog;

  return (
    <>
      <DefaultTags />
      {seo && <SEOTags {...seo} path={`blogs/${params.slug}`} />}
    </>
  );
}
