import { combineReducers } from 'redux';
import flights from './flights';
import companyFilter from './companyFilter';

export default combineReducers({
  companyFilter,
  flights,
});
