import '@/styles/testimonial.css';
import Image from 'next/image';
import Rating from '@/ui/Rating';
import Carousal from '@/ui/Carousal';
import { getTestimonialData } from '@/lib/getTestimonials';
import { HomeTestimonial, Testimonial, UploadFile } from 'types/types';
import Link from 'next/link';
import Button from '@/ui/Button';

export const TestimonialSkeleton = () => {
  return (
    <section id="Testimonial" className="testimonial animate-pulse">
      <h2 className="testimonial__header font-cursive">
        What our students say about us
      </h2>
      <Carousal>
        {[1, 2, 3].map((testimonial: any) => {
          //   const { avatar, rating, quote, name, designation, company } =
          //     testimonial.attributes as Testimonial;
          //   const { url, alternativeText } = avatar?.data
          //     ?.attributes as UploadFile;
          return (
            <div
              className="testimonial__card card"
              key={testimonial.id}
              style={{
                maxWidth: 768,
              }}
            >
              <div className="card__image testimonial__card__image">
                <div></div>
              </div>
              <div className="card__body testimonial__card__body">
                <div></div>
                <p className="card__desc font-cursive">
                  "Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint"
                </p>
                <h4 className="font-cursive">Katherine Cutts</h4>
                <p className="card__desc font-cursive">
                  Junior Designer at Facebook
                </p>
              </div>
            </div>
          );
        })}
      </Carousal>
      <div className="testimonial__content">
        {[1, 2, 3, 4].map((number) => (
          <div>
            <h3 className="testimonial__title font-cursive">100,000+</h3>
            <p className="font-cursive">Five-star course reviews</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="btn btn--primary font-cursive">Explore Courses</div>
      </div>
    </section>
  );
};

const Testimonial = async () => {
  const testimonialsData = await getTestimonialData();

  if (!testimonialsData) return null;

  const testimonialsInfo = testimonialsData.data.data.testimonials.data;
  const { title, numbers, btn } = testimonialsData.data.data.homeTestimonial
    .data?.attributes as HomeTestimonial;

  return (
    <section id="Testimonial" className="testimonial">
      <h2 className="testimonial__header">{title}</h2>
      <Carousal>
        {testimonialsInfo.map((testimonial: any) => {
          const { avatar, rating, quote, name, designation, company } =
            testimonial.attributes as Testimonial;
          const { url, alternativeText } = avatar?.data
            ?.attributes as UploadFile;
          return (
            <div
              className="testimonial__card card"
              style={{
                maxWidth: 768,
              }}
              key={testimonial.id}
            >
              <div className="card__image testimonial__card__image">
                <Image src={url} alt={`${alternativeText}`} fill />
              </div>
              <div className="card__body testimonial__card__body">
                <Rating rate={rating} />
                <p className="card__desc">{`"${quote}"`}</p>
                <h4>{name}</h4>
                <p className="card__desc mt-2">{`${designation} at ${company}`}</p>
              </div>
            </div>
          );
        })}
      </Carousal>
      <div className="testimonial__content">
        {numbers?.map((number) => (
          <div>
            <h3 className="testimonial__title">{number?.title}</h3>
            <p className="text-center">{number?.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Button as={Link} href={`{btn?.url}`} variant="primary">
          {btn?.text}
        </Button>
      </div>
    </section>
  );
};
export default Testimonial;
