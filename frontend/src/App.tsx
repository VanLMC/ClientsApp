import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import ClientsTable from './components/clients-table';
import BestRouteVisualizer from './components/best-route-visualizer';
import { useState } from 'react';
import CreateClientForm from './components/create-client-form';

function App() {
  const [showCreateClientForm, setShowCreateClientForm] = useState(false);
  return (
    <div className='app'>
      {showCreateClientForm ? <CreateClientForm setShowCreateClientForm={setShowCreateClientForm} /> :
      <>
        {!showCreateClientForm &&
        <Button sx={{margin: 1}}
        onClick={() => setShowCreateClientForm(value => !value)}
        variant="contained">
          Create new client
        </Button>}
        <ClientsTable />

        <Alert severity="info" sx={{m: 1}}>BEST ROUTE TO CLIENTS VISUALIZER</Alert>
        <BestRouteVisualizer/>
      </>
      }
    </div>
  )
}

export default App
