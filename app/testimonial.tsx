import '@/styles/testimonial.css';
import Image from 'next/image';
import Rating from '@/ui/Rating';
import Carousal from '@/ui/Carousal';
import { getTestimonialData } from '@/lib/getTestimonials';
import { HomeTestimonial, Testimonial, UploadFile } from 'types/types';
import Link from 'next/link';

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
            <div className="testimonial__card card" key={testimonial.id}>
              <div className="card__image testimonial__card__image">
                <Image src={url} alt={`${alternativeText}`} fill />
              </div>
              <div className="card__body testimonial__card__body">
                <Rating rate={rating} />
                <p className="card__desc">{`"${quote}"`}</p>
                <h4>{name}</h4>
                <p className="card__desc">{`${designation} at ${company}`}</p>
              </div>
            </div>
          );
        })}
      </Carousal>
      <div className="testimonial__content">
        {numbers?.map((number) => (
          <div>
            <h3 className="testimonial__title">{number?.title}</h3>
            <p>{number?.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link href={`{btn?.url}`} className="btn btn--primary">
          {btn?.text}
        </Link>
      </div>
    </section>
  );
};
export default Testimonial;
