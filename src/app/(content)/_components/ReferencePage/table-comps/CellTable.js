import { Paper, TableContainer, Table, TableHead, TableBody, TableCell, TableRow } from "@mui/material";
import { blue } from "@mui/material/colors";

export default function CellTable({cell, rowId}) {
    return (
        <TableContainer component={Paper}>
            <Table >
                <TableHead>
                    <TableRow>
                        {cell.table.head.map((headCell,index) => (
                            <TableCell sx={{fontWeight: 700}} key={`${rowId}${index}head`} >{headCell}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                {cell.table.body.map((bodyRow, index) => (
                    <TableRow key={`${rowId}${index}row`} sx={{
                        '&:nth-of-type(odd)': {
                            backgroundColor: blue[50],
                        },
                    }}>
                        {bodyRow.map((bodyCell, index) => (
                            <TableCell key={`${rowId}${index}cell`} sx={{
                                color: (index == 0) ? blue.A700 : '',
                                p: {xs: .5, sm: 1, md: 2},
                            }} >
                                {bodyCell}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>



    );
} 