import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

export const Filters = ({ onFilterChange }) => {
    const [selectedOptions, setSelectedOptions] = useState({
        color: [],
        KindVehicle: [],
        Price: [],
    });

    const handleSaveInformation = () => {
        console.log(selectedOptions);
    };

    const handleColorChange = (event, value) => {
        setSelectedOptions((prevOptions) => ({
            ...prevOptions,
            color: value.map((option) => option.title),
        }));
    };

    const handleKindVehicleChange = (event, value) => {
        setSelectedOptions((prevOptions) => ({
            ...prevOptions,
            KindVehicle: value.map((option) => option.title),
        }));
    };

    const handlePriceChange = (event, value) => {
        setSelectedOptions((prevOptions) => ({
            ...prevOptions,
            Price: value.map((option) => option.title),
        }));
    };

    return (
        <div>
            <TextField
                id="filled-read-only-input"
                defaultValue="Filters"
                InputProps={{
                    readOnly: true,
                }}
                variant="filled"
            />
            <div style={{ height: '15px' }}></div>
            <Autocomplete
                multiple
                id="tags-outlined"
                options={colors}
                getOptionLabel={(option) => option.title}
                filterSelectedOptions
                style={{ width: '150%' }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        id="color"
                        name="color"
                        label="Color"
                        placeholder="Filters"
                    />
                )}
                value={selectedOptions.color.map((title) => ({ title }))}
                onChange={handleColorChange}
            />
            <div style={{ height: '15px' }}></div>
            <Autocomplete
                multiple
                id="tags-outlined"
                options={kind_vehicle}
                getOptionLabel={(option) => option.title}
                filterSelectedOptions
                style={{ width: '150%' }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        id="KindVehicle"
                        name="KindVehicle"
                        label="Kind of Vehicle"
                        placeholder="Filters"
                    />
                )}
                value={selectedOptions.KindVehicle.map((title) => ({ title }))}
                onChange={handleKindVehicleChange}
            />
            <div style={{ height: '15px' }}></div>
            <Autocomplete
                multiple
                id="tags-outlined"
                options={price}
                getOptionLabel={(option) => option.title}
                filterSelectedOptions
                style={{ width: '150%' }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        id="Price"
                        name="Price"
                        label="Price"
                        placeholder="Filters"
                    />
                )}
                value={selectedOptions.Price.map((title) => ({ title }))}
                onChange={handlePriceChange}
            />
            <Button
                size="large"
                variant="contained"
                style={{ marginTop: '10px' }}
                onClick={handleSaveInformation}
            >
                Filter
            </Button>
        </div>
    );
};

const colors = [
    { title: 'Blue' },
    { title: 'Grey' },
    { title: 'Black' },
    { title: 'White' },
    { title: 'Red' },
    { title: 'Silver' },
];

const kind_vehicle = [
    { title: 'Car' },
    { title: 'Motorcycle' },
    { title: 'Bicycle' },
];

const price = [
    { title: '$100.000' },
    { title: '$300.000' },
    { title: '$500.000' },
    { title: '$800.000' },
    { title: '$1.000.000' },
    { title: '$2.000.000' },
];

export default Filters;
