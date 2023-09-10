export const checkUserAuthentication = () => {
  const userToken = Boolean(localStorage.getItem("isUserAuthenticated"));

  return !!userToken;
};
