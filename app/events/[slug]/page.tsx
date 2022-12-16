import '@/styles/allevents.css';
import '@/styles/blogPost.css';

import EventDatailPage from '@/ui/EventDatailPage';

import Image from 'next/image';

const Page = () => {
  return (
    <>
      <section id="blogPost" className="blogPost">
        <div className="events__banner">
          <div className="events__animate-bounce-slow1 "></div>
          <div className="events__animate-bounce-slow2 "></div>
        </div>
        <div className="blogPost__content">
          <div className="blogPost__content__image z-50">
            <Image
              alt="It is the image of the blog post that you are viewing"
              src={
                'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f23fe55a94aa127fb47b2_image-6-blog-education-x-template.jpg'
              }
              fill
            />
          </div>
          <div className="blogPost__content__text">
            <EventDatailPage />

            <h2 className="mb-2">What makes a good brand book?</h2>
            <p>
              Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.
              Diam phasellus vestibulum lorem sed risus ultricies. Magna sit
              amet purus gravida quis blandit. Arcu cursus vitae congue mauris.
              Nunc mattis enim ut tellus elementum sagittis vitae et leo. Semper
              risus in hendrerit gravida rutrum quisque non. At urna condimentum
              mattis pellentesque id nibh tortor. A erat nam at lectus urna duis
              convallis convallis tellus. Sit amet mauris commodo quis imperdiet
              massa. Vitae congue eu consequat ac felis
            </p>
            <ul className="my-10">
              <li>
                Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.
              </li>
              <li>
                Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.
              </li>
              <li>
                Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.
              </li>
              <li>
                Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.
              </li>
              <li>
                Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.
              </li>
            </ul>
            <button className="events__button btn btn--primary">
              REGISTER TO EVENT
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
