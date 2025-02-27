const airlines = require('../data/airlines.json');

// Fetch airline by IATA code
function getAirlineByIATA(code) {
  return airlines.find((airline) => airline.iata === code) || null;
}

// Fetch airline by ICAO code
function getAirlineByICAO(code) {
  return airlines.find((airline) => airline.icao === code) || null;
}

// Search airlines by name (partial match)
function searchAirlineByName(query) {
  return airlines.filter((airline) =>
    airline.name.toLowerCase().includes(query.toLowerCase())
  );
}

// Filter airlines by country
function filterAirlinesByCountry(country) {
  return airlines.filter(
    (airline) => airline.country.toLowerCase() === country.toLowerCase()
  );
}

module.exports = { getAirlineByIATA, getAirlineByICAO, searchAirlineByName, filterAirlinesByCountry };
