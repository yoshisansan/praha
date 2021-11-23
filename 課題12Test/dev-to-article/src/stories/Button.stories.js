import { storiesOf } from '@storybook/react';
import React from 'react';
import DuplicationButton from '../components/Button';

storiesOf('DuplicationButton', module)
  .add('Good', () => (
    <DuplicationButton>
      <span role="img" aria-label="angel">
        😆😆
      </span>
    </DuplicationButton>
  ))
  .add('Bad', () => (
    <DuplicationButton>
      <span role="img" aria-label="devil">
        😈😈
      </span>
    </DuplicationButton>
  ));
