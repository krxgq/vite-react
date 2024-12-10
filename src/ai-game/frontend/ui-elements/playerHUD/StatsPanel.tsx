import React from 'react';
import { Box, Typography } from '@mui/material';
import PlayerStats from '../../../backend/entities/creature';
import Creature from '../../../backend/entities/creature';


interface StatsPanelProps {
    Player: Creature; // Expect `creature` as the prop
  }

const StatsPanel: React.FC<StatsPanelProps> = ({ Player }) => {
  return (
    <Box
      sx={{
        width: '100%',
        border: '2px solid black',
        borderRadius: '2px',
        backgroundColor: 'lightgray',
      }}
    >
      {/* Player Name */}
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
        Name: {Player.name}
      </Typography>

      {/* Player HP */}
      <Typography variant="body1" sx={{ marginBottom: '8px' }}>
        HP: {Player.health}/{Player.maxHealth}
      </Typography>

      {/* Weapon Slot */}
      <Box sx={{ border: '1px solid black', borderRadius: '4px', padding: '8px' }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginBottom: '4px' }}>
          Weapon:
        </Typography>
        <Typography variant="body2">Name: {Player.currentWeapon.name}</Typography>
        <Typography variant="body2">Damage: {Player.currentWeapon.damage}</Typography>
      </Box>
    </Box>
  );
};

export default StatsPanel;
