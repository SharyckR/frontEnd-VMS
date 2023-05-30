import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import TrainIcon from '@mui/icons-material/Train';
import {IconButton, Typography} from "@mui/material";
import {CustomLink} from "../components/NavBar";

function Home() {
    return (
        <div className="App">
            <>
                <div style={{ height: '30px' }}></div>
                <Box
                    sx={{
                        margin: 'auto',
                        padding: 5,
                        display: 'flex',
                        justifyContent: 'center',
                        width: 800,
                        height: 250,
                        backgroundColor: '#00bfff'
                    }}
                >
                    <Typography variant="body1" fontStyle="italic" fontFamily="Arial" fontSize={30}>
                        Buy and sell all types of vehicles
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        width: 0,
                        height: 200 }}>
                        <IconButton> <DirectionsCarIcon fontSize="large" /> </IconButton>
                        <IconButton> <TwoWheelerIcon fontSize="large" /> </IconButton>
                        <IconButton> <AirplanemodeActiveIcon fontSize="large" /> </IconButton>
                        <IconButton> <RocketLaunchIcon fontSize="large" /> </IconButton>
                        <IconButton> <DirectionsBoatIcon fontSize="large" /> </IconButton>
                        <IconButton> <PedalBikeIcon fontSize="large" /> </IconButton>
                        <IconButton> <TrainIcon fontSize="large" /> </IconButton>
                    </Box>
                </Box>
                <div style={{ height: '40px' }}></div>
                <Stack spacing={10} direction="row" justifyContent="center">
                    <Button size="large" variant="outlined" component={CustomLink} to="/buy">
                        See Products
                    </Button>
                    <Button size="large" variant="outlined" component={CustomLink} to="/sell">
                        Sell Products
                    </Button>
                </Stack>
                <br/>
                <Stack spacing={10} direction="row" justifyContent="center">
                    <Button size="large" variant="outlined" component={CustomLink} to="/deliverytracking">
                        Delivery Tracking
                    </Button>
                </Stack>
            </>
        </div>
    )
}

export default Home
