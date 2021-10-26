import React from "react";
import CookieConsent from "react-cookie-consent";

export default class Cookies extends React.Component {
  render() {
    return (
      <CookieConsent
        location="bottom"
        buttonText="Entendido"
        cookieName="cookieConsent"
        expires={150}
      >
        Utilizamos cookies de terceros para mejorar tu experience en la web. Si
        contintinúas navegando aceptas su uso.
        <span>
          <a href="/#/policy">Política de Privacidad</a>
        </span>
      </CookieConsent>
    );
  }
}
