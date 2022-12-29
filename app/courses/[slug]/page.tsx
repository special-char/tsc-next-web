import '@/styles/individualcourse.css';
import DesignSvg from '@/public/icons/design.svg';
import Image from 'next/image';
import PlayVideo from '@/public/icons/playVideo.svg';
import md from 'markdown-it';
import Price from './priceCard';
import ChipNavigation from '@/ui/ChipNavigation';
import { getCourseDetails } from '@/lib/getCourseDetails';
import { Course, CourseEntity, UploadFile } from 'types/types';
import { use } from 'react';
import TestimonialCard from '@/ui/TestimonialCard';
import Accordian, { AccordianType } from '@/ui/Accordian';

const chipNavData = [
  {
    link: '#about',
    name: 'About',
  },
  {
    link: '#topic',
    name: 'Results',
  },
  {
    link: '#result',
    name: 'Topics',
  },
  {
    link: '#review',
    name: 'Reviews',
  },
];

export type PageProps = {
  params: {
    slug: string;
  };
  children?: React.ReactNode;
};

export default function Page({ params }: PageProps) {
  const coursesData = use(getCourseDetails(params.slug));

  const [{ attributes }] = coursesData.data.courses.data as CourseEntity[];

  const {
    title,
    description,
    courseVideoPoster,
    aboutCourse,
    testimonials,
    price,
    curriculam,
    complitionResult,
    category,
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
                className="rounded-3xl brightness-50"
                fill
              />
            )}
            <div className="main__left-section__preview__body">
              <div className="popup-icon flex h-20 w-20 items-center justify-center rounded-full bg-secondary1 md:h-32 md:w-32">
                <PlayVideo
                  role="presentation"
                  focusable="false"
                  aria-label="trigram for heaven symbol"
                  className="!m-auto h-9 w-7 fill-primary"
                />
              </div>
            </div>
          </div>
          <div className="lg:hidden">
            <Price price={price} />
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
          <div className="individualcourse__right-section">
            <Price price={price} />
          </div>
        </div>
      </div>
      {/* {open && (
        <div
          style={{
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}
          className="fixed top-0 z-50 grid h-screen w-screen place-content-center bg-secondary2"
        >
          <div className="mb-4 flex w-full justify-end px-container ">
            <div
              className="close-btn grid h-8 w-8 place-content-center rounded-full bg-neutral-100 "
              role={'button'}
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="video">
            <iframe
              className="absolute top-0 left-0 px-container"
              height={'100%'}
              width={'100%'}
              src="https://www.youtube.com/embed/cw21m2S5PXQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )} */}
    </section>
  );
}
