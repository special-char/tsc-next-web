import '@/styles/individualteacher.css';
import Icon from '@/ui/Icon';
import Image from 'next/image';
import Link from 'next/link';
type Props = {};

const data = [
  {
    icon: 'linkedin',
    link: 'https://www.linkedin.com',
  },
  {
    icon: 'twitter',
    link: 'https://www.twitter.com',
  },
  {
    icon: 'instagram',
    link: 'https://www.instagram.com',
  },
];

const IndividualTeacher = (props: Props) => {
  return (
    <div className="profile-card">
      <div className="relative w-40 mx-auto aspect-square rounded-full overflow-hidden">
        <Image src={'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg'} alt="alt text for the broken image" fill />
      </div>
      <div>
        <Link href={'#'} className='w-full !no-underline'>
          <div className='mx-auto flex flex-col md:flex-row md:gap-0 md:justify-between md:w-full md:place-self-start gap-2 mb-5'>
            <h4 className='grid place-content-center text-xl md:text-2xl hover:text-primary'>Sophie Moore</h4>
            <span className='chip chip--primary max-w-max !py-2 px-5 md:grid mx-auto md:mx-0 md:place-content-end '>Design</span>
          </div>
          <p className='!text-center m-0 md:!text-left mb-4 md:mb-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex harum ea optio qui, ducimus corporis neque. Ducimus deserunt voluptas et praesentium veniam omnis, nostrum consequatur.</p>

        </Link>
        <div className="flex items-center justify-center gap-4 w-full md:justify-start">{data.map((icon) => (
          <span className="max-w-max rounded-full bg-neutral-500 p-2 hover:bg-primary">
            <Link key={icon.icon} href={icon.link} target="_blank">
              <Icon name={icon.icon} height={20} width={20} />
            </Link>
          </span>
        ))}</div>
      </div>
    </div>
  );
};

export default IndividualTeacher;
