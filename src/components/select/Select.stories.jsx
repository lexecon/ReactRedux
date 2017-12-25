import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import Select from './Select';

storiesOf('Components/Select', module)
  .addDecorator(host({
    title: 'Flight',
    align: 'center middle',
    backdrop: 'rgba(70, 69, 71, 0.2)',
    background: '#ffffff',
    height: 50,
    width: 300,
  }))
  .add('default state', () => (
    <Select />
  ))
  .add('width placeholder', () => (
    <Select placeholder={'Custom placeholder...'} />
  ))
  .add('selected value', () => (
    <Select value={'test'} options={[{ value: 'test', label: 'test' }]} />
  ))
  .add('width options', () => (
    <Select
      options={[
      { value: 'test', label: 'test' },
      { value: 'test1', label: 'test1' },
      { value: 'test2', label: 'test2' },
      { value: 'test3', label: 'test3' },
      ]}
    />
  ));

