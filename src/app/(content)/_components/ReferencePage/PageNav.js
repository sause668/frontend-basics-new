import { MenuList, } from "@mui/material";
import NavDir from "./NavDir";


export default function PageNav({mobile, page}) {
    return (
        <>
            {!mobile ? (<></>) : (
                <MenuList 
                    sx={{
                        minWidth: '250px',
                        maxWidth: '251px',
                        bgcolor: 'secondary.main',
                        zIndex: '99',
                        pt: 9,
                        overflowY: 'scroll',
                        overflowX: 'hidden',
                    }}
                >
                    <NavDir page={page} />
                </MenuList>
            )}
        </>
    );
}