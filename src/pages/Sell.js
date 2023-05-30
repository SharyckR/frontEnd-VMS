import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from "@mui/material/Button";
import { CustomLink } from "../components/NavBar";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { cloudinaryConfig } from "./Cloudinary";
import axios from 'axios';

const Sell = () => {
    const [ fullName , setFullName ] = useState('');
    const [typeId , setTypeId] = useState('')
    const [ id , setId ] = useState('');
    const [ phone , setPhone ] = useState('');
    const [ address , setAddress ] = useState('');
    const [ model , setModel ] = useState('');
    const [ status , setStatus ] = useState('');
    const [ weight , setWeight ] = useState('');
    const [ kindOfVehicle , setKindOfVehicle ] = useState('');
    const [ description , setDescription ] = useState('');
    const [ color , setColor ] = useState('');
    const [ numOfChairs , setNumOfChairs ] = useState('');
    const [ numOfDoors , setNumOfDoors ] = useState('');
    const [ price , setPrice ] = useState('');
    const [ location , setLocation ] = useState('');

    const handleSaveInformation = () => {
        let data = {
            "Model": model,
            "Status": status.label,
            "Weight": weight,
            "KindOfVehicle": kindOfVehicle.label,
            "Description": description,
            "Color": color,
            "NumOfChairs": numOfChairs,
            "NumOfDoors": numOfDoors,
            "Price": price,
            "Location": location,
            "Seller": [{
                "Name": fullName,
                "TypeID": typeId.label,
                "Id": id,
                "Phone": phone,
                "Address": address
            }]
        }

        fetch( 'http://localhost:8080/addvehicle', {
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

    const handleImageUpload = async (event) => {
        const formData = new FormData();
        formData.append('file', event.target.files[0]);
        formData.append('upload_preset', 'ml_default');

        try {
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}`,
                formData
            );

            console.log(response.data.url);
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div style={{ display: 'flex', gap: '300px' }}>
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
                <h1>Seller Information</h1>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="fullName"
                        name="fullName"
                        label="Full Name"
                        variant="outlined"
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                    />
                </Box>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={identification}
                        value = {typeId}
                        onChange={(event, newValue) => {
                            setTypeId(newValue);
                        }}
                        sx={{ width: 230 }}
                        renderInput={(params) => <TextField
                            {...params}
                            label="Identification"

                        />}
                    />

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '20ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="number"
                            name="number"
                            label="Number"
                            variant="outlined"
                            value={id}
                            onChange={e => setId(e.target.value)}
                        />
                    </Box>
                </div>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="phone"
                        name="phone"
                        label="Phone"
                        variant="outlined"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                </Box>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="address"
                        name="address"
                        label="Address"
                        variant="outlined"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                </Box>
                <Button size="large" variant="contained" component={CustomLink} to="/">
                    Go Back <ArrowBackIosNewIcon fontSize="medium" />
                </Button>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}>
                <h1>Vehicle Information</h1>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '80ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="model"
                        name="model"
                        label="Model"
                        variant="outlined"
                        value={model}
                        onChange={e => setModel(e.target.value)}
                    />
                </Box>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={statusParametros}
                        sx={{ width: 230 }}
                        value={status}
                        onChange={(event, newValue) => {
                            setStatus(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} label="Status" />}
                    />
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '20ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="weight"
                            name="weight"
                            label="Weight"
                            variant="outlined"
                            value={weight}
                            onChange={e => setWeight(e.target.value)}
                        />
                    </Box>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={vehicle}
                        sx={{ width: 230 }}
                        value={kindOfVehicle}
                        onChange={(event, newValue) => {
                            setKindOfVehicle(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} label="Kind of Vehicle" />}
                    />
                </div>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '80ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="description"
                        name="description"
                        label="Description"
                        variant="outlined"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </Box>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '80ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="color"
                        name="color"
                        label="Color"
                        variant="outlined"
                        value={color}
                        onChange={e => setColor(e.target.value)}
                    />
                </Box>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="numOfChairs"
                            name="numOfChairs"
                            label="Number of Chairs"
                            variant="outlined"
                            value={numOfChairs}
                            onChange={e => setNumOfChairs(e.target.value)}
                        />
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="numOfDoors"
                            name="numOfDoors"
                            label="Number of Doors"
                            variant="outlined"
                            value={numOfDoors}
                            onChange={e => setNumOfDoors(e.target.value)}
                        />
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="price"
                            name="price"
                            label="Price in USD"
                            variant="outlined"
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                    </Box>
                </div>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '80ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="location"
                        name="location"
                        label="Location"
                        variant="outlined"
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                    />
                </Box>
                <h3>Insert Image</h3>
                <input type="file" onChange={handleImageUpload} />
                <div style={{ height: '30px' }}></div>
                <Button size="large" variant="contained" onClick={handleSaveInformation}>
                    Save Information
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

const statusParametros = [
    { label: 'New' },
    { label: 'Used' }
];

const vehicle = [
    { label: 'Car' },
    { label: 'Motorcycle' },
    { label: 'Boat' },
    { label: 'Bicycle' },
    { label: 'Train' },
    { label: 'Plane' }
];

export default Sell;
