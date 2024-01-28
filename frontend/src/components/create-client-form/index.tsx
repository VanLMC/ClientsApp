
import { Box, TextField } from '@mui/material';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { useMutation } from '@tanstack/react-query';
 import { useFormik } from 'formik';
import axios from '../../axios';
import { Client } from '../../types/client';
import { validationSchema } from './validation';

async function createClient(values: Client): Promise<void>{
  await axios.post('/clients', values)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

interface CreateClientFormProps {
  setShowCreateClientForm: (value: boolean) => void
}

export default function CreateClientForm({setShowCreateClientForm}: CreateClientFormProps) {
  const mutation = useMutation({
    mutationFn: createClient,
    onSuccess: () =>   setShowCreateClientForm(false)
  });

    const {  setFieldValue, isSubmitting, submitForm, isValid, errors } = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            coordinate_x: undefined,
            coordinate_y: undefined
        },
        validationSchema,
        onSubmit: (values, {setSubmitting}) => {
          if(!isValid) return;
          mutation.mutate(values);
          setSubmitting(false);
        },
      });

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
       <Alert severity="info" sx={{marginBottom: 3}}>Create a new user</Alert>
      <div>
        <TextField
          label="Name"
          onChange={(e) => setFieldValue('name', e.target.value)}
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
         label="Email"
         onChange={(e) => setFieldValue('email', e.target.value)}
         error={!!errors.email}
         helperText={errors.email}
        />
        <TextField
          label="Phone"
          onChange={(e) => setFieldValue('phone', e.target.value)}
          error={!!errors.phone}
          helperText={errors.phone}
        />
      </div>
      <div>
        <TextField
          label="Coordinate x"
          type='number'
          onChange={(e) => setFieldValue('coordinate_x', e.target.value)}
          error={!!errors.coordinate_x}
          helperText={errors.coordinate_x}
        />
        <TextField
          label="Coordinate y"
          type='number'
          onChange={(e) => setFieldValue('coordinate_y', e.target.value)}
          error={!!errors.coordinate_y}
          helperText={errors.coordinate_y}
        />
      </div>
      <Button sx={{marginTop: 3, marginRight: 'auto', marginLeft: 'auto'}}
        onClick={submitForm}
        variant="contained"
        >
          {isSubmitting ? '....' : 'Save'}
        </Button>
    </Box>
  )
}
