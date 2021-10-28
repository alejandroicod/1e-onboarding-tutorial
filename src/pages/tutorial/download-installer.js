import React, { Fragment } from 'react';
import Tip from '../../components/tip';

export default function ({ user, company, step }) {
  return (
    <Fragment>
      <h2>
        <span className="step">Step {step}</span>Download One-Click Installer
      </h2>
      <ul>
        <li>
          Now it is time for you to open your <strong>Onboarding Email</strong>{' '}
          again from the laptop. For that, you can use{' '}
          <strong>Microsoft Edge</strong> browser and navigate to your email
          provider website, i.e. www.gmail.com or www.outlook.com.
        </li>
        <li>
          Locate the <strong>Download One-Click installer</strong> link in the
          email and click on it (from your laptop). Inmediatelly after that, the
          download should start.
        </li>
        <li>
          Once downloaded, double click on the file. The installation will start
          and a confirmation dialog will be prompted before proceeding.
        </li>
        <li>
          Click on the <strong>Proceed</strong> button and let your laptop do
          its magic.
        </li>
        <Tip>
          Great! Your laptop is now on its way to becoming a{' '}
          <strong>Corporate Device</strong>. This process might take up to 30
          minutes and during this time, it will reboot a couple of times. Don't
          worry, go for a coffee and relax, you will receive an email once the
          device requires your attention again.
        </Tip>
      </ul>
    </Fragment>
  );
}
