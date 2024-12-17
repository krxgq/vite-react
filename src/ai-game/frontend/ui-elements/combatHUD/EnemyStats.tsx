import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { getCreature } from '../../../backend/api/jsonDB';
import Creature from '../../../backend/types/creature';
import HeroImg from '../images/placeholder.svg';

const EnemyStats = () => {
  const [creature, setCreature] = useState<Creature | null>(null);

  // Fetch creature with ID 1 (Goblin) when the component loads
  useEffect(() => {
    const fetchCreature = async () => {
      try {
        const fetchedCreature = await getCreature(1); // Automatically fetch ID 1
        if (fetchedCreature) {
          setCreature(fetchedCreature);
        } else {
          console.error('Creature with ID 1 not found.');
        }
      } catch (error) {
        console.error('Error fetching creature:', error);
      }
    };

    fetchCreature();
  }, []);

  if (!creature) {
    return <Typography variant="body1">Loading creature data...</Typography>;
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
        {creature.name}
      </Typography>

      {/* Player HP */}
      <Typography variant="body1" sx={{ marginBottom: '8px', paddingLeft: '4px'}}>
        HP: {creature.health}/{creature.maxHealth}
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '8px', paddingLeft: '4px' }}>
        Weapon: {creature.currentWeapon.name}({creature.currentWeapon.damage}DMG)
      </Typography>
      
    </Box>
    <Box sx={{width: '100%', height: '78%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgray'}}>
    <Box 
        sx={{ width: '95%', height: '95%', backgroundImage: `url(${HeroImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}/>
    </Box>
    </Box>
  );
};

export default EnemyStats;
