import React, { Fragment } from 'react';
import SwitchOnImg from './switch-on.png';

export default function ({ user, company, step }) {
  return (
    <Fragment>
      <h2>
        <span className="step">Step {step}</span>Basic Windows configuration
      </h2>
      <ul>
        <li>It is now time to switch on the laptop.</li>
        <figure>
          <img src={SwitchOnImg} alt="Switch on laptop" />
          <figcaption>Switch on laptop.</figcaption>
        </figure>
        <li>
          Your laptop will start loading and in a couple of minutes Microsoft
          Windows will be ready.
        </li>
      </ul>
    </Fragment>
  );
}
