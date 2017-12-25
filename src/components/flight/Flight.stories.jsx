import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import Flight from './Flight';

storiesOf('Components/Flight', module)
  .addDecorator(host({
    title: 'Flight',
    align: 'center middle',
    backdrop: 'rgba(70, 69, 71, 0.2)',
    background: '#ffffff',
    height: 200,
    width: 200,
  }))
  .add('default state', () => (
    <Flight from={'Moscow'} to={'Tver'} departure={'2016-06-08T17:51:20.979Z'} carrier={'S7'} />
  ))
  .add('long destination', () => (
    <Flight from={'Long destination first'} to={'Long destination second'} departure={'2016-06-08T17:51:20.979Z'} carrier={'S7'} />
  ))
  .add('long company name', () => (
    <Flight from={'Moscow'} to={'Tver'} departure={'2016-06-08T17:51:20.979Z'} carrier={'Long long long company name'} />
  ));

