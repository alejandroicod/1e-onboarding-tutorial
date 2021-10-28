import React, { Fragment } from 'react';
import Tip from '../../components/tip';
import PersonalUseImg from './images/personal-use.png';
import OfflineAccountImg from './images/offline-account.png';

export default function ({ user, company, step }) {
  return (
    <Fragment>
      <h2>
        <span className="step">Step {step}</span>Software installation
      </h2>
      <ul>
        <li>
          All the software you need will be now downloaded and installed on your
          laptop, so please, don't switch it off until you receive the final
          confirmation.
        </li>
        <li>
          This process might take a couple of hours (it depends on the number of
          software titles to be installed, its size and the bandwidth of your
          internet connection).
        </li>
      </ul>
    </Fragment>
  );
}
