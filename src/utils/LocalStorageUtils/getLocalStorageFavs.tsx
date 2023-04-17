const getLocalStorageFavs = (id: string) => {
  const localFav = localStorage.getItem("localStorageFavs_" + id);
  return localFav !== undefined && localFav !== null ? localFav : "false";
};

export default getLocalStorageFavs;
