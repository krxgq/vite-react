import EnemyStats from "./EnemyStats";
import Grid from '@mui/material/Grid2';




const CombatHUD = () => {
    return(
        <Grid container width={'100%'} height={'100%'}>
            <Grid size={6} display="flex" alignItems="center" justifyContent="center" border={'solid white'}>
                <EnemyStats/>
            </Grid>
            <Grid size={6} display="flex" alignItems={"center"} justifyContent={"center"} border={'solid white'}>
                Controls placeholder
            </Grid>
        </Grid>

    );
};

export default CombatHUD;