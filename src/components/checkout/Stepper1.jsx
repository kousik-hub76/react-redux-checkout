import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useSelector } from 'react-redux';

const steps = [
    'Details ',
    'Shipping ',
    'Payment ',
];

export default function Stepper1() {
    const { is_submitted, data } = useSelector(state => state.checkout)

    const [activeStep, setActiveStep] = React.useState(0);

    // const handleNext = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // };

    // const handleBack = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // }

    useEffect(() => {
        if (data?.details?.is_submitted) {
            setActiveStep(1)

            if (data?.shipping?.is_submitted) {
                setActiveStep(2)

                if (data?.payment?.is_submitted) {
                    setActiveStep(3)
                }
            }
        }
    }, [data]);
    return (
        <Box sx={{ width: '100%', marginBottom: '2rem' }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}
