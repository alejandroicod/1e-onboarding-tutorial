import React, { Fragment } from 'react';
import OnboardingImg from './images/welcome-pc.png';
import Tip from '../../components/tip';

export default function ({ user, company, step }) {
  return (
    <Fragment>
      <h2>Congratulations!</h2>
      <Tip>
        Well done! You have completed the onboarding of your device. You should
        be proud of yourself!
      </Tip>
      <p>
        Your laptop is now ready for work. You can now close this tutorial and
        enjoy your device.
      </p>
      <figure>
        <img src={OnboardingImg} alt="New corporate device." />
        <figcaption>New corporate device.</figcaption>
      </figure>
    </Fragment>
  );
}
