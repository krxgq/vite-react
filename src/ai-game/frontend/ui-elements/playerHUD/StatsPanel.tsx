import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { getPlayer } from '../../../backend/api/jsonDB';
import { Player } from '../../../backend/types/player';
import HeroImg from '../images/placeholder.svg';

const fetchPlayer = async () => {
  try {
    const player = await getPlayer();
  } catch (error) {
    console.error('Error fetching player:', error);
  }
};

const StatsPanel = () => {
  const [player, setPlayer] = useState<Player | null>(null);

  // Vezme data
  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const fetchedPlayer = await getPlayer();
        setPlayer(fetchedPlayer);
      } catch (error) {
        console.error('Error fetching player:', error);
      }
    };

    fetchPlayerData();
  }, []);

  
  if (!player) {
    return <div>Loading player data...</div>; 
  }
  return (
    <Box sx={{width: '100%', height:'100%', border: '2px solid gray', boxSizing: 'border-box'}}>
      <Box
      sx={{
        width: '100%',
        height: '22%',
        borderBottom: '2px solid gray',
        borderRadius: '2px',
        backgroundColor: 'lightgray',
        boxSizing: 'border-box'
      }}
    >
      {/* Player Name */}
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '8px', paddingLeft: '4px'}}>
        {player.name}
      </Typography>

      {/* Player HP */}
      <Typography variant="body1" sx={{ marginBottom: '8px', paddingLeft: '4px'}}>
        HP: {player.health}/{player.maxHealth}
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '8px', paddingLeft: '4px' }}>
        Weapon: {player.currentWeapon.name}({player.currentWeapon.damage}DMG)
      </Typography>
      
    </Box>
    <Box sx={{width: '100%', height: '78%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgray'}}>
    <Box 
        sx={{ width: '95%', height: '95%', backgroundImage: `url(${HeroImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}/>
    </Box>
    </Box>
     
    
  );
};

export default StatsPanel;
