const getLocalStorageSelectedNews = () => {
  const localSelectedNews = localStorage.getItem("localStorageSelectedNews");
  return localSelectedNews !== undefined && localSelectedNews !== null
    ? localSelectedNews
    : "angular";
};

export default getLocalStorageSelectedNews;
