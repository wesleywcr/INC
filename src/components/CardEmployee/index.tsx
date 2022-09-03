import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { Avatar, Box, Button, Grid, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export interface ContentProps {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  profession?: string;
  dataHiring: Date;
  salary: string;
  OnDelete: () => void;
  OnEdit: () => void;
}
export function CardEmployee({
  name,
  lastName,
  email,
  phone,
  profession,
  dataHiring,
  salary,
  OnEdit,
  OnDelete,
}: ContentProps) {
  const date = new Intl.DateTimeFormat('pt-Br').format(
    Date.parse(String(dataHiring)),
  );

  const salaryFormated = Number(salary).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <Card
      sx={{
        maxWidth: 350,
        height: 380,
        backgroundColor: 'secondary.main',
        borderRadius: 5,
        boxShadow: '5px 3px 3px #242424',
        marginBottom: 3.5,
      }}
    >
      <CardContent sx={{ padding: 4 }}>
        <Box marginLeft={15}>
          <Avatar sx={{ bgcolor: 'primary.main' }}>{name.charAt(0)}</Avatar>
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
            {`${name} ${lastName}`}
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
            {profession}
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
            {email}
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
            {phone}
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
            {salaryFormated}
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
            {date}
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
            onClick={OnEdit}
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
            onClick={OnDelete}
          >
            <DeleteIcon />
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}
