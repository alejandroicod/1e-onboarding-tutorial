import React, { Fragment } from 'react';
import Tip from '../../components/tip';
import HistoryImg from './images/history.png';
import CortanaImg from './images/cortana.png';
import DesktopImg from './images/desktop.png';

export default function ({ user, company, step }) {
  return (
    <Fragment>
      <h2>
        <span className="step">Step {step}</span>Additional Microsoft features
      </h2>
      <ul>
        <li>
          At the <strong>Activity History</strong> stage, please select{' '}
          <strong>No</strong>.
        </li>
        <figure>
          <img src={HistoryImg} alt="Activity history feature." />
          <figcaption>Activity history.</figcaption>
        </figure>
        <li>
          Select <strong>Decline</strong> for the digital assistant feature.
        </li>
        <figure>
          <img src={CortanaImg} alt="Cortana, the digital assistant." />
          <figcaption>Cortana, the digital assistant.</figcaption>
        </figure>
        <li>
          After a couple of minutes of processing, you should be able to see the
          desktop.
        </li>
        <Tip>Well done! You have completed the initial Windows setup!</Tip>
        <figure>
          <img src={DesktopImg} alt="Device ready." />
          <figcaption>Microsoft Windows dekstop.</figcaption>
        </figure>
      </ul>
    </Fragment>
  );
}
