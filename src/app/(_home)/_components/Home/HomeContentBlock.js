import { ButtonBase, Grid, Typography } from '@mui/material'
import Link from 'next/link';

export default function HomeContentBlock({page}) {
    return (
        
        <Grid item xs={10} sm={8} md={7} lg={7} sx={{
              }}>
                    <ButtonBase 
                        LinkComponent={Link}
                        href={`/${page.id}`}
                        sx={{
                            display: "block",
                            backgroundColor: '#2979ff',
                            borderRadius: '10px',
                            width: '100%',
                            height: '100px',
                    }} >
                    <Typography variant="h4" color="white" align="center" >{page.title}</Typography>

                    <Typography variant="h6" color="white" align="center" >{page.dis}</Typography>
                    </ButtonBase>
        </Grid>

    );
}