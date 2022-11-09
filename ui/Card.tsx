import Image, { ImageProps } from 'next/image';

type Props = {
  image: ImageProps;
};

export default function Card({ image }: Props) {
  return (
    <div>
      <Image {...image} />
    </div>
  );
}
