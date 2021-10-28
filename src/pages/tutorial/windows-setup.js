import React, { Fragment } from 'react';
import Tip from '../../components/tip';
import PersonalUseImg from './images/personal-use.png';
import OfflineAccountImg from './images/offline-account.png';

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
          <figcaption>Set up for personal use.</figcaption>
        </figure>
        <li>
          On the following scree, click <strong>Offline account</strong> at the
          bottom left.
        </li>
        <figure>
          <img src={OfflineAccountImg} alt="Select keyboard layout" />
          <figcaption>Set up using an offline account.</figcaption>
        </figure>
      </ul>
    </Fragment>
  );
}
