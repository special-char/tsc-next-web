import '@/styles/blogPost.css';
import ActionBar from '@/ui/ActionBar';
import Design from '@/public/icons/design.svg';
// import Chip from '@/ui/Chip';
import Image from 'next/image';
import Link from 'next/link';
import IndividualTeacher from 'app/training/individualteacher';
export default async function Page() {
  // const chips = [
  //   {
  //     id: 1,
  //     text: "Design",
  //     icon: 'design',
  //   }
  // ]
  return (
    <section id="individualcourse" className="individualcourse">
      <div className="individualcourse__content">
        <div className="individualcourse__content__bg"></div>
        <div className="individualcourse__content__round"></div>
      </div>
      <div className="grid grid-cols-1 gap-20 py-32 px-container">
        <div className="relative h-[640px] w-full overflow-hidden rounded-[40px]">
          <Image
            alt="alt"
            src={
              'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f23fe55a94aa127fb47b2_image-6-blog-education-x-template.jpg'
            }
            fill
          />
        </div>
        <div className="mx-auto w-4/5 px-6 pb-6 text-left">
          <div className="grid grid-cols-1 border-b pb-20">
            <h1
              style={{
                maxWidth: '760px',
              }}
            >
              How to design a simple, yet unique and memorable brand identity
            </h1>
            <div className="grid grid-cols-2">
              <ActionBar />
              <span className="flex gap-5 place-self-end">
                <Link href={'#'}>
                  <span className="chip chip--white flex gap-2 border border-[#e7eaee] text-xs">
                    <Design className="chip__icon h-5 w-4" />
                    <span>Design</span>
                  </span>
                </Link>
                <span className="chip chip--secondary text-xs">10 m</span>
              </span>
            </div>
          </div>
          <div className="pt-20">
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
            <figure className="relative aspect-blog-image  overflow-hidden rounded-[40px]">
              <Image
                alt="alt"
                src={
                  'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f23fe55a94aa127fb47b2_image-6-blog-education-x-template.jpg'
                }
                fill
              />
              <figcaption>this is a figcaption</figcaption>
            </figure>

            <h4>This is the h5 tag</h4>
            <p>
              Eget aliquet nibh praesent tristique magna sit amet purus.
              Consequat id porta nibh venenatis cras sed felis. Nisl rhoncus
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
            <IndividualTeacher />
          </div>
        </div>
      </div>
      <section className="bg-neutral-200 px-container">
        <div className="pt-44 pb-28 ">
          <div className="grid grid-cols-2">
            <h2 className="m-0 grid place-content-center place-self-start">
              Latest posts
            </h2>
            <span className="chip chip--secondary max-w-max place-self-end py-4 px-10 text-base uppercase">
              all posts
            </span>
          </div>
          <div className="moreblogs">
            <Link href="#" className="card">
              <figure className="card__image">
                <Image
                  src="https://images.unsplash.com/photo-1661347335413-e4ef4c97d625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                  alt="image"
                  fill
                />
                <span className=" chip chip--secondary absolute top-4 right-3">
                  $199.00 USD
                </span>
              </figure>
              <div className="card__body">
                <time className="card__date">December 1,2022</time>
                <h2 className="card__title line-clamp-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing.
                </h2>
              </div>
            </Link>
            <Link href="#" className="card">
              <figure className="card__image">
                <Image
                  src="https://images.unsplash.com/photo-1661347335413-e4ef4c97d625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                  alt="image"
                  fill
                />
                <span className=" chip chip--secondary absolute top-4 right-3">
                  $199.00 USD
                </span>
              </figure>
              <div className="card__body">
                <time className="card__date">December 1,2022</time>
                <h2 className="card__title line-clamp-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing.
                </h2>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
