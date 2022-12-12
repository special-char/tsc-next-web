import second from '@/styles/newsletter.css';

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
      <button className="btn btn--primary newsletter__btn">Subscribe</button>
    </div>
  );
};

export default Newsletter;
