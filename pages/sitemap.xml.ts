import type { GetServerSideProps } from 'next';

export const Sitemap = (): void => {};

export default Sitemap;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const request = await fetch(process.env.SITEMAP_URL as string);
  const body = await request.text();

  context.res.setHeader('Content-Type', 'application/xml');
  context.res.write(body);
  context.res.end();

  return { props: {} };
};
