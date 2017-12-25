import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './FlightList.scss';
import Flight from '../flight/Flight';

const cx = classNames.bind(styles);

const FlightList = ({ flights, isLoad }) => {
  const parseDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('ru', {});
  };
  if (!isLoad) {
    return (
      <span className={cx('message')}>Loading ...</span>
    );
  }
  if (!flights.length) {
    return (
      <span className={cx('message')}>Flight not found</span>
    );
  }
  return (
    <ul className={cx('flight-list')}>
      {flights.map(flight => (
        <li key={flight.id} className={cx('flight-item')}>
          <Flight
            from={flight.direction.from}
            to={flight.direction.to}
            departure={parseDate(flight.departure)}
            carrier={flight.carrier}
          />
        </li>
    ))}
    </ul>
  );
};

FlightList.propTypes = {
  flights: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    direction: PropTypes.shape({
      from: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    }).isRequired,
    departure: PropTypes.string.isRequired,
    carrier: PropTypes.string.isRequired,
  })),
  isLoad: PropTypes.bool,
};
FlightList.defaultProps = {
  flights: [],
  isLoad: true,
};

export default FlightList;
