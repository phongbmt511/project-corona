import React from 'react'
import { Grid , Card, CardContent, Typography } from '@material-ul/core';

export const HightLight = () => {
    return (
        <Grid container spacing={3}>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <Typography component="p" variant="body2">So ca mac</Typography>

                        <Typography component="sp" variant="body2">3000</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
            <Card>
                    <CardContent>
                        <Typography component="p" variant="body2">So ca khoi</Typography>

                        <Typography component="sp" variant="body2">3000</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
            <Card>
                    <CardContent>
                        <Typography component="p" variant="body2">So ca tu vong</Typography>

                        <Typography component="sp" variant="body2">3000</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
