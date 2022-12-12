import '@/styles/card.css';
import '@/styles/actionBar.css';

type Props = {};

const avatarData = [
  {
    id: '1',
    name: 'Kathie Crol',
    url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg',
    date: '1 September, 2022',
  },
];
const ActionBar = (props: Props) => {
  return (
    <div className="actionbar">
      {avatarData.map((avatarData) => (
        <>
          <div className="actionbar__avatar">
            <img src={avatarData.url} alt={avatarData.name} />
          </div>
          <div className="action__data">
            <h3>{avatarData.name}</h3>
            <time>{avatarData.date}</time>
          </div>
        </>
      ))}
    </div>
  );
};

export default ActionBar;
