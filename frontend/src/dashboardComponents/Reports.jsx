import React from 'react';
import { Box, Button, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const buttonStyle = {
    minWidth: '200px', // Set the same width for all buttons
    minHeight: '100px', // Set the same height for all buttons
};

function Reports() {

    return (
        <Box p={5} bgcolor={''}>
            <Typography variant="h2" fontWeight={800} gutterBottom>
                Generate Reports
            </Typography>
            <Grid container spacing={2} mt={5}>
                <Grid item xs={12} sm={6} md={3}>
                    <Button variant="contained" color="primary" fullWidth style={buttonStyle}>
                        All Products Report
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Link to={'/all-orders'}>
                        <Button variant="contained" color="primary" fullWidth style={buttonStyle}>
                            All Orders Report
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Button variant="contained" color="primary" fullWidth style={buttonStyle}>
                        All Users Report
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Button variant="contained" color="primary" fullWidth style={buttonStyle}>
                        User Report
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Reports;
