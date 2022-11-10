'use client';

// const SkeletonCard = () => (
//   <div className={styles.skeleton}>
//     <div className={styles['skeleton-img']} />
//     <div className={styles['skeleton-btn']} />
//     <div className={styles['skeleton-line-one']} />
//     <div className={styles['skeleton-line-two']} />
//   </div>
// );

export default function Page() {
  return (
    <div className="space-y-4">
      <div className="text-zinc-500 text-xl font-medium">
        Styled with CSS Modules
      </div>
      {/* <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard /> */}
    </div>
  );
}
