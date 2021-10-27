import React, { Fragment } from 'react';
import Tip from '../../components/tip';
import PersonalUseImg from './personal-use.png';
import OfflineAccountImg from './offline-account.png';
import TempUsernameImg from './temp-username.png';
import TempPasswordImg from './temp-password.png';

export default function ({ user, company, step }) {
  return (
    <Fragment>
      <h2>
        <span className="step">Step {step}</span>Windows setup
      </h2>
      <ul>
        <li>
          On the following screen, please select{' '}
          <strong>Setup for personal use</strong> and then press{' '}
          <strong>Next</strong>.
        </li>
        <Tip>
          I know it might sound confusing but we will configure your laptop for
          your organization later in the process.
        </Tip>

        <figure>
          <img src={PersonalUseImg} alt="Select region" />
          <figcaption>Select region screen.</figcaption>
        </figure>
        <li>
          Please select your keyboard layout from the list and press{' '}
          <strong>Yes</strong>.
        </li>
        <figure>
          <img src={OfflineAccountImg} alt="Select keyboard layout" />
          <figcaption>Select your keyboard layout.</figcaption>
        </figure>
        <li>
          Please select your keyboard layout from the list and press{' '}
          <strong>Yes</strong>.
        </li>
        <figure>
          <img src={TempUsernameImg} alt="Select keyboard layout" />
          <figcaption>Select your keyboard layout.</figcaption>
        </figure>
        <li>
          Please select your keyboard layout from the list and press{' '}
          <strong>Yes</strong>.
        </li>
        <figure>
          <img src={TempPasswordImg} alt="Select keyboard layout" />
          <figcaption>Select your keyboard layout.</figcaption>
        </figure>
      </ul>
    </Fragment>
  );
}
