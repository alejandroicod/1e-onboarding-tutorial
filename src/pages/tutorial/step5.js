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
        <span className="step">Step {step}</span>Temporary username and password
      </h2>
      <ul>
        <Tip>
          We are about to create a temporary username and password. Don't worry
          about these details since they will be replaced by your company
          credentials later on.
        </Tip>
        <li>Next, please type your first name.</li>
        <figure>
          <img src={TempUsernameImg} alt="Type a username." />
          <figcaption>Type your first name.</figcaption>
        </figure>
        <li>
          Type a temporary password and click <strong>Next</strong>.
        </li>
        <figure>
          <img src={TempPasswordImg} alt="Temporary password." />
          <figcaption>Temporary password.</figcaption>
        </figure>
      </ul>
    </Fragment>
  );
}
