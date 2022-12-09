import '@/styles/blogPost.css';
import ActionBar from '@/ui/ActionBar';
import Design from '@/public/icons/design.svg'
// import Chip from '@/ui/Chip';
import Image from 'next/image';
import Link from 'next/link';
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
      <div className="py-32 px-container grid grid-cols-1 gap-20">
        <div className="relative h-[640px] w-full overflow-hidden rounded-[40px]">
          <Image
            alt="alt"
            src={
              'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f23fe55a94aa127fb47b2_image-6-blog-education-x-template.jpg'
            }
            fill
          />
        </div>
        <div className='w-4/5 mx-auto text-left px-6 pb-6'>
          <div className='grid grid-cols-1 pb-20 border-b'>
            <h1 style={{
              maxWidth: '760px'
            }}>How to design a simple, yet unique and memorable brand identity</h1>
            <div className='grid grid-cols-2'>
              <ActionBar />
              <span className='flex gap-5 place-self-end'>
                <Link href={'#'}>
                  <span className='chip flex gap-2 chip--white border border-[#e7eaee] text-xs'><Design className="chip__icon h-5 w-4" /><span>Design</span></span>
                </Link>
                <span className='chip chip--secondary text-xs'>10 m</span>
              </span>
            </div>
          </div>
          <div className='pt-20'>
            <h2 className='mb-2'>What makes a good brand book?</h2>
            <p>Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Diam phasellus vestibulum lorem sed risus ultricies. Magna sit amet purus gravida quis blandit. Arcu cursus vitae congue mauris. Nunc mattis enim ut tellus elementum sagittis vitae et leo. Semper risus in hendrerit gravida rutrum quisque non. At urna condimentum mattis pellentesque id nibh tortor. A erat nam at lectus urna duis convallis convallis tellus. Sit amet mauris commodo quis imperdiet massa. Vitae congue eu consequat ac felis</p>
            <ul>
              <li>Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.</li>
              <li>Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.</li>
              <li>Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.</li>
              <li>Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.</li>
              <li>Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.</li>
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
            </figure>
            <figcaption>
              this is a figcaption
            </figcaption>
            <h4>This is the h5 tag</h4>
            <p>Eget aliquet nibh praesent tristique magna sit amet purus. Consequat id porta nibh venenatis cras sed felis. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Habitant morbi tristique senectus et netus et malesuada fames ac. Et tortor consequat id porta nibh venenatis cras sed felis. Fringilla est ullamcorper eget nulla facilisi. Mi sit amet mauris commodo quis. Eget arcu dictum varius duis at consectetur lorem.Venenatis cras sed felis eget velit</p>
            <ol>
              <li>Magna eget est lorem ipsum dolor.</li>
              <li>Magna eget est lorem ipsum dolor.</li>
              <li>Magna eget est lorem ipsum dolor.</li>
              <li>Magna eget est lorem ipsum dolor.</li>
            </ol>
            <blockquote>Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Diam phasellus vestibulum lorem sed risus ultricies. Magna sit amet purus gravida quis blandit. Arcu cursus vitae congue mauris.</blockquote>
            <h6>A brand book can always keep evolving</h6>
            <p>Tortor dignissim convallis aenean et tortor at risus. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Quis imperdiet massa tincidunt nunc pulvinar sapien et.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
