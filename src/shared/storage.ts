const storageKey = "THEME";

export const fetchThemeSetting = (setTo:boolean) => {
  const setting = localStorage.getItem(storageKey);
  if (setting !== undefined && setting !== null) {
    return setting === "dark";
  }
  return setTo;
};

export const updateThemeSetting = (darkMode: boolean) => {
  localStorage.setItem(storageKey, darkMode ? "dark" : "light");
};
