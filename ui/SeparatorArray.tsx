import YellowSvg from '@/public/icons/yellow.svg';
import PinkSvg from '@/public/icons/pinkarrow.svg';
import BlueSvg from '@/public/icons/blue.svg';

type Props = {};

const SeparatorArray = (props: Props) => {
  return (
    <div className="absolute -bottom-[84px] w-full">
      {/* <YellowSvg height={160} width={77} className="mx-auto" /> */}
      {/* <PinkSvg height={160} width={77} className="mx-auto" /> */}
      <BlueSvg className="mx-auto h-[120px] w-11 md:h-[173px] md:w-[65px] lg:h-[206px] lg:w-[77px] " />
    </div>
  );
};

export default SeparatorArray;
