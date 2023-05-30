import React, {useEffect, useState} from 'react';
import "./styles.css"
import {Typography} from "@mui/material";
import {CustomLink} from "../components/NavBar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";
import {VehicleShopping} from "./Vehicle";
import {RenaultAdvertisement} from "./RenaultLogan";

const MyShopping = () => {
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
        <div>
            <div className="contenedorcarfiltro">
                <div className='contenedorfilter'>
                    <h2>Advertisement</h2>
                    <RenaultAdvertisement/>
                </div>
                <div className='contenedorcar'>
                    { dataArray && dataArray.map((i , index) =>
                        <VehicleShopping
                            data = {i}
                        />
                    )}
                </div>
            </div>

            <div className="container1">
                <div className="box4">
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="body1" fontFamily="Arial" fontSize={18}>
                            Total Purchase
                        </Typography>
                        <Button size="large" variant="contained" component={CustomLink} to="/buyerinformation">
                            Buy Now <ArrowForwardIosIcon fontSize="medium"/>
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MyShopping;
