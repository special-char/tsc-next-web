import ActionBar from '@/ui/ActionBar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Design from '@/public/icons/design.svg';
import '@/styles/blogPost.css';
import Card from '@/ui/Card';
import Button from '@/ui/Button';

type Props = {};

const data = {
  image_url:
    'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-1080.jpeg',
  time: '7hr56m',
  rate: '199.00',
  heading: 'Graphic Design 101',
  description:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptatibus eius nesciunt cupiditate iure obcaecati a dicta nontemporibus quis deserunt.',
};
const page = (props: Props) => {
  return (
    <div className="wrapper">
      <div className="wrapper__header">
        {/* <div className="absolute top-24 left-0 aspect-square h-[600px] rounded-full bg-secondary2"></div> */}
      </div>
      <div className="wrapper__body py-10 md:py-16 lg:py-20">
        <div className="wrapper__body__image">
          <Image
            alt="It is the image of the blog post that you are viewing"
            src={
              'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f23fe55a94aa127fb47b2_image-6-blog-education-x-template.jpg'
            }
            fill
          />
        </div>
        <div className="wrapper__body__content">
          <h1 className='lg:text-9xl text-5xl md:text-8xl'>
            How to design a simple, yet unique and memorable brand identity
          </h1>
          <div className="wrapper__body__content__author-info">
            <ActionBar />
            <span className="about-blog">
              <Link href={'#'}>
                <span className="about-blog__accessory chip chip--white">
                  <Design className="chip__icon w-4" />
                  <span>Design</span>
                </span>
              </Link>
              <span className="chip chip--secondary text-xs">10 m</span>
            </span>
          </div>
          <hr className="my-10" />

          <div>
            <h2 className="mb-2">What makes a good brand book?</h2>
            <div></div>
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
            <ul>
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
            <h3>How to create a good brand book?</h3>
            <img
              src={
                'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f23fe55a94aa127fb47b2_image-6-blog-education-x-template.jpg'
              }
              alt=""
            />
            <h4>This is the h4 tag</h4>
            <p>
              Eget aliquet nibh praesent tristique magna sit amet purus.
              Consequat id porta <a>nibh</a> venenatis cras sed felis. Nisl
              rhoncus mattis rhoncus urna neque viverra justo nec. Habitant
              morbi tristique senectus et netus et malesuada fames ac. Et tortor
              consequat id porta nibh venenatis cras sed felis. Fringilla est
              ullamcorper eget nulla facilisi. Mi sit amet mauris commodo quis.
              Eget arcu dictum varius duis at consectetur lorem.Venenatis cras
              sed felis eget velit
            </p>
            <ol>
              <li>Magna eget est lorem ipsum dolor.</li>
              <li>Magna eget est lorem ipsum dolor.</li>
              <li>Magna eget est lorem ipsum dolor.</li>
              <li>Magna eget est lorem ipsum dolor.</li>
            </ol>
            <blockquote>
              Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.
              Diam phasellus vestibulum lorem sed risus ultricies. Magna sit
              amet purus gravida quis blandit. Arcu cursus vitae congue mauris.
            </blockquote>
            <h6>A brand book can always keep evolving</h6>
            <p>
              Tortor dignissim convallis aenean et tortor at risus. Condimentum
              vitae sapien pellentesque habitant morbi tristique senectus et
              netus. Dui nunc mattis enim ut tellus elementum sagittis vitae et.
              Quis imperdiet massa tincidunt nunc pulvinar sapien et.
            </p>
          </div>
        </div>
      </div>
      <div className="blogs">
        <div className="blogs__header">
          <h2 className="blogs__header__heading">Latest posts</h2>
          <Button as={Link} href={`#`} variant="secondary" className='uppercase max-w-max place-self-end'>
            all posts
          </Button>
        </div>
        <div className="blogs__latest-blogs">
          {[1, 2, 3, 4].map(x => <Card data={data} />)}
        </div>
      </div>
    </div>
  );
};

export default page;
