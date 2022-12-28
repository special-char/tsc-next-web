import '@/styles/individualcourse.css';
import DesignSvg from '@/public/icons/design.svg';
import Image from 'next/image';
import PlayVideo from '@/public/icons/playVideo.svg';
import md from 'markdown-it';
import Price from './price';
import ChipNavigation from '@/ui/ChipNavigation';
import { getCourseDetails } from '@/lib/getCourseDetails';
import { Course, CourseEntity, UploadFile } from 'types/types';
import { use } from 'react';
import TestimonialCard from '@/ui/TestimonialCard';
import Accordian, { AccordianType } from '@/ui/Accordian';

const chipNavData = [
  {
    link: '#about',
    label: 'About',
  },
  {
    link: '#topic',
    label: 'Results',
  },
  {
    link: '#result',
    label: 'Topics',
  },
  {
    link: '#review',
    label: 'Reviews',
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
  } = attributes as Course;

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
        <div className="main__left-section">
          <div className="chip justify-start px-0">
            <div className="chip chip--white top-28 left-0 gap-1 py-3">
              <DesignSvg className="w-4" />
              <span className="font-bold">Design</span>
            </div>
          </div>
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
          <section id="about" className="main__left-section__about">
            <h2 className="text-3xl md:text-6xl">About the course</h2>
            {aboutCourse && (
              <div
                dangerouslySetInnerHTML={{ __html: md().render(aboutCourse) }}
              ></div>
            )}
          </section>
          <section id="topic" className="main__left-section__topic">
            <h2 className="text-3xl md:text-6xl">What will you learn</h2>
            <Accordian data={accordianData} />
          </section>
          <section id="result" className="main__left-section__result">
            <h2 className="text-3xl md:text-6xl">
              Results after course completion
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: md().render(complitionResult || ''),
              }}
            ></div>

            {/* <div className="main__left-section__image">
              <Image
                className="rounded-3xl"
                alt="result"
                fill
                src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f294e56e6b00b752780af_image-course-results-education-x-template.jpg"
              />
            </div> */}
          </section>
          {testimonials?.data && testimonials?.data.length > 0 && (
            <section id="review" className="course-review pt-12 md:pt-16">
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
