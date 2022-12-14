import BlueSvg from '@/public/icons/blue.svg';

type Props = {};

const SeparatorArray = (props: Props) => {
  return (
    <div className="absolute -bottom-[84px] w-full">
      <BlueSvg className="mx-auto h-[120px] w-11 md:h-[173px] md:w-[65px] lg:h-[206px] lg:w-[77px] " />
    </div>
  );
};

export default SeparatorArray;
