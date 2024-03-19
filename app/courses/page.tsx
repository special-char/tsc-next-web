// import React, { use } from 'react';
// import PageHeader from '@/ui/pageHeader';
// import Featuredcourse from './featuredcourse';
// import AllCourses from './allCourses';
// import { Suspense } from 'react';
// import { getAllCoursesData } from '@/lib/getAllCourses';
// import { Metadata } from 'next';
// import { getSEOData } from '@/lib/getSEO';
// import { ComponentSharedSeo } from 'types/types';

// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }): Promise<Metadata> {
//   const metaData = await getSEOData('courses');

//   const seo = metaData?.data?.banner?.data?.attributes
//     ?.seo as ComponentSharedSeo;

//   const facebook = seo.metaSocial?.find((x) => x?.socialNetwork === 'Facebook');
//   const twitter = seo.metaSocial?.find((x) => x?.socialNetwork === 'Twitter');

//   let twitterMeta: Metadata = {};
//   if (twitter) {
//     twitterMeta = {
//       twitter: {
//         card: 'summary_large_image',
//         title: twitter.title,
//         description: twitter.description,
//         siteId: '1467726470533754880',
//         creator: '@nextjs',
//         creatorId: '1467726470533754880',
//         images: [twitter.image?.data?.attributes?.url || ''],
//       },
//     };
//   }

//   let facebookMeta: Metadata = {};
//   if (facebook) {
//     facebookMeta = {
//       openGraph: {
//         title: facebook.title,
//         description: facebook.description,
//         url: `https://thespecialcharacter.com/blogs`,
//         siteName: 'The Special Character',
//         images: [
//           {
//             url: facebook.image?.data?.attributes?.url || '',
//             width: 800,
//             height: 600,
//           },
//         ],
//         locale: 'en-US',
//         type: 'website',
//       },
//     };
//   }

//   return {
//     title: seo.metaTitle,
//     description: seo.metaDescription,
//     keywords: seo.keywords,
//     ...twitterMeta,
//     ...facebookMeta,
//   };
// }

// type Props = {};

// const page = async ({
//   searchParams,
// }: {
//   searchParams?: { category?: string };
// }) => {
//   const coursesData = await getAllCoursesData();

//   const [featuredCourse, ...allCourses] = coursesData.data.courses.data;

//   return (
//     <>
//       <Suspense fallback={<h1>Loading...</h1>}>
//         {/* @ts-expect-error Async Server Component */}
//         <PageHeader
//           pageName="courses"
//           className="customClass"
//           circleRight="bg-secondary2"
//           circleLeft="bg-secondary3"
//         />
//       </Suspense>
//       <Featuredcourse data={featuredCourse} />
//       <AllCourses courses={allCourses} category={searchParams?.category} />
//     </>
//   );
// };

// export default page;
import React from 'react';

const Course = () => <></>;
export default Course;
