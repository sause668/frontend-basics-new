import { Typography, } from "@mui/material";
import React from "react";
import RowContent from "./RowContent";
import CellContent from "./CellContent";


export default function TableContent({table, pageId}) {
    return (
        <div key={`${pageId}${table.id}`} id={table.id} >
            <Typography variant="h3" align="left" color='primary' sx={{pt: 10}} >{table.title}</Typography>
                {table.titleDir.map((cell, index)=>(
                    <CellContent cell={cell} key={`${table.id}${index}titleCell`} />
                ))}
            {table.RowDir.map((row, index)=>(
                <RowContent row={row} key={`${table.id}${row.id}${index}`} />
            ))}
        </div>
    );
} 


