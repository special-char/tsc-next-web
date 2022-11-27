import YellowSvg from '@/public/icons/yellow.svg';
import PinkSvg from '@/public/icons/pinkarrow.svg';
import BlueSvg from '@/public/icons/blue.svg';

type Props = {};

const SeparatorArray = (props: Props) => {
  return (
    <div className="absolute -bottom-[84px] w-full">
      {/* <YellowSvg height={160} width={77} className="mx-auto" />
      <PinkSvg height={160} width={77} className="mx-auto" /> */}
      <BlueSvg height={160} width={77} className="mx-auto" />
    </div>
  );
};

export default SeparatorArray;
