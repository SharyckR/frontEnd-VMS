import React from 'react';
import Box from "@mui/material/Box";
import {IconButton, Step, StepLabel, Stepper} from "@mui/material";
import BeenhereIcon from '@mui/icons-material/Beenhere';
import Button from "@mui/material/Button";
import {CustomLink} from "../components/NavBar";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { styled } from '@mui/system';

const LargeLocalShippingIcon = styled(LocalShippingIcon)({
    fontSize: '40px',
    color: 'DeepSkyBlue'
});

const steps = [
    'Buyer and Purchase Information',
    'Payment',
    'Purchase Confirmation',
];

const PurchaseConfirm = () => {
    return (
        <div>
            <br/>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={2} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '60vh',
                    margin: '40px'
                }}
            >
                <IconButton style={{ color: 'green' }}>
                    <BeenhereIcon sx={{ fontSize: '300px' }} />
                </IconButton>
                <h2>Purchase Confirmed</h2>
                <h2><LargeLocalShippingIcon />###########</h2>
                <h3>Guide ID or Delivery</h3>
            </Box>

            <Button sx={{ marginTop: '30px', marginLeft: '1200px' }} size="large" variant="contained" component={CustomLink} to="/">
                Back Home <ArrowBackIosNewIcon fontSize="medium"/>
            </Button>
        </div>
    );
};

export default PurchaseConfirm;