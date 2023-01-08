import '@/styles/individualcourse.css';
import DesignSvg from '@/public/icons/design.svg';
import Image from 'next/image';
import md from 'markdown-it';
import Price from './priceCard';
import ChipNavigation from '@/ui/ChipNavigation';
import { getCourseDetails } from '@/lib/getCourseDetails';
import { Course, CourseEntity, Form, UploadFile } from 'types/types';
import TestimonialCard from '@/ui/TestimonialCard';
import Accordian, { AccordianType } from '@/ui/Accordian';
import Link from 'next/link';

const chipNavData = [
  {
    href: '#about',
    children: 'About',
    as: Link,
  },
  {
    href: '#topic',
    children: 'Results',
    as: Link,
  },
  {
    href: '#result',
    children: 'Topics',
    as: Link,
  },
  {
    href: '#review',
    children: 'Reviews',
    as: Link,
  },
];

export type PageProps = {
  params: {
    slug: string;
  };
  children?: React.ReactNode;
};

export default async function Page({ params }: PageProps) {
  const coursesData = await getCourseDetails(params.slug);

  const [{ attributes }] = coursesData.data.courses.data as CourseEntity[];

  const {
    title,
    description,
    courseVideoPoster,
    aboutCourse,
    testimonials,
    curriculam,
    complitionResult,
    category,
    ...data
  } = attributes as Course;

  const categoryTitle = category?.data?.attributes?.title || '';

  const { url, alternativeText } = courseVideoPoster.data
    ?.attributes as UploadFile;

  const accordianData =
    curriculam?.map<AccordianType>((item) => {
      return {
        id: item?.id || '',
        title: item?.title || '',
        description: item?.content || '',
      };
    }) || [];
  return (
    <>
      <section id="individualcourse" className="individualcourse">
        <div className="individualcourse__content">
          <div className="individualcourse__content__bg"></div>
          <div className="individualcourse__content__round"></div>
        </div>
        <div className="main py-16">
          <div>
            {categoryTitle && (
              <div className="chip chip--white icon">
                <DesignSvg className="w-4" />
                <span className="font-bold">{categoryTitle}</span>
              </div>
            )}

            <h2 className="main__left-section__title">{title}</h2>
            <p className="pb-6 text-neutral-100">{description}</p>
            <div className="main__left-section__preview">
              {url && (
                <Image
                  src={url}
                  alt={`${alternativeText}`}
                  className="brightness-50"
                  fill
                  priority
                />
              )}
              {/* <div className="main__left-section__preview__body">
                <div className="popup-icon flex h-20 w-20 items-center justify-center rounded-full bg-secondary1 md:h-32 md:w-32">
                  <PlayVideo
                    role="presentation"
                    focusable="false"
                    aria-label="trigram for heaven symbol"
                    className="!m-auto h-9 w-7 fill-primary"
                  />
                </div>
              </div> */}
            </div>
            <div className="lg:hidden">
              <Price
                data={attributes}
                additionalField={{
                  courseName: params.slug,
                }}
              />
            </div>
            <div className="main__left-section__course-navigation">
              <ChipNavigation chipData={chipNavData} />
            </div>
            <section id="about">
              <h2 className="text-3xl md:text-6xl">About the course</h2>
              {aboutCourse && (
                <div
                  dangerouslySetInnerHTML={{ __html: md().render(aboutCourse) }}
                ></div>
              )}
            </section>
            <hr className="my-8 md:my-12 lg:my-16" />
            <section id="topic">
              <h2 className="text-3xl md:text-6xl">What will you learn</h2>
              <Accordian data={accordianData} />
            </section>
            <hr className="my-8 md:my-12 lg:my-16" />
            <section id="result">
              <h2 className="text-3xl md:text-6xl">
                Results after course completion
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: md().render(complitionResult || ''),
                }}
              ></div>
            </section>
            <hr className="my-8 md:my-12 lg:my-16" />
            {testimonials?.data && testimonials?.data.length > 0 && (
              <section id="review">
                <h2 className="text-center md:text-left">
                  What our Students say
                </h2>
                <div>
                  {testimonials?.data.map((testimonial) => {
                    return (
                      <TestimonialCard
                        key={testimonial.id}
                        testimonial={testimonial}
                      />
                    );
                  })}
                </div>
              </section>
            )}
          </div>
          <div className="sticky top-0 hidden self-start lg:block">
            <Price
              data={attributes}
              additionalField={{
                courseName: params.slug,
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
