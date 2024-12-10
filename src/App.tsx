import Grid from '@mui/material/Grid2';
import { Box } from '@mui/material';
import LocationImage from './ai-game/frontend/ui-elements/images/placeholder.svg'
import ImageBox from './ai-game/frontend/ui-elements/ImageBox';
import Creature from './ai-game/backend/entities/creature';
import Weapon from './ai-game/backend/entities/weapon';
import PlayerHUD from './ai-game/frontend/ui-elements/playerHUD/PlayerHUDMain';

import ColorSettings from './ai-game/frontend/ColorSettings';
import './App.css'

const sword : Weapon = { //Test zbraň
  name: "Meč",
  damage: 2
}
const player : Creature = { //Test staty
  name: "Player",
  health: 10,
  maxHealth: 10,
  currentWeapon: sword
}

function App() {
  return <Box>
          <Grid container spacing={0} width={'100vw'} height={'100vh'}> {/*Rozděluje herní plochu na 4 pole*/}
            <Grid size={6} border={'solid'} borderColor={ColorSettings.mainBorder} height={'50vh'}> {/*Zde se bude zobrazovat aktuální lokace*/}

              <ImageBox imgSrc={LocationImage}/>

            </Grid>
            <Grid size={6} border={'solid'} borderColor={ColorSettings.mainBorder} height={'50vh'}> {/*Zde se bude zobrazovat aktuální nepřítel*/}

              Enemy placeholder

            </Grid>

            <Grid size={6} border={'solid'} borderColor={ColorSettings.mainBorder} height={'50vh'}> {/*Zde se bude zobrazovat text popisující příběh, souboje nebo nalezené předměty*/}

              Story text placeholder

            </Grid>
            <Grid size={6} border={'solid'} borderColor={ColorSettings.mainBorder} height={'50vh'}> {/*Zde se bude zobrazovat hráčův inventář a jeho statistiky*/}

            <PlayerHUD/>

            </Grid>
          </Grid>
        </Box>

        
  
 

  
 

}

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Abandoned City Adventure</h1>
      {story && (
        <>
          <p>{story.text}</p>
          <h3>What will you do?</h3>
          <ul>
            {story.options.map((option, index) => (
              <li key={index}>
                <button onClick={() => handleOptionSelect(option)}>
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default App;
