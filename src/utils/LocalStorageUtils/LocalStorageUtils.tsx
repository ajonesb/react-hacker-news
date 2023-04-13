export const getLocalStorageFavs = (id: string) => {
  const localFav = localStorage.getItem("localStorageFavs_" + id);
  return localFav !== undefined && localFav !== null ? localFav : "false";
};

export const getLocalStorageSelectedNews = () => {
  const localSelectedNews = localStorage.getItem("localStorageSelectedNews");
  return localSelectedNews !== undefined && localSelectedNews !== null
    ? localSelectedNews
    : "angular";
};

export const setLocalStorageSelectedNews = (opt: string) => {
  localStorage.setItem("localStorageSelectedNews", opt);
  console.log("localStorageSelectedNews" + opt);
};
