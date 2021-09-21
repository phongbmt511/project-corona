import { CardContent, Grid, Typography, Card } from '@material-ui/core';
import React from 'react'
import { HighLineCart } from '../HighLineCart';



export const HightLight = ({ report }) => {
    const data = report && report.length ? report[report.length - 1] : [];
    const sumary = [
        {
            title: 'So ca nhiem',
            count: data.Confirmed,
            type: 'confirmed'
        },
        {
            title: 'Khoi',
            count: data.Recovered,
            type: 'recovered'
        },
        {
            title: 'Tu vong',
            count: data.Deaths,
            type: 'deaths'
        },
    ]
    return (

        <Grid container spacing={3}>
            {sumary.map((data) => (
                <Grid item sm={4} xs={12}>
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

