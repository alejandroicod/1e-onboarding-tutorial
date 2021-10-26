import React, { Fragment } from 'react';
import OnboardingImg from './welcome-pc.png';

export default function ({ user, company, step }) {
  return (
    <Fragment>
      <h2>Congratulations!</h2>
      <figure>
        <img src={OnboardingImg} alt="New laptop to be onboarded." />
        <figcaption>New laptop to be onboarded.</figcaption>
      </figure>
    </Fragment>
  );
}
