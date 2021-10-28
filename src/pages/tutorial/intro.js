import React, { Fragment } from 'react';
import Tip from '../../components/tip';
import OnboardingImg from './images/welcome-pc.png';

export default function ({ user, company, page, totalSteps }) {
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
        You must have landed on this page because you have received an{' '}
        <strong>Onboarding email</strong> and a new laptop from your employer.
      </p>
      <p>
        Please keep the email at hand and don’t delete it. It contains your
        personal link to the <strong>One-Click Installer</strong> that you are
        going to need later in the process.
      </p>
      <p>
        This tutorial will guide you through the onboarding process of your new
        device. Excited?
      </p>
      <figure>
        <img src={OnboardingImg} alt="New laptop to be onboarded." />
        <figcaption>New laptop to be onboarded.</figcaption>
      </figure>
      <p>
        This process will transform your new laptop into a{' '}
        <strong>Corporate Device</strong>, managed by your employer, and with
        all the software you need for work.{' '}
      </p>
      <p>
        It is going to be a smooth process that will take up to a couple of
        hours but it will only require a few minutes of your time across{' '}
        <strong>{totalSteps - 1} easy steps</strong>.
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
