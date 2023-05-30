import React, {useEffect, useState} from 'react';
import "./styles.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {Step, StepLabel, Stepper, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {CustomLink} from "../components/NavBar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ClearIcon from '@mui/icons-material/Clear';
import {useParams} from "react-router-dom";

const steps = [
    'Buyer and Purchase Information',
    'Payment',
    'Purchase Confirmation',
];

const BuyerInformation = () => {
    const [ firstName , setFirstName ] = useState('');
    const [ lastName , setLastName] = useState('')
    const [ typeId , setTypeId ] = useState('');
    const [ Id , setID ] = useState('');
    const [ phone , setPhone ] = useState('');
    const [ address , setAddress ] = useState('');

    const handleSaveInformation = () => {
        let data = {
            "FirstName": firstName,
            "LastName": lastName,
            "TypeId": typeId.label,
            "ID": Id,
            "Phone": phone,
            "Address": address
        }

        fetch( 'http://localhost:8080/addbuyer', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json',
            }
        }).then(res => res.json())
            .then(data => data)
            .then((data) => {
                alert(data.message)
            })
            .catch(err => console.log("err", err));

    };

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

    return (
        <div>
            <br/>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={0} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
            <div style={{ display: 'flex', gap: '150px' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '50vh',
                        margin: '40px'
                    }}
                >
                    <h1>Buyer Information</h1>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '50ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    >
                        <TextField id="outlined-basic" label="Frist Name" variant="outlined" />
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '50ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    >
                        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                    </Box>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={identification}
                            sx={{ width: 205 }}
                            value = {typeId}
                            onChange={(event, newValue) => {
                                setTypeId(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} label="Identification" />}
                        />

                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '22ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            value={Id}
                            onChange={e => setID(e.target.value)}
                        >
                            <TextField id="outlined-basic" label="Number" variant="outlined" />
                        </Box>
                    </div>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '50ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    >
                        <TextField id="outlined-basic" label="Phone" variant="outlined" />
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '50ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    >
                        <TextField id="outlined-basic" label="Address" variant="outlined" />
                    </Box>
                </Box>

                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <div className="line"></div>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '30vh',
                        margin: '40px'
                    }}
                >
                    <h1>Purchase Information</h1>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <img src={dataArray.UrlImg} alt="Car" style={{ width: '350px', height: '250px' }} />
                        <Typography variant="body1" fontFamily="Arial" fontSize={17}>
                            Model: {dataArray.Model} <br/>
                            Product Description: {dataArray.Description}
                            <div style={{ height: '70px' }}></div>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '5px',
                                    margin: '5px',
                                }}
                            >
                                <div className="container1">
                                    <div className="box1" style={{ display: 'flex', textAlign: 'center' }}>
                                        <h2>Total Purchase: {dataArray.Price}</h2>
                                    </div>
                                </div>
                            </Box>
                        </Typography>
                    </div>
                </Box>
            </div>
            <Button sx={{ marginTop: '30px', marginLeft: '50px' }} size="large" variant="contained" onClick={handleSaveInformation}>
                Save Information
            </Button>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    sx={{ marginTop: '30px', marginRight: '700px' }}
                    size="large"
                    variant="contained"
                    component={CustomLink}
                    to="/buy">
                    Cancel Purchase <ClearIcon fontSize="medium"/>
                </Button>
                <Button
                    sx={{ marginTop: '30px'}}
                    size="large"
                    variant="contained"
                    component={CustomLink}
                    to= {`/payment/${dataArray._id}`}
                >
                    Continue Purchase <ArrowForwardIosIcon fontSize="medium"/>
                </Button>
            </Box>
        </div>

    );
};

const identification = [
    { label: 'C.C.' },
    { label: 'NIT' },
    { label: 'Passport' },
    { label: 'Foreign Identity Card' }
];

export default BuyerInformation;
