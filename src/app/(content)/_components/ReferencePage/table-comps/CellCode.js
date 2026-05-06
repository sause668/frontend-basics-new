import { Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

export default function CellCode({cell}) {
    return (
        <Typography variant="code" paragraph sx={{ 
            lineHeight: 1.3,
            backgroundColor: blue.A400,
            color: 'white',
            fontSize: 15,
            width: '100%', 
            wordWrap: 'break-word', 
            overflowWrap: 'break-word',
            my: 0,
            py: 0,
            pl: cell.indent*2,
        }}>
            {cell.code}
        </Typography>
    );
} 