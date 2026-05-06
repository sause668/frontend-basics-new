import { Typography, } from "@mui/material";

export default function CellText({cell}) {
    return (
        <Typography variant="body1" paragraph color='black' sx={{ lineHeight: 2, pb: 1.5, mb: 0, width: '100%', wordWrap: 'break-word', overflowWrap: 'break-word'}}>{cell.text}</Typography>
    );
} 