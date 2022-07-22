import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { handleDetails } from '../../store/action/checkoutAction';
import { useDispatch } from 'react-redux';

import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';



const Details = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const [state, setState] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: ""
    })

    const handleInput = (e) => {
        setState({ ...state, [e?.target?.name]: e.target.value })
    }

    const goToShipping = () => {
        if (!state.first_name || !state.last_name || !state?.email || !state?.phone) {
            return
        }
        dispatch(handleDetails(state))
        navigate('/shipping');
    }


    return (
        <div>
            <h4 style={{ color: '#666' }}>Details Form</h4>

            {/* <div >
                <input type='text' name="first_name" placeholder='First Name' value={state?.first_name} onChange={handleInput} />
            </div> */}

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                    display: 'flex',
                    flexDirection: 'column'


                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-name"
                    label="First Name"
                    name="first_name"
                    value={state?.first_name}
                    onChange={handleInput}
                    sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
                />
                <TextField
                    id="outlined-name"
                    label="Last Name"
                    name="last_name"
                    value={state?.last_name}
                    onChange={handleInput}
                    sx={{ backgroundColor: '#fff', borderRadius: '5px' }}

                />
                <TextField
                    id="outlined-name"
                    label="Email"
                    name="email"
                    value={state?.email}
                    onChange={handleInput}
                    sx={{ backgroundColor: '#fff', borderRadius: '5px' }}

                />
                <TextField
                    id="outlined-name"
                    label="Phone Number"
                    name="phone"
                    value={state?.phone}
                    onChange={handleInput}
                    sx={{ backgroundColor: '#fff', borderRadius: '5px' }}

                />

            </Box>
            {/* ---------------------- */}
            {/* <FormControl variant="standard">
                <InputLabel htmlFor="component-simple">First Name</InputLabel>
                <Input id="component-simple" />
            </FormControl> */}
            {/* ----------------x---------- */}
            {/* <div >
                <input type='text' name="last_name" placeholder='Last Name' value={state?.last_name} onChange={handleInput} />
            </div>
            <div >
                <input type='text' name="email" placeholder='Email' value={state?.email} onChange={handleInput} />
            </div>
            <div >
                <input type='text' name="phone" placeholder='Phone Number' value={state?.phone} onChange={handleInput} />
            </div> */}
            <div style={{ marginTop: '1rem' }}>
                <Button variant="contained" color="success" onClick={goToShipping}>Go to Shipping</Button>
            </div>
        </div>
    )
}

export default Details