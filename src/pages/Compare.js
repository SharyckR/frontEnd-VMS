import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MercedesImage from "./images/MERCEDESBENZ.jpg";
import RenaultLoganImage from "./images/RenaultLogan.jpg";
import MazdaImage from "./images/Mazda.jpg";
import JeepImage from "./images/Jeep.jpg";
import Button from "@mui/material/Button";
import {CustomLink} from "../components/NavBar";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Box from "@mui/material/Box";

function createData(description, model, status, weight, kind_vehicle, color, number_chairs, number_doors, price, location) {
    return { description, model, status, weight, kind_vehicle, color, number_chairs, number_doors, price, location };
}

const rows = [
    createData('Model', 'Mercedes Benz', 'Renault Logan', 'Mazda', 'Jeep'),
    createData('Status', 'New', 'Used', 'Used', 'Used'),
    createData('Weight', '1 ton', '1 ton', '0.8 ton', '1.5 ton'),
    createData('Kind of Vehicle', 'Car', 'Car', 'Car', 'Car'),
    createData('Color', 'Grey', 'Blue', 'Metallic blue', 'Black'),
    createData('Number of Chairs', 5, 5, 5, 5),
    createData('Number of Doors', 4, 4, 4, 5),
    createData('Price', '1000000 USD', '215160 USD', '900000 USD', '1500000 USD'),
    createData('Location', 'Pekin, China', 'Bogota, Colombia', 'Los Angeles, U.S.A.', 'Cartagena, Bolívar'),
];

export default function BasicTable() {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <TableContainer component={Paper}>
                    <Table style={{ minWidth: '700px' }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Information General</TableCell>
                                <TableCell align="center">
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src={MercedesImage} alt="Car" style={{ width: '250px', height: '150px' }} />
                                    </div>
                                </TableCell>
                                <TableCell align="center">
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src={RenaultLoganImage} alt="Car" style={{ width: '250px', height: '150px' }}/>
                                    </div>
                                </TableCell>
                                <TableCell align="center">
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src={MazdaImage} alt="Car" style={{ width: '250px', height: '150px' }}/>
                                    </div>
                                </TableCell>
                                <TableCell align="center">
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src={JeepImage} alt="Car" style={{ width: '250px', height: '180px' }}/>
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.description}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.description}
                                    </TableCell>
                                    <TableCell align="center">{row.model}</TableCell>
                                    <TableCell align="center">{row.status}</TableCell>
                                    <TableCell align="center">{row.weight}</TableCell>
                                    <TableCell align="center">{row.kind_vehicle}</TableCell>
                                    <TableCell align="center">{row.color}</TableCell>
                                    <TableCell align="center">{row.number_chairs}</TableCell>
                                    <TableCell align="center">{row.number_doors}</TableCell>
                                    <TableCell align="center">{row.price}</TableCell>
                                    <TableCell align="center">{row.location}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

            <Box sx={{ display: 'flex', justifyContent: 'right' }}>
                <Button sx={{ marginTop: '30px' }} size="large" variant="contained" component={CustomLink} to="/buy">
                    Go Back <ArrowBackIosNewIcon fontSize="medium"/>
                </Button>
            </Box>
        </div>
    );
}
