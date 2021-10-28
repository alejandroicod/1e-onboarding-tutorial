import React, { Fragment } from 'react';
import Tip from '../../components/tip';
import CorporateLoginImg from './images/corporate-login.png';
import CorporatePasswordImg from './images/corporate-password.png';

export default function ({ user, company, step }) {
  return (
    <Fragment>
      <h2>
        <span className="step">Step {step}</span>Login to your corporate device
      </h2>
      <ul>
        <Tip>
          Hey, congratulations for getting this far! Your laptop is now a
          corporate device and it needs you to login using your company
          credentials.
        </Tip>
        <li>
          By now, you should have received an email asking you to login to your
          device.
        </li>
        <li>
          Please proceed by typing your company email address and clicking on{' '}
          <strong>Next</strong>.
        </li>
        <figure>
          <img
            src={CorporateLoginImg}
            alt="Type your corporate email address."
          />
          <figcaption>Type your email address.</figcaption>
        </figure>
        <li>
          It is now time for your corporate password and click{' '}
          <strong>Next</strong>.
        </li>
        <figure>
          <img src={CorporatePasswordImg} alt="Type your corporate password." />
          <figcaption>Type your corporate password.</figcaption>
        </figure>
      </ul>
    </Fragment>
  );
}
