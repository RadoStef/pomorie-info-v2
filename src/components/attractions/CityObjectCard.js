import { Link } from 'react-router-dom';
import { useCategoryData } from '../../contexts/CategoriesContext';
import { BootstrapTooltip } from '../UI/Themes';
import { Button, CardActionArea, CardActions } from '@mui/material';
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
import LazyLoad from 'react-lazy-load';

export const CityObjectCard = () => {
  const {attractionsData} = useCategoryData();

  return (
    <CardsWrapper>
    {attractionsData.map((attraction) => {
      return (
        <Card sx={styles.cityObjectCard} key={attraction.id}>
          <CardActionArea sx={cardStyle} disableRipple>
            <LazyLoad>
                <CardMedia
                  component='img'
                  sx={cardImageStyle}
                  image={attraction.img}
                  alt={attraction.name}
                />
            </LazyLoad>
            <CardContent sx={styles.cardContent}>
              <Typography gutterBottom variant='h5' component='div'>
                {attraction.name}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                <b>Кратко описание:</b> {attraction.description.slice(0, 300)}
                <Link to={attraction.linkTo}> ...Виж повече</Link>
              </Typography>
            </CardContent>
          </CardActionArea>

          <Box sx={{ maxWidth: 420, marginTop: '30px' }}>
            <BottomNavigation showLabels>
              <BootstrapTooltip title='Телефон за връзка:'>
                <BottomNavigationAction
                  label={attraction.phoneNumber}
                  icon={<PhoneForwardedIcon sx={iconStyle} />}
                />
              </BootstrapTooltip>
              <BootstrapTooltip title='Работно време:'>
                <BottomNavigationAction
                  label={attraction.workTime}
                  icon={<HistoryToggleOffIcon sx={iconStyle} />}
                />
              </BootstrapTooltip>
              <BootstrapTooltip title='Адрес:'>
                <BottomNavigationAction
                  label={attraction.address}
                  icon={<LocationOnIcon sx={iconStyle} />}
                />
              </BootstrapTooltip>
            </BottomNavigation>
          </Box>

          <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '15px' }}>
            <Link to={attraction.linkTo}>
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
