import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Flight.scss';

const cx = classNames.bind(styles);

const Flight = ({ from, to, departure, carrier }) => {
  const destination = `${from} - ${to}`;
  return (
    <div className={cx('flight-block')}>
      <p className={cx('direction')} title={destination}>{destination}</p>
      <p className={cx('date')}>Date: <span className={cx('date-value')}>{departure}</span></p>
      <p className={cx('carrier')}>Company: <span className={cx('carrier-value')}>{carrier}</span></p>
    </div>
  );
};

Flight.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  departure: PropTypes.string.isRequired,
  carrier: PropTypes.string.isRequired,
};

export default Flight;
