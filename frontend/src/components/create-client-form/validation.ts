
import * as Yup from 'yup';

export const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone is required'),
    coordinate_x: Yup.number().required('Coordinate x is required'),
    coordinate_y: Yup.number().required('Coordinate y is required'),
  })