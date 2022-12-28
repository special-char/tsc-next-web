import '@/styles/price.css';
import Link from 'next/link';
// import { ComponentCommonPrice } from 'types/types';
import Price from '@/ui/Price';
import CoursesPrice from '@/ui/CoursesPrice';

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