import React, { Fragment } from 'react';
import SwitchOnImg from './images/switch-on.png';
import WindowsLoadingImg from './images/windows-loading.png';

export default function ({ user, company, step }) {
  return (
    <Fragment>
      <h2>
        <span className="step">Step {step}</span>Switch on your laptop
      </h2>
      <ul>
        <li>It is now time to press the power button.</li>
        <figure>
          <img src={SwitchOnImg} alt="Switch on laptop" />
          <figcaption>Switch on laptop.</figcaption>
        </figure>
        <li>
          Your laptop will start loading and in a couple of minutes Microsoft
          Windows will be ready. You will soon see a blue screen like this.
        </li>
        <figure>
          <img src={WindowsLoadingImg} alt="Windows loading page" />
          <figcaption>Windows loading page.</figcaption>
        </figure>
      </ul>
    </Fragment>
  );
}
