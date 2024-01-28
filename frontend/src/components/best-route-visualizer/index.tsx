import axios from '../../axios';
import CircularProgress from '@mui/material/CircularProgress';
import { useQuery } from '@tanstack/react-query';
import { Step, StepLabel, Stepper } from '@mui/material';
import { Client } from '../../types/client';
import { useState } from 'react';

  async function fetchRoute(){
    const data = await axios.get('/clients/route')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error:', error);
    });
    return data;
  }

export default function BestRouteVisualizer() {

  const { data, isLoading } = useQuery({
    queryKey: ['route'],
    queryFn:  fetchRoute,
  });

  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      {isLoading ?  <CircularProgress  />  :
            <Stepper activeStep={activeStep} alternativeLabel>
            {data.map((client: Client, index: number) => (
              <Step key={client.id} onClick={() => setActiveStep(index)}>
                <StepLabel>{client.name.slice(0, 15) + "..."}</StepLabel>
              </Step>
            ))}
          </Stepper>}
    </>
  )
}
