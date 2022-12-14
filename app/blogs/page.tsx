import Image from 'next/image';
import Link from 'next/link';
import '@/styles/blogs.css';
import BlogSubscribe from 'app/training/blogSubscribe';
import Icon from '@/ui/Icon';
import Features from 'app/courses/features';
import PageHeader from '@/ui/pageHeader';
import Card from '@/ui/Card';

export default async function Page() {
  // const moreblogData = [
  //   {
  //     id: 1,
  //     url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f23fe55a94aa127fb47b2_image-6-blog-education-x-template-p-1600.jpeg',
  //     icon: 'design',
  //     iconname: 'Design',
  //     description:
  //       'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Beatae, corrupti!',
  //     date: '1 September, 2022',
  //   },
  //   {
  //     id: 2,
  //     url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2623f3809724753fbc65_image-5-blog-education-x-template-p-1600.jpeg',
  //     icon: 'microphone',
  //     iconname: 'Marketing',
  //     description:
  //       'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Beatae, ',
  //     date: '1 September, 2022',
  //   },
  //   {
  //     id: 3,
  //     url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f25e9ca7a36bf7469e0c8_image-4-blog-education-x-template-p-1600.jpeg',
  //     icon: 'design',
  //     iconname: 'Design',
  //     description:
  //       'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Beatae, corrupti!',
  //     date: '1 September, 2022',
  //   },
  //   {
  //     id: 4,
  //     url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f256ca6388c4207dbfb28_image-3-blog-education-x-template-p-1600.jpeg',
  //     icon: 'microphone',
  //     iconname: 'Marketing',
  //     description:
  //       'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Beatae, corrupti!',
  //     date: '1 September, 2022',
  //   },
  //   {
  //     id: 5,
  //     url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f24e214c1a2aef22ce32b_image-2-blog-education-x-template.jpg',
  //     icon: 'developer',
  //     iconname: 'Development',
  //     description:
  //       'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Beatae, corrupti!',
  //     date: '1 September, 2022',
  //   },
  //   {
  //     id: 6,
  //     url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2405097a4b97dde4f6d2_image-1-blog-education-x-template-p-1600.jpeg',
  //     icon: 'microphone',
  //     iconname: 'Marketing',
  //     description:
  //       'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Beatae, corrupti!',
  //     date: '1 September, 2022',
  //   },
  // ];
  const blogData = [
    {
      id: 1,
      image_url: 'https://images.unsplash.com/photo-1667988152364-52ab908cd3bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
      heading: 'Lorem ipsum dolor sit amet, consectetur adip'

    },
    {
      id: 2,
      image_url: 'https://images.unsplash.com/photo-1667988152364-52ab908cd3bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',

      heading: 'Lorem ipsum dolor sit amet, consectetur adip'
    },
    {
      id: 3,
      image_url: 'https://images.unsplash.com/photo-1667988152364-52ab908cd3bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',

      heading: 'Lorem ipsum dolor sit amet, consectetur adip'
    },
  ];
  const data = {
    isHorizontal: false,
    // chip_align: 'left',
    image_url:
      'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template.jpg',
    heading: 'Graphic Design 101',
    time: '8hr 12m',
    rate: '99.00',
    publishedAt: {
      month: 'August',
      day: '11',
      year: '2022'
    },
    // description:
    //   'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, corrupti, eius quae accusantium alias eaque facere voluptatum aliquid fugit, harum sed quia quos dolorum nam!',
    avatar_info: {
      avatar_url:
        'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg',
      avatar_name: 'Yagnesh Modh',
      avatar_Designation: 'Designer',
    },
  };
  return (
    <>
      <PageHeader
        title="Blogss"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        className="customClass"
        circleRight="bg-primary"
        circleLeft="bg-secondary3"
      />
      <section className="blogs">
        <div className="blogs__grid">
          <Card data={data} />
          <div className="blogs__horizontal overflow-hidden">
            {blogData.map((blog) => {
              return <Card key={blog.id} className={'classname card--hoz'} data={blog} />;
            })}
          </div>
        </div>
      </section>
      <BlogSubscribe />
      <Features />
      {/* <section className="blogs__moreblogs">
        {moreblogData.map((moreblogs) => {
          return (
            <Link href="#" key={moreblogs.id} className="card ">
              <figure className="card__image">
                <Image src={moreblogs.url} alt="" fill />
                <span className="card__actions chip chip--secondary absolute top-4 right-3 gap-2">
                  <Icon name={moreblogs.icon} height={20} width={20} />
                  {moreblogs.iconname}
                </span>
              </figure>
              <div className="card__body">
                <time className="card__date">{moreblogs.date}</time>
                <h4 className="card__title--line-2">{moreblogs.description}</h4>
              </div>
            </Link>
          );
        })}
      </section> */}
    </>
  );
}
