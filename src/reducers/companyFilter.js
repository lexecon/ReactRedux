import { CHANGE_COMPANY_FILTER } from '../actions/actions';

const companyFilter = (state = '', action) => {
  switch (action.type) {
    case CHANGE_COMPANY_FILTER:
      return action.company;
    default:
      return state;
  }
};

export default companyFilter;
