import { Grid, Container } from '@mui/material'

export default function HomeContent({children}) {
    return (
        <div style={{backgroundColor: '#2962ff'}}>
            <Container sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: 'center',
            }} >
                <Grid container spacing={2} sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center',
                    marginY: '20px',
                }}>
                    {children}
                </Grid>
            </Container>
            
        </div>
    );
}