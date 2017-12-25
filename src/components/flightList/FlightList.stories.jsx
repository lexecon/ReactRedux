import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import FlightList from './FlightList';

const FLIGHTS = [
  {
    id: 123,
    direction: {
      from: 'Moscow',
      to: 'Berlin',
    },
    arrival: '2016-06-08T19:52:27.979Z',
    departure: '2016-06-08T17:51:20.979Z',
    carrier: 'S7',
  },
  {
    id: 193,
    direction: {
      from: 'Moscow',
      to: 'New York',
    },
    arrival: '2016-06-08T21:52:27.979Z',
    departure: '2016-06-08T17:51:20.979Z',
    carrier: 'Aeroflot',
  },
  {
    id: 133,
    direction: {
      from: 'Moscow',
      to: 'Samara',
    },
    arrival: '2016-09-08T13:52:27.979Z',
    departure: '2016-08-08T17:51:20.979Z',
    carrier: 'KLM',
  },
  {
    id: 126,
    direction: {
      from: 'Moscow',
      to: 'London',
    },
    arrival: '2016-08-10T13:52:27.979Z',
    departure: '2016-08-09T17:51:20.979Z',
    carrier: 'S7',
  },
  {
    id: 1543,
    direction: {
      from: 'Moscow',
      to: 'Berlin',
    },
    arrival: '2016-06-08T13:52:27.979Z',
    departure: '2016-06-08T17:51:20.979Z',
    carrier: 'Aeroflot',
  },
  {
    id: 1213,
    direction: {
      from: 'Moscow',
      to: 'Berlin',
    },
    arrival: '2016-06-08T13:52:27.979Z',
    departure: '2016-06-08T17:51:20.979Z',
    carrier: 'Aeroflot',
  },
  {
    id: 1523,
    direction: {
      from: 'Moscow',
      to: 'Berlin',
    },
    arrival: '2016-06-08T13:52:27.979Z',
    departure: '2016-06-08T17:51:20.979Z',
    carrier: 'KLM',
  },
  {
    id: 1283,
    direction: {
      from: 'Moscow',
      to: 'Berlin',
    },
    arrival: '2016-06-08T13:52:27.979Z',
    departure: '2016-06-08T17:51:20.979Z',
    carrier: 'Aeroflot',
  },
  {
    id: 12310,
    direction: {
      from: 'Moscow',
      to: 'Berlin',
    },
    arrival: '2016-06-08T13:52:27.979Z',
    departure: '2016-06-08T17:51:20.979Z',
    carrier: 'Aeroflot',
  },
  {
    id: 19923,
    direction: {
      from: 'Moscow',
      to: 'Berlin',
    },
    arrival: '2016-06-11T13:52:27.979Z',
    departure: '2016-06-10T17:51:20.979Z',
    carrier: 'KLM',
  },
  {
    id: 2542,
    direction: {
      from: 'Madrid',
      to: 'Paris',
    },
    arrival: '2016-06-16T13:52:27.979Z',
    departure: '2016-06-17T17:51:20.979Z',
    carrier: 'S7',
  },
];

storiesOf('Components/FlightList', module)
  .addDecorator(host({
    title: 'Flight',
    align: 'center middle',
    backdrop: 'rgba(70, 69, 71, 0.2)',
    background: '#ffffff',
    height: 400,
    width: 800,
  }))
  .add('default state', () => (
    <FlightList />
  ))
  .add('loading state', () => (
    <FlightList isLoad={false} />
  ))
  .add('with items', () => (
    <FlightList flights={FLIGHTS} />
  ));

