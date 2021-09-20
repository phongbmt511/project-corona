import React from 'react'
import { getCountries, getReportByCountry } from '../../API'
import { CountrySelector } from '../../Components/CountrySelector'
import { HightLight } from '../../Components/HightLight'
import { Sumary } from '../../Components/Sumary'

export const Home = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountryId, setSelectedCountryId] = useState('');
    const [report, setReport] = useState([]);
    useEffect(() => {
        getCountries()
            .then(res => {
                console.log({ res })
                setCountries(res.data);
            })
    }, [])
    const handleOnChange = (e) => {
        setSelectedCountryId(e.target.value);

    }
    useEffect(() => {
        const { slug } = countries.find(country => country.ISO2.toLowerCase() === selectedCountryId);

        console.log({ e, slug });
        //call api
        getReportByCountry(slug).then((res) => {
            //xoa di item cuoi cung trong array res.data
            res.data.pop();
            setReport(res.data)
        });
    }, [countries, setSelectedCountryId])
    return (
        <div>
            <CountrySelector countries={countries} handleOnChange={handleOnChange} />
            <HightLight report={report} />
            <Sumary report={report} />
        </div>
    )
}
