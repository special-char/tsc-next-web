import '@/styles/aboutheader.css';
import React from 'react';
import Image from 'next/image';

type Props = {};
const aboutheaderdata = [
  {
    id: 1,
    image:
      'https://assets.website-files.com/607de2d8e8911e32707a3efe/60805c3c724dc80aee6e64bd_image-1-about-story-education-x-template-p-500.jpeg',
    title: 'The mission behind Education platform',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus viverra
    praesent felis consequat pellentesque turpis et quisque platea. Eu,
    elit ut nunc ac mauris bibendum nulla placerat. Sagittis sit eu sit
    massa sapien, risus diam. In lorem eu sed euismod laoreet urna,
    feugiat et. Euismod sem purus rutrum in. Tortor varius a bibendum nisl
    et tellus. Aliquet elit senectus iaculis netus gravida.`,
  },
  {
    id: 2,
    image:
      'https://assets.website-files.com/607de2d8e8911e32707a3efe/60805c3c3415f8f033e0f7c7_image-2-about-story-education-x-template-p-800.jpeg',
    title: 'The story of our founders',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus viverra
    praesent felis consequat pellentesque turpis et quisque platea. Eu,
    elit ut nunc ac mauris bibendum nulla placerat. Sagittis sit eu sit
    massa sapien, risus diam. In lorem eu sed euismod laoreet urna,
    feugiat et. Euismod sem purus rutrum in. Tortor varius a bibendum nisl
    et tellus. Aliquet elit senectus iaculis netus gravida.`,
  },
];

const Aboutheader = (props: Props) => {
  return (
    <section className="px-container py-20">
      <div className="aboutheader">
        {aboutheaderdata.map((x) => (
          <>
            <div className="aboutheader__image">
              <Image src={x.image} alt="" fill />
            </div>
            <div className="aboutheader__title">
              <h2 className="lg:text-6xl">{x.title}</h2>
              <p className="lg:text-lg">{x.desc}</p>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Aboutheader;
