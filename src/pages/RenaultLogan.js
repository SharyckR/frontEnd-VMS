import React from "react";
import {CustomLink} from "../components/NavBar";
import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import RenaultImage from "./images/RenaultLogan.jpg"

export function RenaultAdvertisement() {
    return (
        <div className="container2">
            <div className="box">
                <div style={{ display: 'flex', gap: '10px' }}>
                    <img src={RenaultImage} alt="Car" style={{ width: '250px', height: '150px' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
                        <h2>Renault Logan Azul</h2>
                        <Typography variant="body2" fontFamily="Arial" fontSize={18} style={{ margin: '0 10px', display: 'block' }}>
                            Product Description
                        </Typography>
                        <Button size="large" variant="outlined" component={CustomLink} to="/purchase">
                            See More
                        </Button>
                    </div>
                </div>
                <h2 style={{ display: 'flex', justifyContent: 'center'}} >Price   $26.000</h2>
            </div>
        </div>
    );
}
