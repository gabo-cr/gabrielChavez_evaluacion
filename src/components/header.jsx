import * as React from 'react';

import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import SearchIcon from '@mui/icons-material/Search';

const Header = ({ onSearch, text }) => {
    return (
        <Stack spacing={2} className='header'>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-text">Nombre de usuario</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-text"
                    type='text'
                    endAdornment={
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    }
                    label="Nombre de usuario"
                    value={text}
                    onChange={onSearch}
                />
            </FormControl>
        </Stack>
    );
};

export default Header;