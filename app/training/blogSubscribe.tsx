import '@/styles/blogSubscribe.css';

type Props = {};

const BlogSubscribe = (props: Props) => {
  return (
    <section className="blogSubscribe ">
      <div className="blogSubscribe__body">
        <div className="blogSubscribe__content relative">
          <h2 className="blogSubscribe__title">
            Subscribe to our weekly newsletter today!
          </h2>
          <div className="blogSubscribe__newsletter">
            <input
              className="blogSubscribe__newsletter__input"
              placeholder="Enter your email"
              type="text"
              name=""
              id=""
            />
            <button className="btn btn--primary blogSubscribe__newsletter__btn">
              Subscribe
            </button>
          </div>
          <div className="absolute z-10  rounded-full bg-secondary2 md:-top-80  md:-right-52 md:h-[400px] md:w-[400px] lg:-top-60  lg:-right-20"></div>
          <div className="absolute -left-64 -bottom-64 z-10 h-[380px]  w-[380px] rounded-full bg-secondary3 md:-left-52 lg:-bottom-56 lg:-left-32"></div>
        </div>
      </div>
    </section>
  );
};

export default BlogSubscribe;