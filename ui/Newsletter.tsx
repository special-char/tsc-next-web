import second from '@/styles/newsletter.css';
import Button from './Button';

const Newsletter = () => {
  return (
    <div className="newsletter">
      <input
        className="newsletter__input"
        placeholder="Enter your email"
        type="text"
        name=""
        id=""
      />
      <Button as="button" variant="primary" className="newsletter__btn">
        Subscribe
      </Button>
    </div>
  );
};

export default Newsletter;
