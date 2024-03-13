import '@/styles/card.css';
import '@/styles/actionBar.css';
import Image from 'next/image';
import format from 'date-fns/format';

type Props = {};

const avatarData = {
  id: '1',
  name: 'Kathie Crol',
  url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg',
  date: '1 September, 2022',
};
const ActionBar = ({ data }: Props) => {
  const { attributes } = data?.data;
  const { firstName, lastName, publishedAt, avatar } = attributes;
  return (
    <div className="actionbar">
      <div className="flex items-center gap-3">
        <div className="actionbar__avatar">
          <Image
            fill
            src={`${
              avatar.data ? avatar.data.attributes.url : avatarData.url
            }?tr=ar-1-1`}
            alt={avatarData.name || avatar}
            title={avatarData.name || avatar}
            sizes="(max-width: 1024px) 100vw,
            560px"
          />
        </div>
        <span>
          <h3 className="!mb-0">{`${firstName} ${lastName}`}</h3>
          <time>{format(new Date(publishedAt), 'MMMM d, yyyy')}</time>
        </span>
      </div>
    </div>
  );
};

export default ActionBar;
