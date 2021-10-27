import React, { Fragment } from 'react';
import OnboardingImg from './welcome-pc.png';

export default function ({ user, company, step }) {
  return (
    <Fragment>
      <h2>Congratulations!</h2>
      <p>You can now close this tutorial and enjoy your device.</p>
      <figure>
        <img src={OnboardingImg} alt="New corporate device." />
        <figcaption>New corporate device.</figcaption>
      </figure>
    </Fragment>
  );
}
