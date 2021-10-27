import React, { Fragment } from 'react';
import Tip from '../../components/tip';
import WifiListImg from './wifi-list.jpeg';
import WifiOnImg from './wifi-on.jpeg';
import WifiPasswordImg from './wifi-password.jpeg';
import CortanaImg from './cortana.png';
import DesktopImg from './desktop.png';
import TempUsernameImg from './temp-username.png';
import TempPasswordImg from './temp-password.png';

export default function ({ user, company, step }) {
  return (
    <Fragment>
      <h2>
        <span className="step">Step {step}</span>Internet connection
      </h2>
      <ul>
        <li>It is time for you to connect to the Internet.</li>
        <li>
          Click the Network icon in the bottom-right corner of the taskbar.
        </li>
        <li>Select the wireless network to connect from the list.</li>
        <figure>
          <img src={WifiListImg} alt="Type a username." />
          <figcaption>List of available Wi-Fi networks.</figcaption>
        </figure>
        <Tip>
          If you do not see any Wi-Fi network in the list, click the Wi-Fi
          button to turn on the adapter.
        </Tip>
        <figure>
          <img src={WifiOnImg} alt="Wi-Fi adaptor enabled." />
          <figcaption>Make sure the Wi-Fi adaptor is enabled.</figcaption>
        </figure>
        <li>Confirm the network security key (password).</li>
        <figure>
          <img src={WifiPasswordImg} alt="Type a username." />
          <figcaption>Activity history.</figcaption>
        </figure>
        <li>Click the Next button.</li>
        <Tip>
          If you are experiencing any issues while trying to connect to the
          Internet, try this tutorial from Microsoft{' '}
          <a
            href="https://support.microsoft.com/en-us/windows/connect-to-a-wi-fi-network-in-windows-1f881677-b569-0cd5-010d-e3cd3579d263#WindowsVersion=Windows_10"
            target="_blank"
          >
            here
          </a>
          .
        </Tip>
      </ul>
    </Fragment>
  );
}
