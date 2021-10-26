import React from "react";
import Lang from "../stores/lang";

class BasePage extends React.Component {
  constructor() {
    super();
    this.state = {
      locale: Lang.getLocale(),
    };
    Lang.subscribe(this.onLocaleChange.bind(this));
  }

  UNSAFE_componentWillMount() {
    const { match } = this.props;
    if (!match || !match.params || !match.params.locale) return;
    Lang.setLocale(this.props.match.params.locale);
  }

  componentWillUnmount() {
    Lang.unsubscribe(this.onLocaleChange.bind(this));
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { match } = this.props;
    if (!match || !match.params || !match.params.locale) return;
    Lang.setLocale(nextProps.match.params.locale);
  }

  onLocaleChange() {
    this.setState({ locale: Lang.getLocale() });
  }
}

export default BasePage;
