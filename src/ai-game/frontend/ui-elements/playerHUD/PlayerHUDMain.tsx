import Inventory from "./Inventory";
import StatsPanel from "./StatsPanel";
import Grid from '@mui/material/Grid2';




const PlayerHUD = () => {
    return(
        <Grid container width={'100%'} height={'100%'}>
            <Grid size={6} display="flex" alignItems="center" justifyContent="center" border={'solid white'}>
                <StatsPanel/>
            </Grid>
            <Grid size={6} display="flex" alignItems={"center"} justifyContent={"center"} border={'solid white'}>
                <Inventory/>
            </Grid>
        </Grid>

    );
};

export default PlayerHUD;