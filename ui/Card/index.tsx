import styles from './styles.module.css';
import Image, { ImageProps } from 'next/image';

type Props = {
  image: ImageProps;
};

export default function Card({ image }: Props) {
  return (
    <div className={styles.card}>
      <Image {...image} />
    </div>
  );
}
