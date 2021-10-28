import React, { Fragment } from 'react';
import SelectRegionImg from './images/select-region.png';
import SelectKeyboardImg from './images/select-keyboard.png';

export default function ({ user, company, step }) {
  return (
    <Fragment>
      <h2>
        <span className="step">Step {step}</span>Basic Windows configuration
      </h2>
      <ul>
        <li>
          Please select your region from the list and press <strong>Yes</strong>
          .
        </li>
        <figure>
          <img src={SelectRegionImg} alt="Select region" />
          <figcaption>Select region screen.</figcaption>
        </figure>
        <li>
          Please select your keyboard layout from the list and press{' '}
          <strong>Yes</strong>.
        </li>
        <figure>
          <img src={SelectKeyboardImg} alt="Select keyboard layout" />
          <figcaption>Select your keyboard layout.</figcaption>
        </figure>
      </ul>
    </Fragment>
  );
}
