const storageKey = "THEME";

export const fetchThemeSetting = () => {
  const setting = localStorage.getItem(storageKey);
  if (setting !== undefined && setting !== null) {
    return setting === "dark";
  }
  return true;
};

export const updateThemeSetting = (darkMode: boolean) => {
  localStorage.setItem(storageKey, darkMode ? "dark" : "light");
};
