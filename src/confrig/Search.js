import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';


export default function Search() {
 

  return (
      <Container>

    <Box
    
 
    // id="serch_css"
    sx={{
        display: 'flex',
        m: 'auto',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
        // width: '100%'
    }}
    >
     
      <TextField   fullWidth sx={{flexGrow: 2}} id="demo-helper-text-misaligned-no-helper" label="Enter product ....." />
    </Box>
        </Container>
  );
}