import axios from 'axios';
export const getCountries=()=>
    axios.get(`https://api.covid19api.com/countries`);

export const getReportByCountry=(country)=>
    axios.get(`https://api.covid19api.com/dayone/country/${country}`);

export const getMapDataByCountryId = (countryId) =>
    import(
      `@highcharts/map-collection/countries/${countryId}/${countryId}-all.geo.json`
);
export const getSumary=()=>
    axios.get(`https://api.covid19api.com/summary`);
  