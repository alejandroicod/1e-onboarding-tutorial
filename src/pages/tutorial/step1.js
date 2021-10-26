import React, { Fragment } from 'react';

import UnboxingNewLaptopImg from './unboxing-new-laptop.jpeg';

export default function ({ user, company, step }) {
  return (
    <Fragment>
      <h2>
        <span className="step">Step {step}</span>Unbox your device
      </h2>

      <ul>
        <li>
          It is time for you to open the box and carefully take the laptop out.
        </li>
      </ul>
      <ul>
        <figure>
          <img src={UnboxingNewLaptopImg} alt="Unboxing new laptop" />
          <figcaption>Unboxing new laptop.</figcaption>
        </figure>
        <li>
          Before you do so, make sure you have a clear surface where you can
          place the laptop for a couple of hours.
        </li>
        <li>Remove any plastic packaging or stickers.</li>
        <li>
          After unboxing the laptop, assemble the Power Adapter. Connect it to a
          power source and then plug it into the laptop.
        </li>
      </ul>
    </Fragment>
  );
}
