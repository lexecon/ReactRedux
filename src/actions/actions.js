import fetch from 'isomorphic-fetch';

export const CHANGE_COMPANY_FILTER = 'CHANGE_COMPANY_FILTER';
export const changeCompanyFilter = company => ({
  type: CHANGE_COMPANY_FILTER,
  company,
});

export const REQUEST_FLIGHT = 'REQUEST_FLIGHT';
export const requestFlight = () => ({
  type: REQUEST_FLIGHT,
});

export const RECEIVE_FLIGHT = 'RECEIVE_FLIGHT';
export const receiveFlight = flights => ({
  type: RECEIVE_FLIGHT,
  flights,
});

export const getFlight = () => (dispatch) => {
  dispatch(requestFlight());
  return fetch('/data.json')
    .then(response => (response.json()))
    .then((data) => {
      dispatch(receiveFlight(data.flights));
    })
    .catch(() => {
      dispatch(receiveFlight([]));
    });
};
