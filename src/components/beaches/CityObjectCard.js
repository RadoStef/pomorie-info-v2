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
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

export const CityObjectCard = () => {
  const {beachesData} = useCategoryData();
  
  return (
    <CardsWrapper>
      {beachesData.map((beaches) => {
        const zonePrice =
          beaches.price === 'Безплатен' ? 'Безплатен плаж' : 'Цени в платената зона:';
        return (
          <Card sx={styles.cityObjectCard} key={beaches.id}>
            <CardActionArea sx={cardStyle} disableRipple>
              <CardMedia
                component='img'
                sx={cardImageStyle}
                image={beaches.img}
                alt={beaches.name}
              />
              <CardContent sx={styles.cardContent}>
                <Typography gutterBottom variant='h5' component='div'>
                  {beaches.name}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  <b>Кратко описание:</b> {beaches.description.slice(0, 300)}
                  <Link to={beaches.linkTo}> ...Виж повече</Link>
                </Typography>
              </CardContent>
            </CardActionArea>

            <Box sx={{ maxWidth: 420, marginTop: '30px' }}>
              <BottomNavigation showLabels>
                <BootstrapTooltip title='Режим на зоната:'>
                  <BottomNavigationAction
                    label={beaches.regime}
                    icon={<BeachAccessIcon sx={iconStyle} />}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip title={zonePrice}>
                  <BottomNavigationAction
                    label={beaches.price}
                    icon={<LocalOfferIcon sx={iconStyle} />}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip title='Местоположение:'>
                  <BottomNavigationAction
                    label={beaches.address}
                    icon={<LocationOnIcon sx={iconStyle} />}
                  />
                </BootstrapTooltip>
              </BottomNavigation>
            </Box>

            <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '15px' }}>
              <Link to={beaches.linkTo}>
                <Button size='small' color='primary' variant='outlined' sx={{ marginTop: '15px' }}>
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
