import axios from 'axios';
export const getCountries=()=>{
    axios.get(`https://api.covid19.com/courtries`);
}
export const getReportByCountry=(country)=>{
    axios.get(`https://api.covid19api.com/dayone/country/${country}`);
}