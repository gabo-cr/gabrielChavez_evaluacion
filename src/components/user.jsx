import * as React from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '225px',
}));

const User = ({ user }) => {
    return (
        <Grid item xs={6} key={user.id}>
            <Item>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{alignItems: 'center'}}>
                    <Grid item xs={5}>
                        <img 
                            src={user.avatar} 
                            alt={user.first_name} 
                            className='image'/>
                    </Grid>
                    <Grid item xs={7}>
                        <p className='name'>{user.first_name + ' ' + user.last_name}</p> 
                        <div className='text-block'>
                            <p className='label'>Email: </p>
                            <p className='text'>{user.email}</p>
                        </div>
                        <div className='text-block'>
                            <p className='label'>Gender: </p>
                            <p className='text'>{user.gender}</p>
                        </div>
                        <div className='text-block'>
                            <p className='label'>Phone: </p>
                            <p className='text'>{user.phone_number}</p>
                        </div>
                        <div className='text-block'>
                            <p className='label'>Date of birth: </p>
                            <p className='text'>{user.date_of_birth}</p>
                        </div>
                        <div className='text-block'>
                            <p className='label'>Employment: </p>
                            <p className='text'>{user.employment.title}</p>
                        </div>
                        <div className='text-block'>
                            <p className='label'>City: </p>
                            <p className='text'>{user.address.city}</p>
                        </div>
                        <div className='text-block'>
                            <p className='label'>Street address: </p>
                            <p className='text'>{user.address.street_address}</p>
                        </div>
                        <div className='text-block'>
                            <p className='label'>Subscription: </p>
                            <p className='text'>{user.subscription.plan}</p>
                        </div>
                    </Grid>
                </Grid>
            </Item>
        </Grid>
    );
};

export default User;
