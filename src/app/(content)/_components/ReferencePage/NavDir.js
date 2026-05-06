'use client';

import { MenuItem, Typography, Collapse } from "@mui/material";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';


export default function NavDir({page, close}) {
    const [tableCol, setTableCol] = useState(null);
    const navDirKey = 'nav';
    const dynamicRoute = usePathname();

    function changeTableCol(index,id) {
        (index == tableCol) ? setTableCol(null) : setTableCol(index);
        var elm = document.getElementById(id);
        elm.scrollIntoView({behavior: "smooth"}); 
    };

    function scroll(id) {
        var elm = document.getElementById(id);
        elm.scrollIntoView({behavior: "smooth"}); 
        try {
            close(null);
        }
        catch (err) {}
    }

    useEffect(() => {
        setTableCol(null);
    }, [dynamicRoute])// When the dynamic route change reset the state

    return (
        <>
            {page.TableDir.map((table, index) => (
                <div key={`${navDirKey}${page.id}${table.id}`} style={{maxWidth: '250px',}} >
                    <MenuItem onClick={()=>changeTableCol(index,table.id)} sx={{alignItems: 'center',}} >
                        <Typography variant="body1" color='white' align="left" >
                            {table.title}
                            {(index == tableCol) ? <ExpandLess /> : <ExpandMore />}
                        </Typography>
                    </MenuItem>
                    <Collapse in={(index == tableCol)} timeout="auto" unmountOnExit>
                        {table.RowDir.map((row) => (
                            <MenuItem 
                                key={`${navDirKey}${table.id}${row.id}`}
                                onClick={()=>scroll(row.id)}
                            >
                                <Typography 
                                    variant="body2" 
                                    color='white' 
                                    align="left" 
                                    sx={{
                                        fontWeight: ('headCellDir' in row) ? 700 : 400
                                    }}
                                >
                                    {row.title}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Collapse>
                </div>
            ))}
        </>
    );
}