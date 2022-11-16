import '@/styles/card.css';

type Props = {};

const avatarData = [
  {
    name: 'Kathie Crol',
    url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg',
  },
  {
    name: 'Kathie Crol',
    url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg',
  },
  {
    name: 'Kathie Crol',
    url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg',
  },
];
const ActionBar = (props: Props) => {
  return (
    <div className="card__actions">
      {avatarData.map((avatarData) => (
        <>
          <div className="card__avatar placeholder w-16">
            <img src={avatarData.url} alt={avatarData.name} />
          </div>
          <h3>{avatarData.name}</h3>
        </>
      ))}
    </div>
  );
};

export default ActionBar;
