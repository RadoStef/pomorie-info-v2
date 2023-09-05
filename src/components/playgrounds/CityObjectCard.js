import { Link } from 'react-router-dom';
import { useCategoryData } from '../../contexts/CategoriesContext';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { BootstrapTooltip } from '../UI/Themes';
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
  const { playgroundsData } = useCategoryData();
  
  return (
    <CardsWrapper>
      {playgroundsData.map((playground) => {
        return (
          <Card sx={styles.cityObjectCard} key={playground.id}>
            <CardActionArea sx={cardStyle} disableRipple>
              <CardMedia
                component='img'
                sx={cardImageStyle}
                image={playground.img}
                alt={playground.name}
              />
              <CardContent sx={styles.cardContent}>
                <Typography gutterBottom variant='h5' component='div'>
                  {playground.name}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  <b>Кратко описание:</b> {playground.description.slice(0, 300)}
                  <Link to={playground.linkTo}> ...Виж повече</Link>
                </Typography>
              </CardContent>
            </CardActionArea>

            <Box sx={{ maxWidth: 420, marginTop: '30px' }}>
              <BottomNavigation showLabels>
                <BootstrapTooltip title='Телефон за връзка:'>
                  <BottomNavigationAction
                    label={playground.phoneNumber}
                    icon={<PhoneForwardedIcon sx={iconStyle} />}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip title='Работно време:'>
                  <BottomNavigationAction
                    label={playground.workTime}
                    icon={<HistoryToggleOffIcon sx={iconStyle} />}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip title='Адрес:'>
                  <BottomNavigationAction
                    label={playground.address}
                    icon={<LocationOnIcon sx={iconStyle} />}
                  />
                </BootstrapTooltip>
              </BottomNavigation>
            </Box>

            <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '15px' }}>
              <Link to={playground.linkTo}>
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
