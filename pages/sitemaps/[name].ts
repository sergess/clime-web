import type { GetServerSideProps } from 'next';

export const Sitemap = (): void => {};

export default Sitemap;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const request = await fetch(
    `${process.env.SITEMAP_BASE_URL}/${context?.query?.name}`
  );
  const body = await request.text();

  context.res.setHeader('Content-Type', 'application/xml');
  context.res.setHeader('Cache-Control', 'public, max-age=86400'); // 24 hours
  context.res.write(body);
  context.res.end();

  return { props: {} };
};
