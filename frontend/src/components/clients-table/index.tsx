import axios from '../../axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import { useQuery } from '@tanstack/react-query';
import { Client } from '../../types/client';

  async function fetchClients(){
    const data = await axios.get('/clients')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error:', error);
    });
    return data;
  }

export default function ClientsTable() {

  const { data, isLoading } = useQuery({
    queryKey: ['clients'],
    queryFn:  fetchClients,
  });

  return (
 <>
      {isLoading ?  <CircularProgress  />  :
      <TableContainer sx={{ maxWidth: 1200 }} component={Paper} >
            <Table sx={{ minWidth: 650 }} aria-label="clients table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell >Email</TableCell>
                  <TableCell>Phone</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row: Client) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell >{row.phone}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>}
 </>
  )
}
