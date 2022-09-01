import { Box, Grid } from '@mui/material';
import Stack from '@mui/material/Stack';

import { CardEmployee } from '~/components/CardEmployee';
import Header from '~/components/Header';
import { ModalForm } from '~/components/ModalForm';
export function Home() {
  return (
    <Box
      sx={{ backgroundColor: 'primary.main', width: '100%', height: '100vh' }}
    >
      <Header />
      <Stack direction="row" spacing={2} marginTop={10}>
        <ModalForm />
      </Stack>

      <Grid
        container
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        columnGap={9}
        marginLeft={1}
        marginTop={2}
      >
        <CardEmployee />
        <CardEmployee />
        <CardEmployee />
        <CardEmployee />
        <CardEmployee />
        <CardEmployee />
      </Grid>
    </Box>
  );
}
