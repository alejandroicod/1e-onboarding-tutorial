import React, { Fragment } from 'react';
import Tip from '../../components/tip';
import WifiImg from './images/wifi.png';

export default function ({ user, company, step }) {
  return (
    <Fragment>
      <h2>
        <span className="step">Step {step}</span>Internet connection
      </h2>
      <ul>
        <li>It is time for you to connect to the Internet.</li>
        <li>Let your laptop discover all the WiFi networks around you.</li>
        <li>Click on the network you want to connect to.</li>
        <li>
          Introduce the network password and click on <strong>Connect</strong>
        </li>
        <figure>
          <img src={WifiImg} alt="Type a username." />
          <figcaption>List of available Wi-Fi networks.</figcaption>
        </figure>
        <Tip>
          If you detect that the signal power is too low, move closer to the
          Access Point for a better reception.
        </Tip>
      </ul>
    </Fragment>
  );
}
