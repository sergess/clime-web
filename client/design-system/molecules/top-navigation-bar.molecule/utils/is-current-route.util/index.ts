import toLower from 'ramda/src/toLower';

export const isCurrentRoute = (
  actualRoute: string,
  routeToMath: string
): boolean => toLower(actualRoute) === toLower(encodeURI(routeToMath));

export default isCurrentRoute;
