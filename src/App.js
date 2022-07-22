
import './App.css';
import { useEffect } from 'react';
import Details from './components/checkout/Details';
import Payment from './components/checkout/Payment';
import Shipping from './components/checkout/Shipping';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


import {
    BrowserRouter,
    Routes,
    Route,
    useNavigate,
} from "react-router-dom";
import { useSelector } from 'react-redux';
import Stepper1 from './components/checkout/Stepper1';

function App() {
    const navigate = useNavigate()
    const { is_loading, message, data } = useSelector(state => state.checkout)

    useEffect(() => {
        if (!data?.details?.is_submitted && !data?.shippng?.is_submitted && !data?.payment?.is_submitted) {
            navigate('/')
        }
    }, [data]);

    return (


        <div className="App App-header">
            {
                is_loading ? <CircularProgress /> :
                    message ?
                        <div style={{ color: 'green' }}>
                            <CheckCircleOutlineIcon />
                            <div>{message}</div>
                        </div>
                        :
                        <div >

                            <Stepper1 />
                            <Routes>
                                <Route path="/" element={<Details />} />
                                <Route path="/shipping" element={<Shipping />} />
                                <Route path="/payment" element={<Payment />} />
                            </Routes>
                        </div>
            }

        </div>

    );
}

export default App;
