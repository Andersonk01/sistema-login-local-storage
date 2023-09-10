import { APP_ROUTES } from "@/constants/app-routes";

/**
 * @param asPath - The path to check
 * @return {boolean} - True if the path is public, false otherwise
 */

export const checkRoute = (asPath: string): boolean => {
  const appPublicRoutes = Object.values(APP_ROUTES.public);
  return appPublicRoutes.includes(asPath);
};
