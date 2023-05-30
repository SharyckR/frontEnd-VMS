import React from "react";
import "./styles.css";
import { CustomLink } from "../components/NavBar";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export function VehicleShopping(props) {
    return (
        <div className="container2">
            <div className="box3">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Checkbox {...label} />
                    <img src={props.data.UrlImg} alt="Car" style={{ width: '150px', height: '100px' }} />
                    <Typography variant="body1" fontFamily="Arial" fontSize={18} style={{ margin: '0 10px' }}>
                        Model: <br/> {props.data.Model}
                    </Typography>
                    <Typography variant="body3" fontFamily="Arial" fontSize={18} style={{ margin: '0 10px' }}>
                        Price: <br/> {props.data.Price}
                    </Typography>
                    <Button
                        size="large"
                        variant="outlined"
                        component={CustomLink}
                        to= {`/purchase/${props.data._id}`}
                    >
                        See More
                    </Button>
                </div>
            </div>
        </div>
    );
}
export function Vehicle(props) {
    return (
        <div className="container">
            <div className="box">
                <h1>{props.data.Model}</h1>
                <div style={{ display: "flex", gap: "10px" }}>
                    <img src={props.data.UrlImg} alt="Car" style={{ width: "150px", height: "100px" }}/>
                    <Typography variant="body1" fontFamily="Arial" fontSize={15}>
                        Description: {props.data.Description}
                        <br/>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <Button
                                size="large"
                                variant="outlined"
                                component={CustomLink}
                                to="/compare"
                            >
                                Compare
                            </Button>
                            <Button
                                size="large"
                                variant="outlined"
                                component={CustomLink}
                                to= {`/purchase/${props.data._id}`}
                            >
                                See More
                            </Button>
                        </div>
                    </Typography>
                </div>
            </div>
        </div>
    );
}

