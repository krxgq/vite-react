import React from 'react';
import { Box } from '@mui/material';

interface TextBoxProps {
    imgSrc: string; // Definje proměnnou zdroje obrázku
  }
  
  const ImageBox: React.FC<TextBoxProps> = ({ imgSrc }) => { //Box pro vložení obrázku do gridu
    return (
        <Box 
        sx={{ 
          width: '100%', 
          height: '100%', 
          borderRadius: '16px', 
          backgroundImage: `url(${imgSrc})`,
          backgroundRepeat: 'no-repeat', 
          backgroundSize: 'cover',
        }}/>
    );
  };
  
  export default ImageBox;