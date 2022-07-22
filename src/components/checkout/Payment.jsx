import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handlePayment, resetCheckoutForm } from '../../store/action/checkoutAction';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { MESSAGE } from '../../store/action/actionType';



const Payment = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    // const { is_submitted } = useSelector(state => state.checkoutReducer)
    const { message, is_loading } = useSelector(state => state.checkout)
    const [state, setState] = useState({
        name_on_card: "",
        card_number: "",
        cvv: "",
        expiration_date: ""

    })
    const [successfull, setSuccessfull] = useState({
        loading: false,
        message: null
    })

    // const [details, setDetails] = useState({
    //     loading: false,
    //     message: null
    // })


    const handleInputPayment = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const backToShipping = () => {
        navigate('/shipping')
    }

    const handleSubmit = () => {
        if (!state?.name_on_card || !state?.card_number || !state?.cvv || !state?.expiration_date) {
            return
        }
        dispatch(handlePayment(state))

    }


    return (


        <div>
            <h4 style={{ color: '#666' }}>Payment Form</h4>
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
                    label="Name on Card"
                    name="name_on_card"
                    value={state?.name_on_card}
                    onChange={handleInputPayment}
                    sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
                />
                <TextField
                    id="outlined-name"
                    label="Card Number"
                    name="card_number"
                    value={state?.card_number}
                    onChange={handleInputPayment}
                    sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
                />
                <TextField
                    id="outlined-name"
                    label="CVV"
                    name="cvv"
                    value={state?.cvv}
                    onChange={handleInputPayment}
                    sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
                />
                <TextField
                    id="outlined-name"
                    label="Expiration Date"
                    name="expiration_date"
                    value={state?.expiration_date}
                    onChange={handleInputPayment}
                    sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
                />
            </Box>

            {/* <div >
                    <input type='text' name="name_on_card" placeholder='Name on Card' value={state?.name_on_card} onChange={handleInputPayment} />
                </div>
                <div >
                    <input type='text' name="card_number" placeholder='Card Number' value={state?.card_number} onChange={handleInputPayment} />
                </div>
                <div >
                    <input type='text' name="cvv" placeholder='CVV' value={state?.cvv} onChange={handleInputPayment} />
                </div>
                <div >
                    <input type='text' name="expiration_date" placeholder='Expiration Date' value={state?.expiration_date} onChange={handleInputPayment} />
                </div> */}
            <div style={{ marginTop: '1rem' }}>
                <Button variant="contained" style={{ marginRight: '10px' }} onClick={backToShipping}>Go back</Button>
                <Button variant="contained" color="success" onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    )
}

export default Payment