export const getGTMParams = (): Record<string, string | undefined> => {
  if (process.env.NODE_ENV === 'production') {
    return {
      auth: process.env.NEXT_PUBLIC_GTM_PROD_AUTH,
      preview: process.env.NEXT_PUBLIC_GTM_PROD_PREVIEW,
    };
  }

  return {
    auth: process.env.NEXT_PUBLIC_GTM_DEV_AUTH,
    preview: process.env.NEXT_PUBLIC_GTM_DEV_PREVIEW,
  };
};

export default getGTMParams;
