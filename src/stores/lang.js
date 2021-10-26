import Terms from "../locales";

const LANG_CHANGE_EVENT = "LANG_CHANGE_EVENT";
let event = new Event("LANG");
event.initEvent(LANG_CHANGE_EVENT, true, true);

const DEFAULT_LANGUAGE = "en";

const subscribe = function (callback) {
  document.addEventListener(LANG_CHANGE_EVENT, callback, false);
};

const unsubscribe = function (callback) {
  document.removeEventListener(LANG_CHANGE_EVENT, callback, false);
};

const setLocale = function (language) {
  if (language && getLocale() != language) {
    localStorage.setItem("locale", language);
    document.dispatchEvent(event);
  }
};

const getLocale = function () {
  let lang = localStorage.getItem("locale") || DEFAULT_LANGUAGE;
  return Terms[lang] ? lang : DEFAULT_LANGUAGE;
};

const getLocales = function () {
  const activeLocale = getLocale();
  return Object.keys(Terms).map((locale) => {
    return {
      key: locale,
      name: locale.toUpperCase(),
      selected: locale == activeLocale
    };
  });
};

const getTerm = function (term) {
  let lang = getLocale();
  return Terms[lang][term] || Terms[DEFAULT_LANGUAGE][term];
};

export default {
  subscribe,
  unsubscribe,
  getLocale,
  getLocales,
  setLocale,
  getTerm,
};
