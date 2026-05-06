import { Box, Container, } from "@mui/material";
import TableContent from "./table-comps/TableContent";


export default function PageContent({page}) {
    return (
        <Box  sx={{
            position: 'relative',
            pb: '100px',
            height: '100%',
            overflowX: 'scroll',
            backgroundColor: 'white'
        }}  >
            <Container  sx={{
                justifyContent: "center",
                alignItems: 'center',
            }} >
                {page.TableDir.map((table) => (
                    <TableContent table={table} pageId={page.id} key={`${page.id}${table.id}`}/>
                ))}
            </Container>
        </Box>
    );
}