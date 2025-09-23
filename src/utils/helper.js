import i18n from "../i18n";

export const generateLink = (path) => {
  const lang = i18n.language.toLowerCase();
  if (lang === "en") {
    return `/${path}`;
  } else {
    return `/${lang}/${path}`;
  }
};
