import React from 'react';
import { ComponentCommonPrice } from 'types/types';
export const PriceSkeleton = () => {
  return (
    <div>
      <span className="font-cursive">5,000</span>
      <span className="!mb-0 font-cursive md:!mb-4">Month</span>
    </div>
  );
};
type Props = {
  price: ComponentCommonPrice;
};

const Price = ({
  price: { format, price, currency, unit, description },
}: Props) => {
  return (
    <div>
      <h2 className="!mb-0 text-2xl md:text-4xl">{`${new Intl.NumberFormat(
        format?.replace('_', '-'),
        {
          style: 'currency',
          currency: currency,
          minimumFractionDigits: 0,
        },
      ).format(price)}/${unit}`}</h2>
      <p className="!mb-0 md:!mb-4">{description}</p>
    </div>
  );
};

export default Price;
