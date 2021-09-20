import React from 'react'
import { FormControl, InputLabel, NativeSelect } from '@material-ul/core';

export const CountrySelector = ({value ,handleOnChange,countries}) => {
    
    return (
        <FormControl>
            <InputLabel htmlFor="country-selector" shrink >Quoc gia</InputLabel>
            <NativeSelect
                value={value}
                onChange={handleOnChange}
                inputProps={{
                    name: 'country',
                    id: 'country-selector'
                }}
                
            >
                {
                    countries.map((country)=>{
                        return<Option value={country.ISO2.toLowerCase()}>{country.Country}</Option>

                    })
                }

            </NativeSelect>
            <FormHelperText>
                Lua chon quoc gia
            </FormHelperText>
        </FormControl>
    )
}







