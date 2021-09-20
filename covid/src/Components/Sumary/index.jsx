import React from 'react'
import { Grid } from '@material-ul/core';
import { LineChart } from '../Charts/LineChart';
export const Sumary = () => {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item sm={4} xs={12}>
                    <LineChart data={[]}/>
                </Grid>
                <Grid item sm={4} xs={12}>

                </Grid>
            </Grid>
        </div>
    )
}


