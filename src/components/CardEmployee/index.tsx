import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Avatar, Box, Button, Grid, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export function CardEmployee() {
  return (
    <Card
      sx={{
        maxWidth: 340,
        height: 370,
        backgroundColor: 'secondary.main',
        borderRadius: 5,
        boxShadow: '5px 3px 3px #242424',
        marginBottom: 3.5,
      }}
    >
      <CardContent sx={{ padding: 4 }}>
        <Box marginLeft={15}>
          <Avatar
            alt="funcionário"
            src="https://avatars.githubusercontent.com/u/60634942?v=4"
          />
        </Box>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            gutterBottom
            variant="h1"
            component="h1"
            fontSize={32}
            fontWeight={'bold'}
            color={'primary.contrastText'}
          >
            Wesley Rodrigues
          </Typography>
          <Typography
            gutterBottom
            variant="h1"
            component="p"
            fontSize={12}
            fontWeight={'300'}
            textAlign={'center'}
            letterSpacing={2}
            marginBottom={2}
            color={'primary.contrastText'}
          >
            Desenvolvedor Frontend
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Typography
            variant="subtitle1"
            color="text.secondary"
            fontSize={12}
            fontWeight={'600'}
            textAlign={'justify'}
          >
            E-mail:
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            fontSize={12}
            fontWeight={'500'}
            textAlign={'justify'}
            marginLeft={1}
          >
            wesley@teste.com
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Typography
            variant="subtitle1"
            color="text.secondary"
            fontSize={12}
            fontWeight={'600'}
            textAlign={'justify'}
          >
            Telefone:
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            fontSize={12}
            fontWeight={'500'}
            textAlign={'justify'}
            marginLeft={1}
          >
            (12)998765432
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Typography
            variant="subtitle1"
            color="text.secondary"
            fontSize={12}
            fontWeight={'600'}
            textAlign={'justify'}
          >
            Salário:
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            fontSize={12}
            fontWeight={'500'}
            textAlign={'justify'}
            marginLeft={1}
          >
            {`R$ 5.000,00`}
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Typography
            variant="subtitle1"
            color="text.secondary"
            fontSize={12}
            fontWeight={'600'}
            textAlign={'justify'}
          >
            Data de contração:
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            fontSize={12}
            fontWeight={'500'}
            textAlign={'justify'}
            marginLeft={1}
          >
            01/09/2022
          </Typography>
        </Grid>
      </CardContent>
      <CardActions>
        <Stack
          width={'100vw'}
          direction="row"
          spacing={5}
          borderRadius={10}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Button
            color="primary"
            variant="contained"
            style={{
              borderRadius: '50%',
              backgroundColor: 'primary.light',
              height: '60px',
              width: '60px',
              border: '1px solid #000',
            }}
          >
            <VisibilityIcon />
          </Button>
          <Button
            color="primary"
            variant="contained"
            style={{
              borderRadius: '50%',
              backgroundColor: 'primary.light',
              height: '60px',
              width: '60px',
              border: '1px solid #000',
            }}
          >
            <CreateIcon />
          </Button>

          <Button
            color="primary"
            variant="contained"
            style={{
              borderRadius: '50%',
              backgroundColor: 'primary.light',
              height: '60px',
              width: '60px',
              border: '1px solid #000',
            }}
          >
            <DeleteIcon />
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}
