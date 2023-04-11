export const getLocalStorageFavs = (id) => {
  const localFav = localStorage.getItem("localStorageFavs_" + id);
  return localFav !== undefined && localFav !== null ? localFav : "false";
};

export const getLocalStorageSelectedNews = () => {
  const localSelectedNews = localStorage.getItem("localStorageSelectedNews");
  return localSelectedNews !== undefined && localSelectedNews !== null
    ? localSelectedNews
    : "angular";
};

export const setLocalStorageSelectedNews = (opt) => {
  localStorage.setItem("localStorageSelectedNews", opt);
  console.log("localStorageSelectedNews" + opt);
};
