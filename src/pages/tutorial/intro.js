import React, { Fragment } from 'react';
import Tip from '../../components/tip';
import OnboardingImg from './welcome-pc.png';

export default function ({ user, company, page }) {
  return (
    <Fragment>
      <h2>Hi {user || 'there'},</h2>
      <Tip>
        Welcome to the tutorial! I am going to be your assistant during this
        process. I might suggest you tips or explanations along the process for
        a better understanding. Remember that if you ever need more help, you
        can use the <strong>Need Help?</strong> button at the bottom left of the
        screen.
      </Tip>
      <p>
        This tutorial will guide you through the onboarding process of your
        device that will transform it into a <strong>Corporate Device</strong>,
        managed by your employer. It is going to be a simple and smooth task
        that will take you a couple of clicks.
      </p>
      <figure>
        <img src={OnboardingImg} alt="New laptop to be onboarded." />
        <figcaption>New laptop to be onboarded.</figcaption>
      </figure>

      <p>
        You must have landed on this page because you have received an
        onboarding email. That's great!
      </p>
      <p>
        Please keep it at hand and don’t delete it. It contains your personal
        link to the <strong>One-Click Installer</strong> that you are going to
        need later in the process.
      </p>
      <p>
        Before you start, make sure you have access to a stable Internet
        connection. The success of this process relies on your connectivity.
      </p>
      <p>
        Once ready, please click on the <strong>Next</strong> button below to
        start with the process.
      </p>
    </Fragment>
  );
}
