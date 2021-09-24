import React from 'react'
import { useEffect, useState } from 'react'
import { getCountries, getReportByCountry, getSumary } from '../../API'
import { CountrySelector } from '../../Components/CountrySelector'
import { HightLight } from '../../Components/HightLight'
import { LiveCase } from '../../Components/LiveCase'
import { Sumary } from '../../Components/Sumary'

const Home = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountryId, setSelectedCountryId] = useState('');
    const [report, setReport] = useState([]);

    const [getsummary, setgetsummary] = useState([])



    useEffect(() => {
        getCountries().then((res) => {
            console.log({ res });
            setCountries(res.data);
            setSelectedCountryId('vn');
        });
    }, []);
    const handleOnChange = (e) => {
        setSelectedCountryId(e.target.value);

    }
    useEffect(() => { 
        if (selectedCountryId) {
            const { Slug } = countries.find(
                (country) => country.ISO2.toLowerCase() === selectedCountryId
            );
            console.log({ selectedCountryId, Slug });
            //call api
            getReportByCountry(Slug).then((res) => {
                //xoa item cuoi cung trong arr res.data
                res.data.pop();
                setReport(res.data)
            }
            );
        }
    }, [countries, selectedCountryId])


    useEffect(() => {
        getSumary().then((res) => {
            console.log({ res });
            setgetsummary(res.data.Countries);

        });
    }, []);
    return (
        <div>
            <CountrySelector countries={countries} handleOnChange={handleOnChange} value={selectedCountryId} />
            <HightLight report={report} />
            <Sumary report={report} countryId={selectedCountryId} />
            <LiveCase getsummary={getsummary} />
        </div>
    )
}
export default Home;
