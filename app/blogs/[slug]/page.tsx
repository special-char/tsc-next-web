import '@/styles/blogPost.css';
import ActionBar from '@/ui/ActionBar';
import Design from '@/public/icons/design.svg';
import Image from 'next/image';
import Link from 'next/link';
import Card from '@/ui/Card';
export default async function Page() {
  const profile = {
    id: 1,
    image_url: "https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg",
    heading: 'Sophie Moore',
    description: 'Lorem Ipsum is Lorem Ipsum in 4th century Copyright Copyright (c) 2008 The University of Texas at Austin and Rice University (   Rice University ) All rights reserved',
    teachingCategory: 'Design',
    icons: true,
  }
  const data = {
    image_url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-1080.jpeg',
    time: '7hr56m',
    rate: '199.00',
    heading: 'Graphic Design 101',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptatibus eius nesciunt cupiditate iure obcaecati a dicta nontemporibus quis deserunt.',

  }
  return (
    <section id="blogPost" className="blogPost">
      <div className="blogPost__background-layout">
        <div className="blogPost__background-layout__bg"></div>
        <div className="blogPost__background-layout__round"></div>
      </div>
      <div className="blogPost__content">
        <div className="blogPost__content__image">
          <Image
            alt="It is the image of the blog post that you are viewing"
            src={
              'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f23fe55a94aa127fb47b2_image-6-blog-education-x-template.jpg'
            }
            fill
          />
        </div>
        <div className="blogPost__content__text">
          <div className="blogPost__content__headline">
            <h1>
              How to design a simple, yet unique and memorable brand identity
            </h1>
            <div className="blogPost__content__author-info">
              <ActionBar />
              <span className="blogPost__content__about-blog">
                <Link href={'#'}>
                  <span className="blogPost__content__about-blog__accessory chip chip--white">
                    <Design className="chip__icon" />
                    <span>Design</span>
                  </span>
                </Link>
                <span className="chip chip--secondary text-xs">10 m</span>
              </span>
            </div>
          </div>
          <div className="blogPost__content__divider"></div>
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
          <figure>
            <div className="relative aspect-blog-image  overflow-hidden rounded-[40px]">
              <Image
                alt="alt"
                src={
                  'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f23fe55a94aa127fb47b2_image-6-blog-education-x-template.jpg'
                }
                fill
              />
            </div>
            <figcaption>this is a figcaption</figcaption>
          </figure>
          <h4>This is the h4 tag</h4>
          <p>
            Eget aliquet nibh praesent tristique magna sit amet purus.
            Consequat id porta <a>nibh</a> venenatis cras sed felis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo nec. Habitant morbi
            tristique senectus et netus et malesuada fames ac. Et tortor
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
          <Card data={profile} className={'card--profile_Card'} />
        </div>
      </div>
      <div className="blogPost__blogs">
        <div className="blogPost__blogs__header">
          <h2 className="blogPost__blogs__header__heading">
            Latest posts
          </h2>
          <span className="blogPost__blogs__header__btn">
            all posts
          </span>
        </div>
        <div className='blogPost__blogs__latest-blogs'>
          {/* <Link href="#" className="blog-post">
            <figure className='blog-post__content'>
              <div className="card__image">
                <Image
                  src="https://images.unsplash.com/photo-1661347335413-e4ef4c97d625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                  alt="image"
                  fill
                />
              </div>
              <span className="chip chip--secondary absolute top-4 right-3">
                $199.00 USD
              </span>
            </figure>
            <div className="card__body !pb-8 !pt-6 !px-10 md:!px-12 md:!pt-8 md:!pb-14">
              <time className="card__date text-neutral-600 font-semibold text-base">December 1,2022</time>
              <h2 className="card__title line-clamp-2 text-xl md:text-2xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </h2>
            </div>
          </Link> */}
          <Card data={data} />
          <Card data={data} />
        </div>

      </div>
    </section>
  );
}
