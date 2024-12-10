import { Box } from "@mui/material";
import ColorSettings from '../../ColorSettings';


interface InSlot {
    InSlot: string;
  }

const InventorySlot: React.FC<InSlot> = ({ InSlot }) =>{ //Slot v inventáři, pro čistější kód. Obsah slotu se vkládá až v InventoryGrid.tsx
    return (
        <Box sx={{ border: '2px solid black', backgroundColor: ColorSettings.invSlot, color: ColorSettings.invInSlot, width: '100%', aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', '&:hover':{backgroundColor: 'gray', color: 'white'} }}> {InSlot}</Box>
    );
};

export default InventorySlot;
