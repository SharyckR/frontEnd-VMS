import React , { useEffect , useState} from 'react';
import Box from "@mui/material/Box";
import {Rating, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {CustomLink} from "../components/NavBar";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {useParams} from "react-router-dom";

const Purchase = (props) => {
    const [value, setValue] = React.useState(2);
    const [ dataArray , setDataArray ] = useState([]);
    let { id } = useParams();
    const handleButtonClick = () => {
        const confirmed = window.confirm('Add vehicle to the shopping cart');
        if (confirmed) {
            console.log('Vehicle Added');
        } else {
            console.log('Cancel');
        }
    };

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
            <div style={{ display: 'flex', gap: '60px' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '30vh',
                        margin: '150px'
                    }}
                >
                    <h1></h1>
                    <img src={dataArray.UrlImg} alt="Car" style={{ width: '550px', height: '400px' }} />
                    <br/>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            sx={{ marginRight: '30px'}}
                            variant="contained"
                            size="large"
                            onClick={handleButtonClick}
                        >
                            Add to the cart
                        </Button>
                        <Button
                            size="large"
                            variant="contained"
                            component={CustomLink}
                            to= {`/buyerinformation/${dataArray._id}`}
                        >
                            Buy now
                        </Button>
                        <br/>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '70vh',
                        margin: '40px'
                    }}
                >
                    <h1>{dataArray.Model}</h1>
                    <h2>Product Description: {dataArray.Description}</h2>
                    <h3>Main Features</h3>
                    <div style={{ textAlign: 'center' }}>
                        <h3>
                            Status: {dataArray.Status} <br/>
                            Weight: {dataArray.Weight} <br/>
                            Kind of Vehicle: {dataArray.KindOfVehicle} <br/>
                            Color: {dataArray.Color} <br/>
                            Num of Chairs: {dataArray.NumOfChairs} <br/>
                            Num of Doors: {dataArray.NumOfDoors} <br/>
                            Location: {dataArray.Location} <br/>
                            Weight: {dataArray.Weight}
                        </h3>
                    </div>

                    <Box
                        sx={{
                            '& > legend': { mt: 2 },
                        }}
                    >
                        <Typography component="legend">Rating</Typography>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </Box>
                    <h1>{dataArray.Price}</h1>
                </Box>
            </div>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button sx={{ marginTop: '30px' }} size="large" variant="contained" component={CustomLink} to="/buy">
                    Go Back <ArrowBackIosNewIcon fontSize="medium"/>
                </Button>
            </Box>
        </div>
    );
};

export default Purchase;
