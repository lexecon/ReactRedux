import { connect } from 'react-redux';
import FlightList from '../components/flightList/FlightList';

const getFilteredFlights = (flights, carrier) => flights.filter(flight => (
  flight.carrier === carrier || carrier === ''
));

const mapStateToProps = state => ({
  flights: getFilteredFlights(state.flights.items, state.companyFilter),
  isLoad: state.flights.isLoad,
});

const VisibleFlightList = connect(
  mapStateToProps,
)(FlightList);

export default VisibleFlightList;
