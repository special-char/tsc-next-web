import { DefaultTags } from '@/ui/DefaultTags';

export default async function Head() {
  const category = {
    name: 'hello',
  };

  const title = `${category?.name} | Next.js App Directory`;
  const description = `The best fictional ${category?.name} money can buy.`;

  return (
    <>
      <DefaultTags />
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  );
}
