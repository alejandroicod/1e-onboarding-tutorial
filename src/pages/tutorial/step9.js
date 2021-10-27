import React, { Fragment } from 'react';
import Tip from '../../components/tip';
import CorporateLoginImg from './corporate-login.png';
import TempPasswordImg from './temp-password.png';

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
          By this time, you should have received an email asking you to login to
          your device. Please proceed by typing your company email address and
          clicking on <strong>Next</strong>.
        </li>
        <figure>
          <img src={CorporateLoginImg} alt="Type a username." />
          <figcaption>Activity history.</figcaption>
        </figure>
      </ul>
    </Fragment>
  );
}
