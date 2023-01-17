import '@/styles/price.css';
import Link from 'next/link';
import Price from '@/ui/Price';
import CoursesPrice from '@/ui/CoursesPrice';
import Register from '@/ui/Register';

type Props = {
  data: any;
};

const PriceCard = ({ data, additionalField }: Props) => {
  const { price, courseFeatures, brochure } = data;
  return (
    <>
      <aside className="price">
        <div className="price__body">
          <Price price={price} />
          <Register
            formId={2}
            btnText="register"
            additionalField={additionalField}
          />
          <Link
            href={brochure?.data.attributes.url}
            className="btn btn--primary btn--small"
            download
          >
            Download Brochure
          </Link>
        </div>
        <CoursesPrice features={courseFeatures} />
      </aside>
    </>
  );
};

export default PriceCard;
