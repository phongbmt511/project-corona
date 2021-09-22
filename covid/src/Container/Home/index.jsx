import React from 'react'
import { useEffect , useState} from 'react'
import { getCountries, getReportByCountry  } from '../../API'
import { CountrySelector } from '../../Components/CountrySelector'
import { HightLight } from '../../Components/HightLight'
import { Sumary } from '../../Components/Sumary'

const Home = () => {
    const [countries,setCountries] = useState([]);
    const [selectedCountryId , setSelectedCountryId]= useState('');
    const [report , setReport] = useState([]);
    useEffect(()=>{
        getCountries().then((res)=>{
            console.log({res});
            setCountries(res.data);
            setSelectedCountryId('vn');
        });
    },[]);
    const handleOnChange =(e)=>{
        setSelectedCountryId(e.target.value);
        
    }
    useEffect(()=>{
        if(selectedCountryId){
        const {Slug}=countries.find(
            (country)=> country.ISO2.toLowerCase()===selectedCountryId
        );
        console.log({selectedCountryId,Slug});
        //call api
        getReportByCountry(Slug).then((res)=>{
            //xoa item cuoi cung trong arr res.data
            res.data.pop();
            setReport(res.data)
        }
        );
    }
    },[countries,selectedCountryId])
    return (
        <div>
            <CountrySelector countries={countries} handleOnChange={handleOnChange} value={selectedCountryId}/>
            <HightLight report={report}/>
            <Sumary report={report} countryId={selectedCountryId}/>
        </div>
    )
}
export default Home;
