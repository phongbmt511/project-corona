import { Grid } from '@material-ui/core';
import React from 'react'
import { HighLineCart } from '../HighLineCart';
export const HightLight = ({ report }) => {
    const data = report && report.length ? report[report.length - 1] : [];
    const sumary = [
        {
            title: 'Total cases',
            count: data.Confirmed,
            type: 'confirmed'
        },
        {
            title: 'Recovered cases',
            count: data.Recovered,
            type: 'recovered'
        },
        {
            title: 'Death cases',
            count: data.Deaths,
            type: 'deaths'
        },
    ]
    return (

        <Grid container spacing={3} style={{marginTop:"20px"}}>
            {sumary.map((data, index) => (
                <Grid item sm={4} xs={12} key={index}>
                    <HighLineCart
                        title={data.title}
                        count={data.count}
                        type={data.type}
                    />
                </Grid>
            ))}
        </Grid>

    )
}

