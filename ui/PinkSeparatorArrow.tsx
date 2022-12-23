import PinkSvg from '@/public/icons/pinkarrow.svg';

type Props = {};

const PinkSeparatorArrow = (props: Props) => {
  return (
    <div className="absolute -bottom-[78px] w-full md:-bottom-24 lg:-bottom-28">
      <PinkSvg className="z-10 mx-auto h-[120px] w-11 md:h-[173px] md:w-[65px] lg:h-[206px] lg:w-[77px]" />
    </div>
  );
};

export default PinkSeparatorArrow;
