import Icon from '@/ui/Icon';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import './style.css';

type Props = {};

const page = (props: Props) => {
  return (
    <>
      {/* courses crd */}
      <div className="crd">
        <Link href="#">
          <figure className="crd__img">
            <Image
              src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-1080.jpeg"
              alt=""
              fill
            />
            <div className="crd__chips">
              <div className="chip chip--white">24 days</div>
              <div className="chip chip--primary">Rs. 40,000</div>
            </div>
          </figure>
        </Link>
        <div className="crd__body">
          <Link href="#" className="crd__main">
            <h3 className="crd__title">Lorem, ipsum.</h3>
            <p className="crd__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              sed.
            </p>
          </Link>
          <div className="crd__footer">
            <Link href="#" className="crd__action">
              <Icon name="download" height={24} width={24} />
              Download Curriculum
            </Link>
          </div>
        </div>
      </div>

      {/* course crd Horizotal */}
      {/* <div className="crd">
        <figure className="crd__img">
          <Image src="" alt="" />
          <div className="crd__chips"></div>
        </figure>
        <div className="crd__body">
          <h3 className="crd__title"></h3>
          <p className="crd__desc"></p>
          <div className="crd__action"></div>
        </div>
      </div> */}

      {/* category */}
      {/* <div className="crd">
        <figure className="crd__img">
          <Image src="" alt="" />
          <div className="crd__chips"></div>
        </figure>
        <div className="crd__body">
          <h3 className="crd__title"></h3>
          <p className="crd__desc"></p>
        </div>
      </div> */}

      {/* testimonial */}
      {/* <div className="crd">
        <figure className="crd__img crd__img--avatar">
          <Image src="" alt="" />
        </figure>
        <div className="crd__body">
          <div className="crd__rating"></div>
          <p className="crd__desc"></p>
          <div className="card__action">
            <h4></h4>
            <p></p>
          </div>
        </div>
      </div> */}

      {/* blog */}
      {/* <div className="crd">
        <figure>
          <Image src="" alt="" />
          <div className="crd__chips"></div>
        </figure>
        <div className="crd__body">
          <time>Septemeber 1, 2022</time>
          <h3 className="crd__body__title"></h3>
        </div>
      </div> */}

      {/* Blog Horizontal */}
      {/* <div className="crd">
        <figure>
          <Image src="" alt="" />
          <div className="crd__chips"></div>
        </figure>
        <div className="crd__body">
          <h3 className="crd__body__title"></h3>
        </div>
      </div> */}

      {/* Event crd */}
      {/* <div className="crd">
        <figure>
          <Image src="" alt="" />
          <div className="crd__chips"></div>
        </figure>
        <div className="crd__body">
          <div>
            <time></time>
            <h3 className="crd__title"></h3>
            <p className="crd__desc"></p>
          </div>
          <time>
            <span>July</span>
            <span>24</span>
          </time>
        </div>
      </div> */}

      {/* User crd */}
      {/* <div className="crd">
        <figure>
          <Image src="" alt="" />
        </figure>
        <div className="crd__body">
          <div>
            <h3 className="name"></h3>
            <div className="chip"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
            repudiandae.
          </p>
          <div className="action"></div>
        </div>
      </div> */}
    </>
  );
  // return (
  //   <div className="wrapper">
  //     <div className="wrapper__header">
  //       {/* <div className="absolute top-24 left-0 aspect-square h-[600px] rounded-full bg-secondary2"></div> */}
  //     </div>
  //     <div className="wrapper__body">
  //       <div className="wrapper__body__image">
  //         <Image
  //           alt="It is the image of the blog post that you are viewing"
  //           src={
  //             'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f23fe55a94aa127fb47b2_image-6-blog-education-x-template.jpg'
  //           }
  //           fill
  //         />
  //       </div>
  //       <div className="wrapper__body__content">
  //         <h1>
  //           How to design a simple, yet unique and memorable brand identity
  //         </h1>
  //         <div></div>
  //         <hr className="my-10" />

  //         <div>
  //           <h2 className="mb-2">What makes a good brand book?</h2>
  //           <div></div>
  //           <p>
  //             Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.
  //             Diam phasellus vestibulum lorem sed risus ultricies. Magna sit
  //             amet purus gravida quis blandit. Arcu cursus vitae congue mauris.
  //             Nunc mattis enim ut tellus elementum sagittis vitae et leo. Semper
  //             risus in hendrerit gravida rutrum quisque non. At urna condimentum
  //             mattis pellentesque id nibh tortor. A erat nam at lectus urna duis
  //             convallis convallis tellus. Sit amet mauris commodo quis imperdiet
  //             massa. Vitae congue eu consequat ac felis
  //           </p>
  //           <ul>
  //             <li>
  //               Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.
  //             </li>
  //             <li>
  //               Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.
  //             </li>
  //             <li>
  //               Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.
  //             </li>
  //             <li>
  //               Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.
  //             </li>
  //             <li>
  //               Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.
  //             </li>
  //           </ul>
  //           <h3>How to create a good brand book?</h3>
  //           <img
  //             src={
  //               'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f23fe55a94aa127fb47b2_image-6-blog-education-x-template.jpg'
  //             }
  //             alt=""
  //           />
  //           <h4>This is the h4 tag</h4>
  //           <p>
  //             Eget aliquet nibh praesent tristique magna sit amet purus.
  //             Consequat id porta <a>nibh</a> venenatis cras sed felis. Nisl
  //             rhoncus mattis rhoncus urna neque viverra justo nec. Habitant
  //             morbi tristique senectus et netus et malesuada fames ac. Et tortor
  //             consequat id porta nibh venenatis cras sed felis. Fringilla est
  //             ullamcorper eget nulla facilisi. Mi sit amet mauris commodo quis.
  //             Eget arcu dictum varius duis at consectetur lorem.Venenatis cras
  //             sed felis eget velit
  //           </p>
  //           <ol>
  //             <li>Magna eget est lorem ipsum dolor.</li>
  //             <li>Magna eget est lorem ipsum dolor.</li>
  //             <li>Magna eget est lorem ipsum dolor.</li>
  //             <li>Magna eget est lorem ipsum dolor.</li>
  //           </ol>
  //           <blockquote>
  //             Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.
  //             Diam phasellus vestibulum lorem sed risus ultricies. Magna sit
  //             amet purus gravida quis blandit. Arcu cursus vitae congue mauris.
  //           </blockquote>
  //           <h6>A brand book can always keep evolving</h6>
  //           <p>
  //             Tortor dignissim convallis aenean et tortor at risus. Condimentum
  //             vitae sapien pellentesque habitant morbi tristique senectus et
  //             netus. Dui nunc mattis enim ut tellus elementum sagittis vitae et.
  //             Quis imperdiet massa tincidunt nunc pulvinar sapien et.
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default page;
