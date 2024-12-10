import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import InventorySlot from './InventorySlot';

const Inventory = () => { //2x3 grid pro itemy v inventáři, jednotlivé sloty jsou importovány z InventorySlot.tsx, ale předměty v nich se definují zde
  return (
    <Box sx={{ width: '100%', height: '100%'}}>
       <Box
      sx={{ width: '100', borderRadius: '16px', border: '3px solid black', backgroundColor: 'lightgray', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black', fontWeight: 'bold', fontSize: '16px'
      }}
    >
      Inventář
    </Box>
      <Grid container spacing={0} alignContent={'center'}>
        <Grid size={6} display="flex" alignItems="center" justifyContent="center">
          <InventorySlot InSlot='1'></InventorySlot>
        </Grid>
        <Grid size={6} display="flex" alignItems="center" justifyContent="center">
          <InventorySlot InSlot='2'></InventorySlot>
        </Grid>
        <Grid size={6} display="flex" alignItems="center" justifyContent="center">
          <InventorySlot InSlot='3'></InventorySlot>
        </Grid>
        <Grid size={6} display="flex" alignItems="center" justifyContent="center">
          <InventorySlot InSlot='4'></InventorySlot>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Inventory;
