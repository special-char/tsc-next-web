import '@/styles/individualteacher.css';
import Button from '@/ui/Button';
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
      <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-full">
        <Image
          src={
            'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg'
          }
          alt="alt text for the broken image"
          fill
        />
      </div>
      <div>
        <Link href={'#'} className="w-full !no-underline">
          <div className="mx-auto mb-5 flex flex-col gap-2 md:w-full md:flex-row md:justify-between md:gap-0 md:place-self-start">
            <h4 className="grid place-content-center text-xl hover:text-primary md:text-2xl">
              Sophie Moore
            </h4>
            <span className="chip chip--primary mx-auto max-w-max !py-2 px-5 md:mx-0 md:grid md:place-content-end ">
              Design
            </span>
          </div>
          <p className="m-0 mb-4 !text-center md:mb-6 md:!text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex harum
            ea optio qui, ducimus corporis neque. Ducimus deserunt voluptas et
            praesentium veniam omnis, nostrum consequatur.
          </p>
        </Link>
        <div className="flex w-full items-center justify-center gap-4 md:justify-start">
          {data.map((icon) => (
            <span className="max-w-max rounded-full bg-neutral-500 p-2 hover:bg-primary">
              <Button
                as={Link}
                key={icon.icon}
                href={icon.link}
                target="_blank"
              >
                <Icon name={icon.icon} height={20} width={20} />
              </Button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndividualTeacher;
