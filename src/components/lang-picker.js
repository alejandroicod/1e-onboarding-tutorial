import React from "react";
import Lang from "../stores/lang";

class LangPicker extends React.Component {
  getLocales() {
    let locales = Lang.getLocales();
    return locales.map((locale) => {
      return (
        <span
          key={locale.key}
          className={locale.selected ? `selected` : ""}
          onClick={() => Lang.setLocale(locale.key)}
        >
          {locale.name}
        </span>
      );
    });
  }

  render() {
    return (
      <div className="lang-picker" {...this.props}>
        {this.getLocales()}
      </div>
    );
  }
}

export default LangPicker;
