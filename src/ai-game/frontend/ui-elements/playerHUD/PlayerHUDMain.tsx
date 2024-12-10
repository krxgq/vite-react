import Inventory from "./Inventory";
import StatsPanel from "./StatsPanel";
import Grid from '@mui/material/Grid2';
import Weapon from "../../../backend/entities/weapon";
import Creature from "../../../backend/entities/creature";

const player: Creature = {
    name: 'Player',
    health: 80,
    maxHealth: 100,
    currentWeapon: {
      name: 'Sword',
      damage: 2,
    },
  };


const PlayerHUD = () => {
    return(
        <Grid container width={'100%'} height={'100%'}>
            <Grid size={6} display="flex" alignItems="center" justifyContent="center" border={'solid white'}>
                <StatsPanel Player={player} />
            </Grid>
            <Grid size={6} display="flex" alignItems={"center"} justifyContent={"center"} border={'solid white'}>
                <Inventory/>
            </Grid>
        </Grid>

    );
};

export default PlayerHUD;