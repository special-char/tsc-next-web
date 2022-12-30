import '@/styles/price.css';
import Link from 'next/link';
// import { ComponentCommonPrice } from 'types/types';
import Price, { PriceSkeleton } from '@/ui/Price';
import CoursesPrice, { CoursesPriceSkeleton } from '@/ui/CoursesPrice';
export const PriceCardSkeleton = () => {
  return (
    <aside className="price animate-pulse">
      <div className="price__body">
        <PriceSkeleton />

        <div className="btn btn--secondary btn--small font-cursive">
          Register
        </div>
        <div className="btn btn--primary btn--small font-cursive">
          Download Brochure
        </div>
      </div>
      <CoursesPriceSkeleton />
    </aside>
  );
};
type Props = {
  price: any;
};

const PriceCard = ({ price }: Props) => {
  return (
    <aside className="price">
      <div className="price__body">
        <Price price={price} />

        <Link href="/" className="btn btn--secondary btn--small">
          Register
        </Link>
        <Link href="/" className="btn btn--primary btn--small">
          Download Brochure
        </Link>
      </div>
      <CoursesPrice />
    </aside>
  );
};

export default PriceCard;
