const setLocalStorageSelectedNews = (opt: string) => {
  localStorage.setItem("localStorageSelectedNews", opt);
  console.log("localStorageSelectedNews" + opt);
};

export default setLocalStorageSelectedNews;
