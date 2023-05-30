import React , {useEffect , useState} from 'react';
import {IconButton} from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import TrainIcon from "@mui/icons-material/Train";
import Box from "@mui/material/Box";
import {CustomLink} from "../components/NavBar";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Button from "@mui/material/Button";
import Filters from "../components/Filters";
import './styles.css';
import {Vehicle} from "./Vehicle";

const Buy = () => {
    const [dataArray , setDataArray ] = useState([])

    useEffect(() => {
        async function fetchActivityData() {
            try {
                const response = await fetch(`http://localhost:8080/getvehicles`)
                const results = await response.json()
                setDataArray(results.datos)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchActivityData()
    },[])

    return (
        <div className='contenedorglobal'>
            <div style={{ height: '20px' }}></div>

            <Box sx={{
                margin: 'auto',
                display: 'flex',
                justifyContent: 'center',
                width: 500,
                height: 80,
                backgroundColor: '#00bfff'
            }}>
                <IconButton> <DirectionsCarIcon fontSize="large" /> </IconButton>
                <IconButton> <TwoWheelerIcon fontSize="large" /> </IconButton>
                <IconButton> <AirplanemodeActiveIcon fontSize="large" /> </IconButton>
                <IconButton> <RocketLaunchIcon fontSize="large" /> </IconButton>
                <IconButton> <DirectionsBoatIcon fontSize="large" /> </IconButton>
                <IconButton> <PedalBikeIcon fontSize="large" /> </IconButton>
                <IconButton> <TrainIcon fontSize="large" /> </IconButton>
            </Box>

                <div className="contenedorcarfiltro">
                    <div className="contenedorfiltros">
                        <Filters />
                    </div>
                    <div className="contenedorcar">
                    { dataArray && dataArray.map((i , index) =>
                            <Vehicle
                                data = {i}
                            />
                    )}
                    </div>
                </div>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button sx={{ marginTop: '30px' }} size="large" variant="contained" component={CustomLink} to="/">
                    Go Back <ArrowBackIosNewIcon fontSize="medium"/>
                </Button>
            </Box>
            <br/>
        </div>
    );
};

export default Buy;
