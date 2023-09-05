import { Button, CardActionArea, CardActions } from '@mui/material';
import { useCategoryData } from '../../contexts/CategoriesContext';
import { BootstrapTooltip } from '../UI/Themes';
import { Link } from 'react-router-dom';
import { iconStyle, cardStyle, cardImageStyle } from '../UI/Themes';
import { showMore } from '../mock-data/data';
import { CardsWrapper } from '../UI/CardsWrapper';
import { styles } from '../UI/CityObjectsCardStyles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';

export const CityObjectCard = () => {
  const { museumsData } = useCategoryData();

  return (
    <CardsWrapper>
      {museumsData.map((museum) => {
        return (
          <Card sx={styles.cityObjectCard} key={museum.id}>
            <CardActionArea sx={cardStyle} disableRipple>
              <CardMedia component='img' sx={cardImageStyle} image={museum.img} alt={museum.name} />
              <CardContent sx={styles.cardContent}>
                <Typography gutterBottom variant='h5' component='div'>
                  {museum.name}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  <b>Кратко описание:</b> {museum.description.slice(0, 300)}
                  <Link to={museum.linkTo}> ...Виж повече</Link>
                </Typography>
              </CardContent>
            </CardActionArea>

            <Box sx={{ maxWidth: 420, marginTop: '30px' }}>
              <BottomNavigation showLabels>
                <BootstrapTooltip title='Телефон за връзка:'>
                  <BottomNavigationAction
                    label={museum.phoneNumber}
                    icon={<PhoneForwardedIcon sx={iconStyle} />}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip title='Работно време:'>
                  <BottomNavigationAction
                    label={museum.workTime}
                    icon={<HistoryToggleOffIcon sx={iconStyle} />}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip title='Адрес:'>
                  <BottomNavigationAction
                    label={museum.address}
                    icon={<LocationOnIcon sx={iconStyle} />}
                  />
                </BootstrapTooltip>
              </BottomNavigation>
            </Box>

            <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '15px' }}>
              <Link to={museum.linkTo}>
                <Button size='medium' color='primary' variant='outlined' sx={{ marginTop: '15px' }}>
                  {showMore}
                </Button>
              </Link>
            </CardActions>
          </Card>
        );
      })}
    </CardsWrapper>
  );
};
