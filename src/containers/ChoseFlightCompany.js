import { connect } from 'react-redux';
import Select from '../components/select/Select';
import { changeCompanyFilter } from '../actions/actions';

const getCompanyList = (flights) => {
  const uniqItems = {};
  const result = [];
  flights.forEach((flight) => {
    if (!uniqItems[flight.carrier]) {
      uniqItems[flight.carrier] = true;
      result.push({
        value: flight.carrier,
        label: flight.carrier,
      });
    }
  });
  return result;
};

const mapStateToProps = state => ({
  value: state.companyFilter,
  options: getCompanyList(state.flights.items),
  placeholder: 'Chose company ...',
});
const mapDispatchToProps = dispatch => ({
  onChange: (result) => {
    let company = '';
    if (result) {
      company = result.value;
    }
    dispatch(changeCompanyFilter(company));
  },
});

const ChoseFlightCompany = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Select);

export default ChoseFlightCompany;
