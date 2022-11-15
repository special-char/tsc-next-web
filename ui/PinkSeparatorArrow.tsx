import PinkSvg from '@/public/icons/pinkarrow.svg';

type Props = {};

const PinkSeparatorArrow = (props: Props) => {
  return (
    <div className="absolute -bottom-[84px]  w-full">
      <PinkSvg height={160} width={77} className="z-10 mx-auto" />
    </div>
  );
};

export default PinkSeparatorArrow;
