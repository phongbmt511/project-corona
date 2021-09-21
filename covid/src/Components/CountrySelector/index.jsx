import React from 'react'
import {FormControl, NativeSelect ,InputLabel} from '@material-ui/core';
export const CountrySelector = ({value , handleOnChange ,countries}) => {
    return (
        <FormControl>
            <InputLabel htmlFor="country-selecter" shrink >Quoc gia</InputLabel>
            <NativeSelect
            value={value}
            onChange={handleOnChange}
            inputProps={{
                name :'country',
                id :'country-selecter',
            }}

            >
                {
                    countries.map((country)=>{
                        return (
                            <option value={country.ISO2.toLowerCase()}>
                                {country.Country}
                            </option>
                        )
                    })
                }
            </NativeSelect>
        </FormControl>
    )
}







