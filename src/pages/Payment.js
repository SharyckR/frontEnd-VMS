import React, {useEffect, useState} from 'react';
import {CustomLink} from "../components/NavBar";
import Checkbox from '@mui/material/Checkbox';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import {IconButton, Step, StepLabel, Stepper} from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {useParams} from "react-router-dom";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const steps = [
    'Buyer and Purchase Information',
    'Payment',
    'Purchase Confirmation',
];

const Payment = () => {
    const [ dataArray , setDataArray ] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        async function fetchActivityData() {
            try {
                const response = await fetch(`http://localhost:8080/getvehicle/${id}`)
                const results = await response.json()
                setDataArray(results.datos)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchActivityData()
    }, [])

    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    const handleCheckboxChange1 = (event) => { setIsChecked1(event.target.checked); };
    const handleCheckboxChange2 = (event) => { setIsChecked2(event.target.checked); };

    return (
        <div>
            <br/>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={1} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
            <div className="container2">
                <div className="box2">
                    <h1>Select Payment Method</h1>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                <IconButton> <MonetizationOnIcon fontSize="large" /> </IconButton>
                <IconButton> <CreditCardIcon fontSize="large" /> </IconButton>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Checkbox {...label} sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }} checked={isChecked1} onChange={handleCheckboxChange1} />
                    {isChecked1 && (
                        <div>
                            <h3>Information to make a consignment</h3>
                            <ul>
                                <li>Bank: Bancolombia</li>
                                <li>Account Type: Savings</li>
                                <li>Number: 91249200030</li>
                                <li>Name: Paola Andrea Orozco Puerta</li>
                                <li>Document: 95148632</li>
                            </ul>
                            <h3>Upload proof of payment</h3>
                        </div>
                    )}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Checkbox {...label} sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }} checked={isChecked2} onChange={handleCheckboxChange2} />
                    {isChecked2 && (
                        <div>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '50ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="outlined-basic" label="Card Number" variant="outlined" />
                            </Box>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '20ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-basic" label="CVV" variant="outlined" />
                                </Box>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '20ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-basic" label="Due date" variant="outlined" />
                                </Box>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div style={{ height: '50px' }}></div>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    sx={{ marginTop: '30px', marginRight: '700px' }}
                    size="large" variant="contained"
                    component={CustomLink}
                    to= {`/buyerinformation/${dataArray._id}`}
                >
                    Go Back <ArrowBackIosNewIcon fontSize="medium"/>
                </Button>
                <Button
                    sx={{ marginTop: '30px'}}
                    size="large"
                    variant="contained"
                    component={CustomLink}
                    to= {`/purchaseconfirm/${dataArray._id}`}
                >
                    Continue Purchase <ArrowForwardIosIcon fontSize="medium"/>
                </Button>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
                <Button size="large" variant="contained" color="primary" component={CustomLink} to="/">
                    Cancel Purchase
                </Button>
            </Box>
        </div>
    );
};

export default Payment;
