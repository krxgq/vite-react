import Grid from '@mui/material/Grid2';
import { Box } from '@mui/material';
import LocationImage from './ai-game/frontend/ui-elements/images/placeholder.svg'
import ImageBox from './ai-game/frontend/ui-elements/ImageBox';
import HandleFight from './ai-game/backend/combat/combat';
import PlayerHUD from './ai-game/frontend/ui-elements/playerHUD/PlayerHUDMain';
import CombatHUD from './ai-game/frontend/ui-elements/combatHUD/CombatHUDMain';
import ColorSettings from './ai-game/frontend/ColorSettings';
import StoryPanel from './ai-game/frontend/ui-elements/StoryPanel';

import './App.css'




function App() {
  return <Box>
          <Grid container spacing={0} width={'100vw'} height={'100vh'}> {/*Rozděluje herní plochu na 4 pole*/}
            <Grid size={6} border={'solid'} borderColor={ColorSettings.mainBorder} height={'50vh'}> {/*Zde se bude zobrazovat aktuální lokace*/}

              <ImageBox imgSrc={LocationImage}/>

            </Grid>
            <Grid size={6} border={'solid'} borderColor={ColorSettings.mainBorder} height={'50vh'}> {/*Zde se bude zobrazovat aktuální nepřítel*/}

              <CombatHUD/>

            </Grid>

            <Grid size={6} border={'solid'} borderColor={ColorSettings.mainBorder} height={'50vh'}> {/*Zde se bude zobrazovat text popisující příběh, souboje nebo nalezené předměty*/}

              <StoryPanel onFight={HandleFight}/>

            </Grid>
            <Grid size={6} border={'solid'} borderColor={ColorSettings.mainBorder} height={'50vh'}> {/*Zde se bude zobrazovat hráčův inventář a jeho statistiky*/}

            <PlayerHUD/>

            </Grid>
          </Grid>
        </Box>

        
}
export default App;
