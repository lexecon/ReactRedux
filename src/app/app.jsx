import React from 'react';
import classNames from 'classnames/bind';
import styles from './app.scss';

import VisibleFlightList from '../containers/VisibleFlightList';
import ChoseFlightCompany from '../containers/ChoseFlightCompany';

const cx = classNames.bind(styles);

const App = () => (
  <div className={cx('app')}>
    <div className={cx('search-block')}>
      <div className={cx('search-container')}>
        <ChoseFlightCompany />
      </div>
    </div>
    <VisibleFlightList />
  </div>
);

export default App;
