import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleShipping } from '../../store/action/checkoutAction';



const Shipping = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch()

    const [state, setState] = useState({
        address: "",
        city: "",
        zip: "",
        state: "",
        country: ""

    })

    const handleInputAddress = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const backToDetails = () => {
        navigate('/');
    }

    const goToPayment = () => {
        if (!state?.address || !state?.city || !state?.country || !state?.state || !state?.zip) {
            return
        }
        dispatch(handleShipping(state))
        navigate('/payment');
    }
    return (
        <div>
            <h4 style={{ color: '#666' }}>Shipping Form</h4>

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
                    label="Address"
                    name="address"
                    value={state?.address}
                    onChange={handleInputAddress}
                    sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
                />
                <TextField
                    id="outlined-name"
                    label="City"
                    name="city"
                    value={state?.city}
                    onChange={handleInputAddress}
                    sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
                />

                <TextField
                    id="outlined-name"
                    label="Zip Code"
                    name="zip"
                    value={state?.zip}
                    onChange={handleInputAddress}
                    sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
                />

                <TextField
                    id="outlined-name"
                    label="State Code"
                    name="state"
                    value={state?.state}
                    onChange={handleInputAddress}
                    sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
                />

                <TextField
                    id="outlined-name"
                    label="Country"
                    name="country"
                    value={state?.country}
                    onChange={handleInputAddress}
                    sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
                />
            </Box>

            {/* <div >
                    <input type='text' name="address" placeholder='Address' value={state?.address} onChange={handleInputAddress} />
                </div>
                <div >
                    <input type='text' name="city" placeholder='City' value={state?.city} onChange={handleInputAddress} />
                </div>
                <div >
                    <input type='text' name="zip" placeholder='Zip Code' value={state?.zip} onChange={handleInputAddress} />
                </div>
                <div >
                    <input type='text' name="state" placeholder='State Code' value={state?.state} onChange={handleInputAddress} />
                </div>
                <div >
                    <input type='text' name="country" placeholder='Country' value={state?.country} onChange={handleInputAddress} />
                </div> */}


            <div style={{ marginTop: '1rem' }}>
                <Button variant="contained" style={{ marginRight: '10px' }} onClick={backToDetails}>Go back</Button>
                <Button variant="contained" color="success" onClick={goToPayment}>Go to Payment</Button>
            </div>

        </div>
    )
}

export default Shipping